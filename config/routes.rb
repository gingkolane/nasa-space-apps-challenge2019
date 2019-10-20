Rails.application.routes.draw do
  resources :drifters
  resources :events_users
  resources :pickups
  resources :events
  resources :users
  resources :sites
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
