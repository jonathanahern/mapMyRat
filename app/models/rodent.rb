# == Schema Information
#
# Table name: rodents
#
#  id         :bigint           not null, primary key
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tour_id    :integer          not null
#  species    :string           not null
#

class Rodent < ApplicationRecord

    validates :tour_id, :species, :lat, :lng, presence: true

    belongs_to :tour,
        class_name: :Tour,
        primary_key: :id,
        foreign_key: :tour_id

    # def self.in_bounds(bounds)
    #     self.where("lat < ?", bounds[:northEast][:lat])
    #     .where("lat > ?", bounds[:southWest][:lat])
    #     .where("lng > ?", bounds[:southWest][:lng])
    #     .where("lng < ?", bounds[:northEast][:lng])
    # end

end

