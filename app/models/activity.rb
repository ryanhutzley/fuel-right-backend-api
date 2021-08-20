class Activity < ApplicationRecord
  belongs_to :schedule
  validates :duration, numericality: true
  validates :perceived_effort, numericality: true
end
