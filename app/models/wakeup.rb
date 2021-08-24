class Wakeup < ApplicationRecord
    belongs_to :schedule
    # validates :schedule_id, uniqueness: true
end
