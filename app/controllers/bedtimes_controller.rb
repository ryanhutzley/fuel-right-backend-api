class BedtimesController < ApplicationController

    def create
        date = Date.parse(params[:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        time = Time.parse(params[:time], date)
        schedule.bedtimes.create!(time: time)
        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    private

    def bedtime_params
        params.require(:bedtime).permit(:schedule_id, :time)
    end

end
