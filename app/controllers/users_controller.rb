class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    def update
        @current_user.update(user_params)
        if @current_user.valid?
            render json: @current_user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @current_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :weight)
    end

end
