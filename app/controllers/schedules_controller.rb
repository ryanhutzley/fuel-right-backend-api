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
        combo2 = combo1.concat(schedule.foods)
        all_actions = Array(schedule.bedtime).concat(combo2)
        sorted_actions = all_actions.sort{|a,b| a.time <=> b.time}
        formatted_actions = sorted_actions.map do |action|
            # {...action, time: action.time.strftime("%k:%M")}
            format_time = action.time.strftime("%k:%M")
            action.time = format_time
            action
            byebug 
        end
        render json: formatted_actions
    end

end
