class CreateScheduleFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :schedule_foods do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.belongs_to :food, null: false, foreign_key: true

      t.timestamps
    end
  end
end
