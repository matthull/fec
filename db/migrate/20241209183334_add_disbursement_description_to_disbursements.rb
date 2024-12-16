class AddDisbursementDescriptionToDisbursements < ActiveRecord::Migration[8.0]
  def change
    add_column :disbursements, :disbursement_description, :string
  end
end
