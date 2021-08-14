class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.time :date
      t.boolean :is_starred

      t.timestamps
    end
  end
end
