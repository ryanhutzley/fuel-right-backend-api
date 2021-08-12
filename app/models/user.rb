class User < ApplicationRecord
    has_secure_password
    has_many :schedules, dependent: :destroy
end
