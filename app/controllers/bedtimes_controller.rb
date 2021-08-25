class BedtimesController < ApplicationController

    def create
        date = Date.parse(params[:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        yesterday_schedule = Schedule.find_by(date: date.prev_day, user_id: session[:user_id])
        time = Time.parse(params[:time], date)
        if schedule.bedtimes.length == 0 && schedule.wakeup
            if time > schedule.wakeup[:time]
                schedule.bedtimes.create!(time: time)
                render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
            else
                if yesterday_schedule && yesterday_schedule.bedtimes.size > 0 && yesterday_schedule.wakeup
                    last_bedtime = yesterday_schedule.bedtimes.max_by{|b| b[:time]}
                    if last_bedtime[:time] > yesterday_schedule.wakeup[:time]
                        render json: { errors: ["Invalid selection, must separate bedtimes with wakeup action"] }, status: :unprocessable_entity
                    else
                        schedule.bedtimes.create!(time: time)
                        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                    end
                else
                    schedule.bedtimes.create!(time: time)
                    render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                end
            end
        elsif schedule.bedtimes.length == 0 && !schedule.wakeup
            if yesterday_schedule && yesterday_schedule.bedtimes.size > 0 && yesterday_schedule.wakeup
                last_bedtime = yesterday_schedule.bedtimes.max_by{|b| b[:time]}
                if last_bedtime[:time] > yesterday_schedule.wakeup[:time]
                    render json: { errors: ["Invalid selection, must separate bedtimes with wakeup action"] }, status: :unprocessable_entity
                else
                    schedule.bedtimes.create!(time: time)
                    render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                end
            else
                schedule.bedtimes.create!(time: time)
                render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
            end
        elsif schedule.bedtimes.size == 1
            first_bedtime = schedule.bedtimes.min_by{|b| b[:time]}
            wakeup = Wakeup.where(["time > ? and time < ? and schedule_id = ?", first_bedtime[:time], time, schedule.id])
            wakeup_2 = Wakeup.where(["time > ? and time < ? and schedule_id = ?", time, first_bedtime[:time], schedule.id])
            if wakeup.exists?
                schedule.bedtimes.create!(time: time)
                render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
            elsif wakeup_2.exists?
                if yesterday_schedule && yesterday_schedule.bedtimes.size > 0 && yesterday_schedule.wakeup
                    last_bedtime = yesterday_schedule.bedtimes.max_by{|b| b[:time]}
                    if last_bedtime[:time] > yesterday_schedule.wakeup[:time]
                        render json: { errors: ["Invalid selection, must separate bedtimes with wakeup action"] }, status: :unprocessable_entity
                    else
                        schedule.bedtimes.create!(time: time)
                        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                    end
                else
                    schedule.bedtimes.create!(time: time)
                    render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
                end
            else
                render json: { errors: ["Invalid selection, must separate bedtimes with wakeup action"] }, status: :unprocessable_entity
            end
        elsif schedule.bedtimes.size == 2
            render json: { errors: ["Invalid selection, too many bedtimes"] }, status: :unprocessable_entity
        end
    end

    private

    def bedtime_params
        params.require(:bedtime).permit(:schedule_id, :time)
    end

end
