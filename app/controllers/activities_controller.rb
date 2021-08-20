class ActivitiesController < ApplicationController

    def create
        date = Date.parse(params[:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        time = Time.parse(params[:time], date)
        activity = schedule.activities.create(time: time, name: activity_params[:name].titleize, perceived_effort: activity_params[:perceived_effort], duration: activity_params[:duration])
        if activity.valid?
            render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        else
            render json: { errors: activity.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def activity_params
        params.require(:activity).permit(:schedule_id, :name, :perceived_effort, :duration, :time)
    end

end
