class EditRodentsTwo < ActiveRecord::Migration[5.2]
  def change
    add_column(:rodents, :tour_id, :integer, {:null=>false})
  end
end
