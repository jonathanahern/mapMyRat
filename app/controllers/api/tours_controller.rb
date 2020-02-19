class Api::ToursController < ApplicationController

  # def index
  #   @tours = Rodent.all
  #   render :index
  # end

  def create
    rodents = create_rodents
    @tour = Tour.new(tour_params)
    @tour.user_id = current_user.id
    if @tour.save
      save_the_rodents(rodents, @tour.id)
      render :show
    else
      render json: @tour.errors.full_messages, status: 401
    end
  end


  private

  def tour_params
    params.require(:tour).permit(:name,:description)
  end

  def create_rodents
    arr = []
    rodentObj = params[:tour][:rodents]
    rodentObj.each do |k,v|
      arr << v.values
    end
    return arr
  end

  def save_the_rodents(rodents, tour_id)
    
    rodents.each_with_index do |subarr, i|
      @rodent = Rodent.new
      @rodent.lat = subarr[0].to_f
      @rodent.lng = subarr[1].to_f
      @rodent.species = subarr[2]
      @rodent.tour_id = tour_id
      @rodent.ord = i
      @rodent.save
    end
  end

end