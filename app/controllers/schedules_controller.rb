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
        sleep_duration = "No bedtime found"
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
                new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
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
            new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
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
                    diff = schedule.wakeup[:time].to_i - earliest_bedtime[:time].to_i
                    durations << diff
                else
                    date = schedule.wakeup[:time].to_date.prev_day
                    new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
                    if new_schedule && new_schedule.bedtimes.length > 0
                        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                        diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                        durations << diff
                    end
                end
            elsif schedule.wakeup
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
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
                    diff = schedule.wakeup[:time].to_i - earliest_bedtime[:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
                else
                    date = schedule.wakeup[:time].to_date.prev_day
                    new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
                    if new_schedule && new_schedule.bedtimes.length > 0
                        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                        diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                        durations_with_schedule << {duration: diff, schedule: schedule}
                    end
                end
            elsif schedule.wakeup
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
                if new_schedule && new_schedule.bedtimes.length > 0
                    last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                    diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
                end
            end
        end
        schedules_with_activities = durations_with_schedule.select{|obj| obj[:schedule].activities.length != 0}
        if schedules_with_activities.length != 0
            data_with_rpe = []
            durations = []
            schedules_with_activities.each do |obj|
                duplicates = schedules_with_activities.select{|o| o[:duration] == obj[:duration]}
                if !durations.include?(obj[:duration])
                    avg_rpes = []
                    duplicates.each do |d|
                        schedule_1 = Schedule.find_by(date: d[:schedule].date, user_id: session[:user_id])
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
                    diff = schedule.wakeup[:time].to_i - earliest_bedtime[:time].to_i
                    durations_with_schedule << {duration: diff, schedule: schedule}
                else
                    date = schedule.wakeup[:time].to_date.prev_day
                    new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
                    if new_schedule && new_schedule.bedtimes.length > 0
                        last_bedtime = new_schedule.bedtimes.max_by{|b| b[:time]}
                        diff = schedule.wakeup[:time].to_i - last_bedtime[:time].to_i
                        durations_with_schedule << {duration: diff, schedule: schedule}
                    end
                end
            elsif schedule.wakeup
                date = schedule.wakeup[:time].to_date.prev_day
                new_schedule = Schedule.find_by(date: date, user_id: session[:user_id])
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
                # best_perceived_effort = obj[:schedule].activities.max_by do |activity|
                #     activity[:perceived_effort]
                # end
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
            render json: final_data
        else
            render json: { error: "Insufficient data" }
        end
    end

end