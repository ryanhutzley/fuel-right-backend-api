class SchedulesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        Schedule.where(user_id: user.id)
    end

end
