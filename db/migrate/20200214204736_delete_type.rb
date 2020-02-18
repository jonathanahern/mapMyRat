class DeleteType < ActiveRecord::Migration[5.2]
  def change
    remove_column :rodents, :type
  end
end
