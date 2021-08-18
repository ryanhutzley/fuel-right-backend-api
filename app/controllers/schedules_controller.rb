class SchedulesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        # byebug
        schedules = Schedule.where(user_id: user.id)
        sorted_schedules = schedules.sort{|a,b| a.date <=> b.date}
        render json: sorted_schedules.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    def show
        schedule = Schedule.find_by(id: params[:id])
        combo1 = Array(schedule.wakeup).concat(schedule.activities)
        actions_except_foods = Array(schedule.bedtime).concat(combo1)
        sorted_without_foods = actions_except_foods.sort{|a,b| a.time <=> b.time}
        food_array = Array(schedule.foods)
        # byebug
        food_times = food_array.map{|food| food.time}
        unique_times = food_times.uniq
        grouped_foods_array = []
        unique_times.each do |time|
            grouped_foods = food_array.select{|f| f.time == time}
            grouped_foods_array << {time: time, foods: grouped_foods}
        end
        # byebug
        all_actions = sorted_without_foods.concat(grouped_foods_array)
        sorted_actions = all_actions.sort{|a,b| a[:time] <=> b[:time]}
        frontend_array = []
        frontend_array << schedule
        frontend_array << sorted_actions
        # byebug
        render json: frontend_array
    end

    def sleep_durations
        user = User.find_by(id: session[:user_id])
        schedules = Schedule.where(user_id: user.id)
        durations = []
        schedules.each do |schedule|
            if schedule.bedtime
                date = schedule.bedtime['time'].to_date.next_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.wakeup
                    diff = new_schedule.wakeup[:time].to_i - schedule.bedtime[:time].to_i
                    # byebug
                    durations << diff
                end
            end
        end
        avg_seconds = durations.sum / durations.size
        avg_minutes = avg_seconds / 60
        hours = avg_minutes / 60.floor
        mins = avg_minutes % 60
        avg_duration = {hours: hours, mins: mins}
        render json: avg_duration
    end

    def optimal_sleep_duration
        user = User.find_by(id: session[:user_id])
        schedules = Schedule.where(user_id: user.id)
        durations_with_schedule = []
        schedules.each do |schedule|
            if schedule.bedtime
                date = schedule.bedtime['time'].to_date.next_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.wakeup
                    diff = new_schedule.wakeup[:time].to_i - schedule.bedtime[:time].to_i
                    # byebug
                    durations_with_schedule << {duration: diff, schedule: new_schedule}
                end
            end
        end
        schedules_with_activities = durations_with_schedule.select{|obj| obj[:schedule].activities.length != 0}
        if schedules_with_activities.length != 0
            obj_with_best_effort = schedules_with_activities.max_by do |o|
                schedule = Schedule.find_by(date: o[:schedule].date)
                best_effort = schedule.activities.max_by{|a| a[:perceived_effort]}
                best_effort
            end
            best_sleep_duration = obj_with_best_effort[:duration]
            minutes = best_sleep_duration / 60
            hours = minutes / 60.floor
            added_mins = minutes % 60
            render json: {duration: {hours: hours, added_mins: added_mins}}
        else
            render json: {duration: "Insufficient data"}
        end
    end

    def chart_two_data
        user = User.find_by(id: session[:user_id])
        schedules = Schedule.where(user_id: user.id)
        durations_with_schedule = []
        schedules.each do |schedule|
            if schedule.bedtime
                date = schedule.bedtime['time'].to_date.next_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.wakeup
                    diff = new_schedule.wakeup[:time].to_i - schedule.bedtime[:time].to_i
                    # byebug
                    durations_with_schedule << {duration: diff, schedule: new_schedule}
                end
            end
        end
        schedules_with_activities = durations_with_schedule.select{|obj| obj[:schedule].activities.length != 0}
        if schedules_with_activities.length != 0
            formatted_chart_data = []
            schedules_with_activities.each do |obj|
                best_perceived_effort = obj[:schedule].activities.max_by do |activity|
                    activity[:perceived_effort]
                end
                duration = obj[:duration]
                minutes = duration / 60
                hours = minutes / 60.floor
                added_mins = minutes % 60
                final_duration = "#{hours}h #{added_mins}m"
                formatted_chart_data << {name: final_duration, RPE: best_perceived_effort[:perceived_effort]}
            end
            render json: formatted_chart_data
        else
            render json: nil
        end
    end

end

 # bedtimes.each do |bt|
#     date = bt.time.to_date.next_day
#     schedule = Schedule.find_by(date: date)
#     byebug
#     if schedule && schedule.wakeup
#         durations << diff = schedule.wakeup[:time].to_i - bt[:time].to_i
#     end
# end

# formatted_actions = sorted_actions.map do |action|
#     # {...action, time: action.time.strftime("%k:%M")}
#     format_time = action[:time].to_time.strftime("%k:%M")
#     action[:time] = format_time
#     action 
# end
# render json: formatted_actions