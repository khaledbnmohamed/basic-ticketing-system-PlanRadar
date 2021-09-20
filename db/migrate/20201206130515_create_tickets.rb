# frozen_string_literal: true

class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.references :creator, null: false, foreign_key: { to_table: :users }
      t.references :assignee, null: true, foreign_key: { to_table: :users }
      t.references :parent, foreign_key: { to_table: :tickets }

      t.string :title
      t.string :description
      t.string :status
      t.date :due_date

      t.timestamps
    end
  end
end
