class Activity < ApplicationRecord
    has_many :schedule_activities
    has_many :schedules, through: :schedule_activities
end
