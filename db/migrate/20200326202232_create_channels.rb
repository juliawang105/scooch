class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.integer :admin_id, null: false 

      t.timestamps
    end
    add_index :channels, [:title, :admin_id], unique: true 
  end
end
