class Food < ApplicationRecord
    has_many :schedule_foods
    has_many :schedules, through: :schedule_foods
end
