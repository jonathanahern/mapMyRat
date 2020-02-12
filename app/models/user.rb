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

  after_initialize :ensure_session_token, :generate_birthday

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def generate_birthday
    self.birthday = Date.new(year.to_i, month.to_i, day.to_i) unless day.nil?
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
