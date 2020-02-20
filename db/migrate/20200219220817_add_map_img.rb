class AddMapImg < ActiveRecord::Migration[5.2]
  def change
    add_column(:tours, :map_img_url, :string)
  end
end
