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

class User < ApplicationRecord

  attr_reader :password
  attr_accessor :day, :month, :year

  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token, :generate_birthday, :generate_profile_pic

  has_many :tours,
    class_name: :Tour,
    primary_key: :id,
    foreign_key: :user_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def generate_birthday
    self.birthday = Date.new(year.to_i, month.to_i, day.to_i) unless day.nil?
  end

  def generate_profile_pic
    # generic = "https://lh3.googleusercontent.com/proxy/jdZ3k23GwKs1-ngvbf-lWWGa06fj1DwdCPs8cf4H5IitV90KesCpRzN9XlNvQ_uVCrvG3rmNLgbMx9489tLHOAO1zkyYEf_xsOmjzWEtyc3S67WxEOHrecTzhRY7ATg7VuRdhi8QCEOoYQAfcQKk9bHtZadM1wQWQsv5r8qlYAkEzewkq01zFp75IPEMqVAJU4M7"
    # self.img_url = window.userIconURL unless self.img_url
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
