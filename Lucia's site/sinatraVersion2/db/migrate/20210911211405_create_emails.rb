class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.string :fname
      t.string :name
      t.string :email
    end
  end
end
