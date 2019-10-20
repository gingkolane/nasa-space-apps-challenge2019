class CreateDrifters < ActiveRecord::Migration[5.2]
  def change
    create_table :drifters do |t|

      t.timestamps
    end
  end
end
