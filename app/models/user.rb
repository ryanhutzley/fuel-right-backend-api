class User < ApplicationRecord
    has_secure_password
    has_many :schedules, dependent: :destroy
    validates :email, uniqueness: true
    validates :weight, numericality: true
    # validates :email, format: { with: /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/, message: "email is invalid" }
end
