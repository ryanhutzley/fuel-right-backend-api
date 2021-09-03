class SchedulesController < ApplicationController

    def index
        # byebug
        schedules = Schedule.where(user_id: session[:user_id])
        sorted_schedules = schedules.sort{|a,b| a.date <=> b.date}
        render json: sorted_schedules.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
    end

    #################################################################################################
    
    def destroy
        schedule = Schedule.find_by(id: params[:id])
        schedule.destroy
    end
    
    #################################################################################################

    def show
        schedule = Schedule.find_by(id: params[:id])
        display_schedule = schedule.format_schedule
        render json: display_schedule
    end

    #################################################################################################

    def sleep_durations
        schedules = Schedule.where(user_id: session[:user_id])
        user = User.find_by(id: session[:user_id])
        durations = Schedule.durations(schedules, user.id)
        if durations.length != 0
            avg_seconds = durations.sum / durations.size
            avg_minutes = avg_seconds / 60
            hours = avg_minutes / 60.floor
            mins = avg_minutes % 60
            avg_duration = {hours: hours, mins: mins}
            render json: avg_duration
        else
            render json: { error: "Insufficient data" }
        end
    end

    #################################################################################################

    def optimal_sleep_duration
        optimal_sleep_time = true
        schedules = Schedule.where(user_id: session[:user_id])
        user = User.find_by(id: session[:user_id])
        schedules_with_activities = Schedule.durations(schedules, user.id, optimal_sleep_time)
        if schedules_with_activities.length != 0
            optimal_duration = Schedule.best_sleep(schedules_with_activities, user.id)
            render json: optimal_duration
        else
            render json: { error: "Insufficient data" }
        end
    end

    #################################################################################################

    def chart_two_data
        chart_two = true
        schedules = Schedule.where(user_id: session[:user_id])
        user = User.find_by(id: session[:user_id])
        schedules_with_activities = Schedule.durations(schedules, user.id, chart_two)
        if schedules_with_activities.length != 0
            final_data = Schedule.chart_data(schedules_with_activities)
            render json: final_data
        else
            render json: { error: "Insufficient data" }
        end
    end

end