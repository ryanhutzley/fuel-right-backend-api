class WakeupsController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        date = Date.parse(params[:date])
        byebug
        schedule = Schedule.find_or_create_by(user_id: user.id, date: date)
        time = Time.parse(params[:time], date)
        schedule.create_wakeup!(time: time)
        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    private

    def wakeup_params
        params.require(:wakeup).permit(:schedule_id, :time)
    end

end
