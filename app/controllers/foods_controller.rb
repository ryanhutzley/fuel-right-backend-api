class FoodsController < ApplicationController

    def create
        date = Date.parse(params[:_json][0][:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        food_params[:_json].each do |obj|
            time = Time.parse(obj[:time], date)
            food = schedule.foods.create(name: obj[:name].titleize, portion: obj[:portion], time: time)
            if !food.valid?
                return render json: { errors: food.errors.full_messages }, status: :unprocessable_entity
            end
        end
        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
    end

    def favorite_food
        schedules = Schedule.where(user_id: session[:user_id])
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
            render json: fav_food
        else
            render json: { error: "Insufficient data" }
        end
    end

    def performance_food
        schedules = Schedule.where(user_id: session[:user_id])
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
        if preactivity_foods.length != 0
            best_food = preactivity_foods.max_by do |food|
                schedule = Schedule.find_by(id: food[:schedule_id])
                post_food_activities = schedule.activities.where("time > ?", food[:time])
                closest_activity_to_food = post_food_activities.min_by{|a| a[:time]}
                closest_activity_to_food[:perceived_effort]
            end
            best_food[:name] = best_food[:name].titleize
            render json: best_food
        else
            render json: { error: "Insufficient data" }
        end
    end

    def chart_one_data
        schedules = Schedule.where(user_id: session[:user_id])
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
        if preactivity_foods.length != 0
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
                    avg_rpe = total_rpe / rpes.size
                    final_data << {name: obj[:name].titleize, RPE: avg_rpe}
                    names << obj[:name]
                end
            end
            render json: final_data
        else
            render json: { error: "Insufficient data" }
        end
    end

    private

    def food_params
        params.permit("_json": [:name, :portion, :time])
    end

end
