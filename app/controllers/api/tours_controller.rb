class Api::ToursController < ApplicationController

  # def index
  #   @tours = Rodent.all
  #   render :index
  # end

  def create
    @tour = Tour.new(tour_params)
    @tour.user_id = current_user.id
    if @tour.save
      render :show
    else
      render json: @tour.errors.full_messages, status: 401
    end
  end


  private

  def tour_params
    params.require(:tour).permit(:name,:description)
  end

end