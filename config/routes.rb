Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:index, :create]
      resource :session, only: [:create, :destroy]
      resources :rodents, only: [:index, :create]
      resources :tours, only: [:index, :create]
    end

  root to: 'static_pages#root'
  
end
