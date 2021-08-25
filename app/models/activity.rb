class Activity < ApplicationRecord
  belongs_to :schedule
  validates :duration, numericality: true
  validates :perceived_effort, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
end
