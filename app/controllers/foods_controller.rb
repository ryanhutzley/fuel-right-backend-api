class FoodsController < ApplicationController

    def create
        date = Date.parse(params[:_json][0][:date])
        # byebug
        schedule = Schedule.find_or_create_by(user_id: session[:user_id], date: date)
        food_params[:_json].each do |obj|
            time = Time.parse(obj[:time], date)
            food = schedule.foods.create(name: obj[:name].titleize, portion: obj[:portion], time: time)
            if !food.valid?
                return render json: { errors: food.errors.full_messages }, status: :unprocessable_entity
            end
        end
        render json: schedule.to_json(include: [:wakeup, :activities, :foods, :bedtimes])
    end

    def favorite_food
        schedules = Schedule.where(user_id: session[:user_id])
        fav_food = Food.most_popular_food(schedules)
        render json: fav_food
    end

    def performance_food
        schedules = Schedule.where(user_id: session[:user_id])
        preactivity_foods = Food.preactivity_foods(schedules)       
        if preactivity_foods.length != 0
            best_food = Food.best_food(preactivity_foods)
            render json: best_food
        else
            render json: { error: "Insufficient data" }
        end
    end

    def chart_one_data
        schedules = Schedule.where(user_id: session[:user_id])
        preactivity_foods = Food.preactivity_foods(schedules)       
        if preactivity_foods.length != 0
            chart_data = Food.chart_data(preactivity_foods)
            render json: chart_data
        else
            render json: { error: "Insufficient data" }
        end
    end

    private

    def food_params
        params.permit("_json": [:name, :portion, :time])
    end

end