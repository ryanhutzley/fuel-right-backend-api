class CreateWakeups < ActiveRecord::Migration[6.1]
  def change
    create_table :wakeups do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.time :time

      t.timestamps
    end
  end
end
