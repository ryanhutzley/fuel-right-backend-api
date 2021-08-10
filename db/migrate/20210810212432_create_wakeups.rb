class CreateWakeups < ActiveRecord::Migration[6.1]
  def change
    create_table :wakeups do |t|
      t.has_one :schedule
      t.datetime :time

      t.timestamps
    end
  end
end
