class FoodsController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        date = Date.parse(params[:_json][0][:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: user.id, date: date)
        food_params[:_json].each do |obj|
            time = Time.parse(obj[:time], date)
            schedule.foods.create(name: obj[:name], portion: obj[:portion], time: time)
        end
        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtime])
    end

    def favorite_food
        user = User.find_by(id: session[:user_id])
        schedules = Schedule.where(user_id: user.id)
        foods = []
        schedules.each do |s|
            foods.concat(s.foods)
        end
        food_names = foods.map{|f| f.name}
        fav_food = foods.max_by do |f|
            matches = food_names.select{|name| f.name == name}
            matches.count
        end
        # byebug
        render json: fav_food
    end

    private

    def food_params
        params.permit("_json": [:name, :portion, :time])
    end

end
