class Schedule < ApplicationRecord
  belongs_to :user
  has_one :wakeup, dependent: :destroy
  has_many :bedtimes, dependent: :destroy
  has_many :activities, dependent: :destroy
  has_many :foods, dependent: :destroy
end
