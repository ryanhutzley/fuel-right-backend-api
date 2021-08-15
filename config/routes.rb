Rails.application.routes.draw do
  resources :activities, only: [:create]
  resources :foods, only: [:create]
  resources :bedtimes, only: [:create]
  resources :wakeups, only: [:create]
  resources :schedules, only: [:index, :show]
  resources :users, except: [:create, :show]

  post "/signup", to: "users#create"
  get "/me", to: "users#show" 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
