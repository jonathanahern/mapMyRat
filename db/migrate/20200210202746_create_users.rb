class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :img_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :birthday, null: false
      t.string :gender

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :password_digest
    add_index :users, :session_token, unique: true
  end
end
