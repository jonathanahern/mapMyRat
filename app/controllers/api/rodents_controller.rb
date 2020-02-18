class Api::RodentsController < ApplicationController

  def index
    @rodents = Rodent.all
    render :index
  end

  def create
    @rodent = Rodent.create!(bench_params)
    render :show
  end


  private

  def rodent_params
    params.require(:rodent).permit(:lat,:lng,:tour_id)
  end

end