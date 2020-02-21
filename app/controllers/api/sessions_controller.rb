class Api::SessionsController < ApplicationController

  # before_action :ensure_logged_in

  def create
    @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
    if @user 
      login(@user)
      render :show
    else
      
      render json: ['Incorrect username or password. Please try again.'], status: 401
    end

  end

  def destroy
    unless logged_in? 
      render json: ['Nobody is logged in!'], status: 404
    else
      logout
      render json: {}
    end
  end

end
