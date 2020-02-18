class CreateRodents < ActiveRecord::Migration[5.2]
  def change
    create_table :rodents do |t|
      t.integer :route_id, null:false, index: true
      t.string :type, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
