class WakeupsController < ApplicationController

    def create
        date = Date.parse(params[:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        yesterday_schedule = Schedule.find_by(date: date.prev_day)
        time = Time.parse(params[:time], date)
        if schedule.wakeup
            render json: { errors: ["Wakeup already recorded"] }, status: :unprocessable_entity
        else
            if schedule.bedtimes.length > 0
                earliest_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
                if earliest_bedtime[:time] < time
                    schedule.create_wakeup!(time: time)
                    render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                else
                    render json: { errors: ["Invalid selection, wakeup must have preceding bedtime"] }, status: :unprocessable_entity
                end
            else
                if yesterday_schedule && yesterday_schedule.bedtimes.size > 0 && yesterday_schedule.wakeup
                    last_bedtime = yesterday_schedule.bedtimes.max_by{|b| b[:time]}
                    if last_bedtime[:time] > yesterday_schedule.wakeup[:time]
                        schedule.create_wakeup!(time: time)
                        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                    else
                        render json: { errors: ["Invalid selection, wakeup must have preceding bedtime"] }, status: :unprocessable_entity
                    end
                else
                    schedule.create_wakeup!(time: time)
                    render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                end
            end
        end
    end

    private

    def wakeup_params
        params.require(:wakeup).permit(:schedule_id, :time)
    end

end
