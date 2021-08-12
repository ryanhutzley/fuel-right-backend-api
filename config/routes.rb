Rails.application.routes.draw do
  resources :bedtimes
  resources :wakeups
  resources :schedules
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
