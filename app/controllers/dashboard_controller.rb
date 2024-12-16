class DashboardController < ApplicationController
  def index
    @disbursements = Disbursement.all

    @type_stats = Disbursement.group(:custom_disbursement_type).sum(:disbursement_amount)
  end
end
