class Food < ApplicationRecord
  belongs_to :schedule
  validates :portion, numericality: true
end
