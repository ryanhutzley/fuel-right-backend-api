class SchedulesController < ApplicationController

    def index
        # byebug
        schedules = Schedule.where(user_id: session[:user_id])
        sorted_schedules = schedules.sort{|a,b| a.date <=> b.date}
        render json: sorted_schedules.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
    end

    #################################################################################################
    
    def destroy
        schedule = Schedule.find_by(id: params[:id])
        schedule.destroy
    end
    
    #################################################################################################

    def show
        schedule = Schedule.find_by(id: params[:id])
        sleep_duration = {hours: 0, added_mins: 0}
        if schedule.bedtimes.length > 0 && schedule.wakeup
            earliest_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
            if earliest_bedtime[:time] < schedule.wakeup[:time]
                diff = schedule.wakeup[:time].to_i - earliest_bedtime[:time].to_i
                mins = diff / 60
                hours = mins / 60.floor
                added_mins = mins % 60
                sleep_duration = {hours: hours, added_mins: added_mins}
            else
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.bedtimes.length > 0
                    last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                    diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                    mins = diff / 60
                    hours = mins / 60.floor
                    added_mins = mins % 60
                    sleep_duration = {hours: hours, added_mins: added_mins}
                end
            end
        elsif schedule.wakeup
            date = schedule.wakeup[:time].to_date.prev_day
            new_schedule = Schedule.find_by(date: date)
            if new_schedule && new_schedule.bedtimes.length > 0
                last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                mins = diff / 60
                hours = mins / 60.floor
                added_mins = mins % 60
                sleep_duration = {hours: hours, added_mins: added_mins}
            end
        end
        combo1 = Array(schedule.wakeup).concat(schedule.activities)
        actions_except_foods = Array(schedule.bedtimes).concat(combo1)
        food_array = Array(schedule.foods)
        food_times = food_array.map{|food| food.time}
        unique_times = food_times.uniq
        grouped_foods_array = []
        unique_times.each do |time|
            grouped_foods = food_array.select{|f| f.time == time}
            grouped_foods_array << {time: time, foods: grouped_foods}
        end
        # byebug
        all_actions = actions_except_foods.concat(grouped_foods_array)
        sorted_actions = all_actions.sort{|a,b| a[:time] <=> b[:time]}
        frontend_array = []
        frontend_array << schedule
        frontend_array << sorted_actions
        frontend_array << sleep_duration
        # byebug
        render json: frontend_array
    end

    #################################################################################################

    def sleep_durations
        schedules = Schedule.where(user_id: session[:user_id])
        durations = []
        schedules.each do |schedule|
            if schedule.bedtimes.length > 0 && schedule.wakeup
                earliest_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
                if earliest_bedtime[:time] < schedule.wakeup[:time]
                    diff = schedule.wakeup[:time].to_i - schedule.bedtimes[0][:time].to_i
                    durations << diff
                else
                    date = schedule.wakeup[:time].to_date.prev_day
                    new_schedule = Schedule.find_by(date: date)
                    if new_schedule && new_schedule.bedtimes.length > 0
                        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                        diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                        durations << diff
                    end
                end
            elsif schedule.wakeup
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.bedtimes.length > 0
                    last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                    diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                    durations << diff
                end
            end
        end
        if durations.length != 0
            avg_seconds = durations.sum / durations.size
            avg_minutes = avg_seconds / 60
            hours = avg_minutes / 60.floor
            mins = avg_minutes % 60
            avg_duration = {hours: hours, mins: mins}
            render json: avg_duration
        else
            render json: { error: "Insufficient data" }
        end
    end

    #################################################################################################

    def optimal_sleep_duration
        schedules = Schedule.where(user_id: session[:user_id])
        durations_with_schedule = []
        schedules.each do |schedule|
            if schedule.bedtimes.length > 0 && schedule.wakeup
                earliest_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
                if earliest_bedtime[:time] < schedule.wakeup[:time]
                    diff = schedule.wakeup[:time].to_i - schedule.bedtimes[0][:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
                else
                    date = schedule.wakeup[:time].to_date.prev_day
                    new_schedule = Schedule.find_by(date: date)
                    if new_schedule && new_schedule.bedtimes.length > 0
                        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                        diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                        durations_with_schedule << {duration: diff, schedule: schedule}
                    end
                end
            elsif schedule.wakeup
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.bedtimes.length > 0
                    last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                    diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
                end
            end
        end
        schedules_with_activities = durations_with_schedule.select{|obj| obj[:schedule].activities.length != 0}
        if schedules_with_activities.length != 0
            obj_with_best_effort = schedules_with_activities.max_by do |o|
                schedule = Schedule.find_by(date: o[:schedule].date)
                best_effort = schedule.activities.max_by{|a| a[:perceived_effort]}
                best_effort[:perceived_effort]
            end
            best_sleep_duration = obj_with_best_effort[:duration]
            minutes = best_sleep_duration / 60
            hours = minutes / 60.floor
            added_mins = minutes % 60
            optimal_duration = {hours: hours, added_mins: added_mins}
            render json: optimal_duration
        else
            render json: { error: "Insufficient data" }
        end
    end

    #################################################################################################

    def chart_two_data
        schedules = Schedule.where(user_id: session[:user_id])
        durations_with_schedule = []
        schedules.each do |schedule|
            if schedule.bedtimes.length > 0 && schedule.wakeup
                earliest_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
                if earliest_bedtime[:time] < schedule.wakeup[:time]
                    diff = schedule.wakeup[:time].to_i - schedule.bedtimes[0][:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
                else
                    date = schedule.wakeup[:time].to_date.prev_day
                    new_schedule = Schedule.find_by(date: date)
                    if new_schedule && new_schedule.bedtimes.length > 0
                        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                        diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                        durations_with_schedule << {duration: diff, schedule: schedule}
                    end
                end
            elsif schedule.wakeup
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date)
                if new_schedule && new_schedule.bedtimes.length > 0
                    last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                    diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
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
                formatted_chart_data << {duration: final_duration, RPE: best_perceived_effort[:perceived_effort]}
            end
            final_data = []
            durations = []
            formatted_chart_data.each do |obj|
                duplicates = formatted_chart_data.select{|o| o[:duration] == obj[:duration]}
                if !durations.include?(obj[:duration])
                    rpes = duplicates.map{|d| d[:RPE].to_f}
                    total_rpe = rpes.reduce(0){|sum, r| sum + r}
                    avg_rpe = total_rpe / rpes.size
                    final_data << {duration: obj[:duration], RPE: avg_rpe}
                    durations << obj[:duration]
                end
            end
            render json: final_data
        else
            render json: { error: "Insufficient data" }
        end
    end

end