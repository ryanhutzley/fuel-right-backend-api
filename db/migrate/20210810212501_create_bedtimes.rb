class CreateBedtimes < ActiveRecord::Migration[6.1]
  def change
    create_table :bedtimes do |t|
      t.has_one :schedule
      t.datetime :time

      t.timestamps
    end
  end
end
