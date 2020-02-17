# == Schema Information
#
# Table name: tours
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  distance   :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tour < ApplicationRecord

    validates :user_id, :name, presence: true

    has_many :rodents,
        class_name: :Rodent,
        primary_key: :id,
        foreign_key: :tour_id

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id
    
end
