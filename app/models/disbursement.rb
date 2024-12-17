DISBURSEMENT_TYPE_MAPPINGS = {
 "Contribution Refunds" => "Refunds",
 "Digital Marketing" => "Marketing",
 "Direct Mail Marketing" => "Marketing",
 "Financial Fees" => "Expenses",
 "IT" => "Expenses",
 "Legal" => "Expenses",
 "Mail Expenses" => "Marketing",
 "Merch" => "Marketing",
 "Misc Expenses" => "Expenses",
 "Newspaper Advertising" => "Marketing",
 "Office Rent" => "Office Rent",
 "Overage Refunds" => "Refunds",
 "Polling" => "Research",
 "Refund" => "Refunds",
 "Subscriptions" => "Expenses",
 "TV Advertising" => "Marketing",
 "Texting Expenses" => "Marketing",
 "Travel Expenses" => "Expenses",
 "Video Production" => "Marketing"
}

DISBURSEMENT_SUBTYPE_MAPPINGS = {
 "ADVERTISING PRODUCTION" =>  "TV Advertising",
 "AIRFARE" =>  "Travel Expenses",
 "BANK FEE" =>  "Financial Fees",
 "BANK FEES" =>  "Financial Fees",
 "CAMPAIGN MERCHANDISE - APPAREL AND STICKERS" =>  "Merch",
 "CANVASSING" =>  "Canvassing",
 "CAR RENTAL" =>  "Travel Expenses",
 "CATERING" =>  "Events",
 "CATERING/EVENTS" =>  "Events",
 "CHECK STOCK" =>  "Misc Expenses",
 "COMMUNICATIONS CONSULTING" =>  "Communications Consulting",
 "COMPLIANCE CONSULTING" =>  "Compliance Consulting",
 "COMPLIANCE SERVICES" =>  "Legal",
 "CONSULTING" =>  "Consulting",
 "CONTRIBUTION" =>  "Contributions",
 "CONTRIBUTION REFUND" =>  "Contribution Refunds",
 "CREDIT CARD FEE" =>  "Financial Fees",
 "CREDIT CARD PAYMENT" =>  "Financial Fees",
 "CREDIT CARD PROCESSING FEES" =>  "Financial Fees",
 "DIGITAL ACQUISITON" =>  "Digital Marketing",
 "DIGITAL ACQUISITON AND CONSULTING" =>  "Digital Marketing Consulting",
 "DIGITAL ACQUISTION" =>  "Digital Marketing",
 "DIGITAL ACQUISTION AND CONSULTING" =>  "Digital Marketing Consulting",
 "DIGITAL AND RADIO ADVERTISING" =>  "Digital Marketing",
 "DIGITAL AQUISTION AND CONSULTING" =>  "Digital Marketing Consulting",
 "DIGITAL CONSULTING" =>  "Digital Marketing Consulting",
 "DIGITAL PRODUCTION" =>  "Digital Marketing",
 "DIRECT MAIL" =>  "Direct Mail Marketing",
 "DIRECT MAIL CONSULTING" =>  "Direct Mail Marketing Consulting",
 "DIRECT MAIL CONSULTING AND ACQUISTION" =>  "Direct Mail Marketing Consulting",
 "DIRECT MAIL POSTAGE" =>  "Direct Mail Marketing",
 "DIRECT MAIL PRODUCTION SERVICES" =>  "Direct Mail Marketing",
 "DONATION" =>  "Donations",
 "EMAIL SERVICES" =>  "IT",
 "EQUIPMENT RENTAL" =>  "TV Advertising",
 "EVENT SPACE" =>  "Events",
 "EVENT SPONSORSHIP" =>  "Events",
 "EVENT TICKET" =>  "Events",
 "FACILITY RENTAL" =>  "Events",
 "FACILITY RENTAL AND AV SERVICES" =>  "Events",
 "FIELD CONSULTING" =>  "Field Consulting",
 "FOOD AND BEVERAGE" =>  "Events",
 "FUNDRAISING CONSULTING" =>  "Fundraising Consulting",
 "FUNDRAISING CONSULTING AND EXPENSES" =>  "Fundraising Consulting",
 "FUNDRAISING SERVICES" =>  "Fundraising",
 "FUNDRAISING SOFTWARE" =>  "Fundraising",
 "GAS" =>  "Travel Expenses",
 "GENERAL CAMPAIGN CONSULTING" =>  "General Campaign Consulting",
 "GENERAL CAMPAIGN CONSULTING AND EXPENSES" =>  "General Campaign Consulting",
 "HEALTH INSURANCE" =>  "Payroll",
 "HEALTH INSURANCE PREMIUM" =>  "Payroll",
 "HEALTHCARE" =>  "Payroll",
 "INTERNET SERVICES" =>  "IT",
 "LEGAL FEES" =>  "Legal",
 "LEGAL SERVICES" =>  "Legal",
 "LIST ACQUISITION" =>  "Digital Marketing",
 "LODGING" =>  "Travel Expenses",
 "MAIL CAGING SERVICES" =>  "Mail Expenses",
 "MAIL SERVICES" =>  "Mail Expenses",
 "MEALS" =>  "Travel Expenses",
 "MERCHANDISE - T SHIRTS" =>  "Merch",
 "MILEAGE REIMBURSEMENT" =>  "Travel Expenses",
 "NEWSPAPER ADVERTISING" =>  "Newspaper Advertising",
 "NONFEDERAL CONTRIBUTION" =>  "Non-federal Contribution",
 "OFFICE RENT" =>  "Office Rent",
 "OFFICE SUPPLIES" =>  "Misc Expenses",
 "OVERAGE REFUND" =>  "Overage Refunds",
 "PAYROLL" =>  "Payroll",
 "PAYROLL - SEE MEMO ENTRIES" =>  "Payroll",
 "PAYROLL FEE" =>  "Payroll",
 "PAYROLL FEES" =>  "Payroll",
 "PAYROLL PROCESSING FEE" =>  "Payroll",
 "PAYROLL PROCESSING FEES" =>  "Payroll",
 "PAYROLL TAXES" =>  "Payroll",
 "POLITICAL STRATEGY CONSULTING AND EXPENSES" =>  "Strategy Consulting",
 "POLLING" =>  "Polling",
 "POLLING AND RESEARCH" =>  "Polling",
 "POSTAGE" =>  "Mail Expenses",
 "PRINTING" =>  "Mail Expenses",
 "REFUND" =>  "Refunds",
 "REIMBURSEMENT - EVENT SUPPLIES" =>  "Events",
 "REIMBURSEMENT - SEE MEMO ENTRY" =>  "Misc Expenses",
 "REIMBURSEMENT - SEE MEMO ENTRY IF ITEMIZED" =>  "Misc Expenses",
 "REIMBURSEMENT - TRAVEL EXPENSE" =>  "Travel Expenses",
 "REIMBURSEMENT - WEBSITE" =>  "IT",
 "REIMBURSEMENT: SEE BELOW" =>  "Misc Expenses",
 "RESEARCH" =>  "Research",
 "SALARY" =>  "Payroll",
 "SALES TAX" =>  "Financial Fees",
 "SECURITY SOFTWARE" =>  "IT",
 "SOFTWARE" =>  "IT",
 "STIPEND" =>  "Payroll",
 "STRATEGIC CONSULTING" =>  "Strategy Consulting",
 "SUBSCRIPTION" =>  "Subscriptions",
 "TEXTING" =>  "Texting Expenses",
 "TEXTING SERVICES" =>  "Texting Expenses",
 "TRAVEL EXPENSE" =>  "Travel Expenses",
 "TRAVEL EXPENSES" =>  "Travel Expenses",
 "TV ADVERTISING" =>  "TV Advertising",
 "VIDEO PRODUCTION SERVICES" =>  "Video Production",
 "VIDEOGRAPHY AND PHOTOGRAPHY SERVICES" =>  "Video Production",
 "VOTER FILE SERVICES" =>  "Voter Engagement",
 "WEBSITE" =>  "IT",
 "WEBSITE HOSTING" =>  "IT",
 "WEBSTORE FEE" =>  "IT",
 "WEBSTORE FEES" =>  "IT",
 "WEBSTORE MANAGEMENT" =>  "IT",
 "WEBSTORE MANAGEMENT SERVICES" =>  "IT"
}

