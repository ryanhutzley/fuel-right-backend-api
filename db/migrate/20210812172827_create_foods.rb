class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.string :name
      t.integer :portion
      t.datetime :time

      t.timestamps
    end
  end
end
