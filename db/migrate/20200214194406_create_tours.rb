class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.float :distance

      t.timestamps
    end
  end
end
