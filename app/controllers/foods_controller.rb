class FoodsController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        schedule = Schedule.find_by(user_id: user.id, date: params[:_json][0][:date])
        if schedule
            food_params[:_json].each do |obj|
                schedule.foods.create(name: obj[:name], portion: obj[:portion], time: obj[:time])
            end
            render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        else
            s = Schedule.create(user_id: user.id, date: date)
            food_params[:_json].each do |obj|
                s.foods.create(name: obj[:name], portion: obj[:portion], time: obj[:time])
            end
            render json: s.to_json(include: [:wakeup, :activities, :foods, :bedtime])
        end
    end

    private

    def food_params
        params.permit("_json": [:name, :portion, :time])
    end

end
