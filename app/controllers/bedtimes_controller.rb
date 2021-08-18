class BedtimesController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        date = Date.parse(params[:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: user.id, date: date)
        time = Time.parse(params[:time], date)
        schedule.create_bedtime!(time: time)
        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    private

    def bedtime_params
        params.require(:bedtime).permit(:schedule_id, :time)
    end

end

# def sleep_durations
#     user = User.find_by(id: session[:user_id])
#     schedules = Schedule.where(user_id: user.id)
#     bedtimes = []
#     wakeups = []
#     schedules.each do |schedule|
#         bedtimes.concat(Array(schedule.bedtime))
#         wakeups.concat(Array(schedule.wakeup))
#     end
#     bedtimes.each do |bedtime|
        
#     end
# end 
