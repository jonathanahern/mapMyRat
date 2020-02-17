class EditRodents < ActiveRecord::Migration[5.2]
  def change
    remove_column :rodents, :route_id
  end
end
