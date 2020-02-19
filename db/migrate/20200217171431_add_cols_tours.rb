class AddColsTours < ActiveRecord::Migration[5.2]
  def change
    add_column(:tours, :description, :string, {:null=>false})
  end
end
