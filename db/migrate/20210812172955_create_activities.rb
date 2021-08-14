class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.string :name
      t.integer :perceived_effort
      t.integer :duration
      t.time :time

      t.timestamps
    end
  end
end
