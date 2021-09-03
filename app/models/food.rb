class Food < ApplicationRecord
  belongs_to :schedule
  validates :portion, numericality: true

  def self.most_popular_food(schedules)
    foods = []
    schedules.each do |s|
      foods.concat(s.foods)
    end
    foods_with_name_change = foods.map do |f|
      f[:name] = f[:name].downcase
      f
    end
    if foods.length != 0
      food_names = foods.map{|f| f.name.downcase}
      fav_food = foods_with_name_change.max_by do |f|
        matches = food_names.select{|name| f.name == name}
        matches.count
      end
      # byebug
      fav_food[:name] = fav_food[:name].titleize
      fav_food
    else
      { error: "Insufficient data" }
    end
  end

  def self.preactivity_foods(schedules)
    preactivity_foods = []
    schedules.each do |schedule|
      if schedule.foods.exists? && schedule.activities.exists?
        schedule.activities.each do |activity|
          time = activity[:time]
          foods = schedule.foods.where("time < ?", time)
          foods.each do |f|
            if !preactivity_foods.include?(f)
                preactivity_foods << f
            end
          end
        end
      end
    end
    preactivity_foods
  end

  def self.best_food(preactivity_foods)
    data_with_rpe = []
    names = []
    preactivity_foods.each do |food|
      duplicates = preactivity_foods.select{|f| f[:name].downcase == food[:name].downcase}
      if !names.include?(food[:name].downcase)
        perceived_efforts = []
        duplicates.each do |d|
          schedule = Schedule.find_by(id: d[:schedule_id])
          post_food_activities = schedule.activities.where("time > ?", d[:time])
          closest_activity_to_food = post_food_activities.min_by{|a| a[:time]}
          perceived_efforts << closest_activity_to_food[:perceived_effort]
        end
        average_rpe = perceived_efforts.sum.to_f / perceived_efforts.size.to_f
        data_with_rpe << {name: food[:name], RPE: average_rpe}
        names << food[:name]
      end
    end
    best_food = data_with_rpe.max_by{|data| data[:RPE]}
    best_food[:name] = best_food[:name].titleize
    best_food
  end

  def self.chart_data(preactivity_foods)
    formatted_chart_data = []
    preactivity_foods.each do |food|
      schedule = Schedule.find_by(id: food[:schedule_id])
      post_food_activities = schedule.activities.where("time > ?", food[:time])
      closest_activity_to_food = post_food_activities.min_by{|a| a[:time]}
      rpe = closest_activity_to_food[:perceived_effort]
      formatted_chart_data << {name: food.name.downcase, RPE: rpe}
    end
    final_data = []
    names = []
    formatted_chart_data.each do |obj|
      duplicates = formatted_chart_data.select{|o| o[:name] == obj[:name]}
      if !names.include?(obj[:name])
        # name = duplicates[0][:name]
        rpes = duplicates.map{|d| d[:RPE].to_f}
        total_rpe = rpes.reduce(0){|sum, r| sum + r}
        avg_rpe = total_rpe.to_f / rpes.size.to_f
        final_data << {name: obj[:name].titleize, RPE: avg_rpe.round(2)}
        names << obj[:name]
      end
    end
    final_data
  end

end
