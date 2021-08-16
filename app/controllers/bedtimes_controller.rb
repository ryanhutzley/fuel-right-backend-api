class BedtimesController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        schedule = Schedule.find_by(user_id: user.id, date: params[:date])
        byebug
        if schedule
            schedule.create_bedtime!(bedtime_params)
            render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        else
            s = Schedule.create(user_id: user.id, date: date)
            s.create_bedtime!(bedtime_params)
            render json: s.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        end
    end

    private

    def bedtime_params
        params.require(:bedtime).permit(:schedule_id, :time)
    end

end
