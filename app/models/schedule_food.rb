class ScheduleFood < ApplicationRecord
  belongs_to :schedule
  belongs_to :food
end
