require "csv"

class LoadDisbursements
  def self.run
    filename = "data/gloria_johnson_schedule_b_2024.csv"
    csv_text = File.read(filename)
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      attrs = row.to_h.select { |x| Disbursement.attribute_names.index(x) }
      Disbursement.create!(attrs)
    end

    Disbursement.set_custom_disbursement_types!
  end
end
