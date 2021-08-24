Rails.application.routes.draw do
  resources :activities, only: [:create]
  resources :foods, only: [:create]
  resources :bedtimes, only: [:create]
  resources :wakeups, only: [:create]
  resources :schedules, only: [:index, :show, :destroy]
  resources :users, except: [:create, :index]

  # get "/schedule_today", to: "schedules#today"
  get "/sleep_durations", to: "schedules#sleep_durations"
  get "/favorite_food", to: "foods#favorite_food"
  get "/performance_food", to: "foods#performance_food"
  get "/optimal_sleep_duration", to: "schedules#optimal_sleep_duration"
  get "/chart_one_data", to: "foods#chart_one_data"
  get "/chart_two_data", to: "schedules#chart_two_data"

  post "/signup", to: "users#create"
  get "/me", to: "users#show" 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
