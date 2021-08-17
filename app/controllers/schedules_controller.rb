class SchedulesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        # byebug
        schedules = Schedule.where(user_id: user.id)
        sorted_schedules = schedules.sort{|a,b| a.date <=> b.date}
        render json: sorted_schedules.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    def show
        schedule = Schedule.find_by(id: params[:id])
        combo1 = Array(schedule.wakeup).concat(schedule.activities)
        # combo2 = combo1.concat(schedule.foods)
        actions_except_foods = Array(schedule.bedtime).concat(combo1)
        sorted_without_foods = actions_except_foods.sort{|a,b| a.time <=> b.time}
        food_array = Array(schedule.foods)
        # byebug
        food_times = food_array.map{|food| food.time}
        unique_times = food_times.uniq
        grouped_foods_array = []
        unique_times.each do |time|
            grouped_foods = food_array.select{|f| f.time == time}
            grouped_foods_array << {time: time, foods: grouped_foods}
        end
        # byebug
        all_actions = sorted_without_foods.concat(grouped_foods_array)
        sorted_actions = all_actions.sort{|a,b| a[:time] <=> b[:time]}
        frontend_array = []
        frontend_array << schedule
        frontend_array << sorted_actions
        # byebug
        render json: frontend_array
    end

end

# formatted_actions = sorted_actions.map do |action|
#     # {...action, time: action.time.strftime("%k:%M")}
#     format_time = action[:time].to_time.strftime("%k:%M")
#     action[:time] = format_time
#     action 
# end
# render json: formatted_actions