class Disbursement < ApplicationRecord
  validates :transaction_id, uniqueness: true

  def county_fips
  end

  def self.type_mappings = DISBURSEMENT_TYPE_MAPPINGS
  def self.subtype_mappings = DISBURSEMENT_SUBTYPE_MAPPINGS

  def self.set_custom_disbursement_types!
    Disbursement.all.each do |d|
      d.update_attribute(:custom_disbursement_subtype, Disbursement.subtype_mappings[d.disbursement_description])
      d.update_attribute(:custom_disbursement_type, "Consulting") if d.custom_disbursement_subtype&.include?("Consulting")

      unless d.custom_disbursement_type
        d.update_attribute(:custom_disbursement_type, Disbursement.type_mappings[d.custom_disbursement_subtype] || d.custom_disbursement_subtype)
      end

      d.update_attribute(:county_fips, d.recipient_zip.to_s[0..4].to_i.to_fips.to_s.rjust(5, "0"))
    end
  end

  def self.geo
    data = Disbursement.where.not(custom_disbursement_type: "Refunds").group(:county_fips).sum(:disbursement_amount)
    data.map do |fips, amount|
      { id: fips, value: amount }
    end
  end

  # Create a structure of disbursement data based on type > subtype > category hierarchy
  def self.generate_hierarchy
    disbursements = Disbursement.where.not(custom_disbursement_type: nil).group(:custom_disbursement_type, :custom_disbursement_subtype, :disbursement_description).sum(:disbursement_amount)

    subtypes = {}
    types = {}

    disbursements.each do |keys, amount|
      type, subtype, category = keys
      subtypes[[ subtype, type ]] ||= []
      subtypes[[ subtype, type ]] << { name: category, value: amount }
    end

    subtypes.each do |keys, children|
      subtype, type = keys
      types[type] ||= []
      types[type] << { name: subtype, children: }
    end

    {
      name: "disbursements", children: types.map do |type, children|
      { name: type, children: }
      end
    }
  end
end
