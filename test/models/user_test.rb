# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  img_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  birthday        :date             not null
#  gender          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  country         :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
