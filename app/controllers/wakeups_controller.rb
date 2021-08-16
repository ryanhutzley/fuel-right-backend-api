class WakeupsController < ApplicationController

    def create
        t = Time.now
        t_str = t.to_s
        date = t_str.split(' ')[0]
        user = User.find_by(id: session[:user_id])
        schedule = Schedule.find_by(user_id: user.id, date: date)
        byebug
        if schedule
            schedule.create_wakeup!(wakeup_params)
            render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        else
            s = Schedule.create(user_id: user.id, date: date)
            s.wakeup.create_wakeup!(wakeup_params)
            render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        end
    end

    private

    def wakeup_params
        params.require(:wakeup).permit(:schedule_id, :time)
    end

end
