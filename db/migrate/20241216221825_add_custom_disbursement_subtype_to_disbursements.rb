class AddCustomDisbursementSubtypeToDisbursements < ActiveRecord::Migration[8.0]
  def change
    add_column :disbursements, :custom_disbursement_subtype, :string
  end
end
