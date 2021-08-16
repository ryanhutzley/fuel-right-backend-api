class SchedulesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        # byebug
        schedules = Schedule.where(user_id: user.id)
        render json: schedules.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    def today
        t = Time.now
        t_str = t.to_s
        date = t_str.split(' ')[0]
        user = User.find_by(id: session[:user_id])
        schedule = Schedule.find_by(user_id: user.id, date: date)
        byebug
    end

end
