class CreateScheduleActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :schedule_activities do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.belongs_to :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
