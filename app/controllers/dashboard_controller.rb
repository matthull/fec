class DashboardController < ApplicationController
  def index
    @disbursements = Disbursement.all

    @type_stats = Disbursement.group(:custom_disbursement_type).sum(:disbursement_amount)
    @hierarchy = Disbursement.generate_hierarchy
    @geo = Disbursement.geo
  end
end
