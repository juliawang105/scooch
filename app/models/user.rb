class User < ApplicationRecord
  validates :f_name, :l_name, :email, :password_digest, :session_token, presence: true, uniqueness: true 
  validates :password, length:{minimum: 6}, allow_nil: true 

  attr_reader :password 
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, pw)
    @user = User.find_by(email: email)
    @user && @user.is_password?(pw)? @user : nil 

  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
    @password = pw
    
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.update!(session_token:SecureRandom.urlsafe_base64(16) )
		self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
