class Schedule < ApplicationRecord
  belongs_to :user
  has_one :wakeup
  has_one :bedtime
  has_many :schedule_foods
  has_many :foods, through: :schedule_foods
  has_many :schedule_activities
  has_many :activities, through: :schedule_activities
end
