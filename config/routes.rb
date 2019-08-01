Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :samples, only: [:index, :create, :update, :destroy] do
    collection do
      get "/all", to: "samples#all"
    end
  end
end
