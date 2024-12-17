class AddCountyFipsToDisbursements < ActiveRecord::Migration[8.0]
  def change
    add_column :disbursements, :county_fips, :string
  end
end
