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
        if foods.length != 0
            food_names = foods.map{|f| f.name}
            fav_food = foods.max_by do |f|
                matches = food_names.select{|name| f.name == name}
                matches.count
            end
            # byebug
            render json: fav_food
        else
            render json: { error: "Insufficient data" }
        end
    end

    def performance_food
        user = User.find_by(id: session[:user_id])
        schedules = Schedule.where(user_id: user.id)
        preactivity_foods = []
        schedules.each do |schedule|
            if schedule.foods && schedule.activities
                schedule.activities.each do |activity|
                    time = activity[:time]
                    foods = schedule.foods.where("time < ?", time)
                    foods.each do |f|
                        if !preactivity_foods.include?(f)
                            preactivity_foods << f
                        end
                    end
                end
            end
        end
        if preactivity_foods.length != 0
            best_food = preactivity_foods.max_by do |food|
                schedule = Schedule.find_by(id: food[:schedule_id])
                best_perceived_effort = schedule.activities.max_by do |activity|
                    activity[:perceived_effort]
                end
                best_perceived_effort
            end
            render json: best_food
        else
            render json: { error: "Insufficient data" }
        end
    end

    def chart_one_data
        user = User.find_by(id: session[:user_id])
        schedules = Schedule.where(user_id: user.id)
        preactivity_foods = []
        schedules.each do |schedule|
            if schedule.foods && schedule.activities
                schedule.activities.each do |activity|
                    time = activity[:time]
                    foods = schedule.foods.where("time < ?", time)
                    foods.each do |f|
                        if !preactivity_foods.include?(f)
                            preactivity_foods << f
                        end
                    end
                end
            end
        end
        if preactivity_foods.length != 0
            formatted_chart_data = []
            preactivity_foods.each do |food|
                schedule = Schedule.find_by(id: food[:schedule_id])
                best_perceived_effort = schedule.activities.max_by do |activity|
                    activity[:perceived_effort]
                end
                formatted_chart_data << {name: food.name, RPE: best_perceived_effort[:perceived_effort]}
            end
            render json: formatted_chart_data
        else
            render json: { error: "Insufficient data" }
        end
    end

    private

    def food_params
        params.permit("_json": [:name, :portion, :time])
    end

end
