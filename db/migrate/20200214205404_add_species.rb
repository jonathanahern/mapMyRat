class AddSpecies < ActiveRecord::Migration[5.2]
  def change
    add_column(:rodents, :species, :string, {:null=>false})
  end
end
