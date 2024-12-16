class AddTransactionIdToDisbursements < ActiveRecord::Migration[8.0]
  def change
    add_column :disbursements, :transaction_id, :string
  end
end
