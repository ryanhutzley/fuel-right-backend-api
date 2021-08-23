class BedtimesController < ApplicationController

    def create
        date = Date.parse(params[:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        time = Time.parse(params[:time], date)
        if schedule.bedtimes.size > 0
            first_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
            wakeup = Wakeup.where(["time > ? and time < ? and schedule_id = ?", first_bedtime[:time], time, schedule.id])
            if wakeup.exists?
                schedule.bedtimes.create!(time: time)
                render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
            else
                render json: { errors: ["Invalid selection, must separate bedtimes with wakeup action"] }, status: :unprocessable_entity
            end
        elsif schedule.bedtimes.size > 1
            render json: { errors: ["Invalid selection, too many bedtimes"] }, status: :unprocessable_entity
        else
            schedule.bedtimes.create!(time: time)
            render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
        end
    end

    private

    def bedtime_params
        params.require(:bedtime).permit(:schedule_id, :time)
    end

end
