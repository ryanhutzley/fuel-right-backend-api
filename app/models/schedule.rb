class Schedule < ApplicationRecord
  belongs_to :user
  has_one :wakeup, dependent: :destroy
  has_many :bedtimes, dependent: :destroy
  has_many :activities, dependent: :destroy
  has_many :foods, dependent: :destroy
  validates :date, uniqueness: { scope: :user_id, message: "User can only have one schedule per day" }
end
