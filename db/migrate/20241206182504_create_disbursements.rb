class CreateDisbursements < ActiveRecord::Migration[8.0]
  def change
    create_table :disbursements do |t|
      t.integer :committee_id
      t.string :committee_name
      t.integer :report_year
      t.string :entity_type
      t.string :entity_type_desc
      t.string :recipient_name
      t.string :beneficiary_committee_name
      t.string :memo_code
      t.string :memo_code_full
      t.string :disbursement_type
      t.string :disbursement_type_name
      t.datetime :disbursement_date
      t.decimal :disbursement_amount
      t.string :fec_election_type
      t.string :payee_last_name
      t.string :payee_first_name
      t.string :recipient_city
      t.integer :recipient_zip
      t.string :disbursement_purpose_category
      t.string :pdf_url
      t.string :line_number_label
      t.string :report_type

      t.timestamps
    end
  end
end
