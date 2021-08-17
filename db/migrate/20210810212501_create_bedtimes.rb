class CreateBedtimes < ActiveRecord::Migration[6.1]
  def change
    create_table :bedtimes do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.datetime :time
      t.string :bedtime, default: "bedtime"

      t.timestamps
    end
  end
end
