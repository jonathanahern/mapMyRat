class AddOrder < ActiveRecord::Migration[5.2]
  def change
    add_column(:rodents, :ord, :integer)
  end
end
