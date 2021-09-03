class Schedule < ApplicationRecord
  belongs_to :user
  has_one :wakeup, dependent: :destroy
  has_many :bedtimes, dependent: :destroy
  has_many :activities, dependent: :destroy
  has_many :foods, dependent: :destroy
  validates :date, uniqueness: { scope: :user_id, message: "User can only have one schedule per day" }

  def self.durations(schedules, user_id, optimal_or_chart = false)
    durations = []
    durations_with_schedule = []
    schedules.each do |schedule|
      if schedule.bedtimes.length > 0 && schedule.wakeup
        earliest_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
        if earliest_bedtime[:time] < schedule.wakeup[:time]
          diff = schedule.wakeup[:time].to_i - earliest_bedtime[:time].to_i
          if optimal_or_chart
            durations_with_schedule << {duration: diff, schedule: schedule}
          else
            durations << diff
          end
        else
          date = schedule.wakeup[:time].to_date.prev_day
          new_schedule = Schedule.find_by(date: date, user_id: user_id)
          if new_schedule && new_schedule.bedtimes.length > 0
            last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
            diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
            if optimal_or_chart
              durations_with_schedule << {duration: diff, schedule: schedule}
            else
              durations << diff
            end
          end
        end
      elsif schedule.wakeup
        date = schedule.wakeup[:time].to_date.prev_day
        new_schedule = Schedule.find_by(date: date, user_id: user_id)
        if new_schedule && new_schedule.bedtimes.length > 0
          last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
          diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
          if optimal_or_chart
            durations_with_schedule << {duration: diff, schedule: schedule}
          else
            durations << diff
          end
        end
      end
    end
    if optimal_or_chart
      schedules_with_activities = durations_with_schedule.select{|obj| obj[:schedule].activities.length != 0}
      schedules_with_activities
    else
      durations
    end
  end

  def self.best_sleep(schedules_with_activities, user_id)
    data_with_rpe = []
    durations = []
    schedules_with_activities.each do |obj|
      duplicates = schedules_with_activities.select{|o| o[:duration] == obj[:duration]}
      if !durations.include?(obj[:duration])
        avg_rpes = []
        duplicates.each do |d|
            schedule_1 = Schedule.find_by(date: d[:schedule].date, user_id: user_id)
            rpes = schedule_1.activities.map{|a| a[:perceived_effort]}
            rpe_avg = rpes.sum.to_f / rpes.size.to_f
            avg_rpes << rpe_avg
        end
        avg_rpe_for_duration = avg_rpes.sum.to_f / avg_rpes.size.to_f
        data_with_rpe << {duration: obj[:duration], RPE: avg_rpe_for_duration}
        durations << obj[:duration]
      end
    end
    obj_with_best_avg_effort = data_with_rpe.max_by{|obj| obj[:RPE]}
    best_sleep_duration = obj_with_best_avg_effort[:duration]
    minutes = best_sleep_duration / 60
    hours = minutes / 60.floor
    added_mins = minutes % 60
    optimal_duration = {hours: hours, added_mins: added_mins}
    optimal_duration
  end

  def self.chart_data(schedules_with_activities)
    formatted_chart_data = []
    schedules_with_activities.each do |obj|
      rpes = obj[:schedule].activities.map{|a| a[:perceived_effort]}
      avg_rpe = rpes.sum.to_f / rpes.size.to_f
      duration = obj[:duration]
      minutes = duration / 60
      hours = minutes / 60.floor
      added_mins = minutes % 60
      final_duration = "#{hours}h #{added_mins}m"
      formatted_chart_data << {duration: final_duration, RPE: avg_rpe.round(2)}
    end
    final_data = []
    durations = []
    formatted_chart_data.each do |obj|
      duplicates = formatted_chart_data.select{|o| o[:duration] == obj[:duration]}
      if !durations.include?(obj[:duration])
        rpes = duplicates.map{|d| d[:RPE].to_f}
        total_rpe = rpes.reduce(0){|sum, r| sum + r}
        average_rpe = total_rpe / rpes.size
        final_data << {duration: obj[:duration], RPE: average_rpe}
        durations << obj[:duration]
      end
    end
    final_data
  end

  def format_schedule
    sleep_duration = "Insufficient data"
    diff = 0
    if self.bedtimes.length > 0 && self.wakeup
      earliest_bedtime = self.bedtimes.min_by{|b| b[:time]}
      if earliest_bedtime[:time] < self.wakeup[:time]
        diff = self.wakeup[:time].to_i - earliest_bedtime[:time].to_i
      else
        date = self.wakeup[:time].to_date.prev_day
        new_schedule = Schedule.find_by(date: date, user_id: self.user_id)
        if new_schedule && new_schedule.bedtimes.length > 0
          last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
          diff = self.wakeup[:time].to_i - last_bedtime[:time].to_i
        end
      end
    elsif self.wakeup
      date = self.wakeup[:time].to_date.prev_day
      new_schedule = Schedule.find_by(date: date, user_id: self.user_id)
      if new_schedule && new_schedule.bedtimes.length > 0
        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
        diff = self.wakeup[:time].to_i - last_bedtime[:time].to_i
      end
    end
    mins = diff / 60
    hours = mins / 60.floor
    added_mins = mins % 60
    sleep_duration = {hours: hours, added_mins: added_mins}

    combo1 = Array(self.wakeup).concat(self.activities)
    actions_except_foods = Array(self.bedtimes).concat(combo1)
    food_array = Array(self.foods)
    food_times = food_array.map{|food| food.time}
    unique_times = food_times.uniq
    grouped_foods_array = []
    unique_times.each do |time|
        grouped_foods = food_array.select{|f| f.time == time}
        grouped_foods_array << {time: time, foods: grouped_foods}
    end
    all_actions = actions_except_foods.concat(grouped_foods_array)
    sorted_actions = all_actions.sort{|a,b| a[:time] <=> b[:time]}
    frontend_array = []
    frontend_array << self
    frontend_array << sorted_actions
    frontend_array << sleep_duration
    frontend_array
  end

end
