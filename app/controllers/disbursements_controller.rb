class DisbursementsController < ApplicationController
  def index
    if params[:sort_by]
      dir = params[:sort_by] == "disbursement_amount" ? :desc : :asc
      @disbursement = Disbursement.order(params[:sort_by] => dir)
    else
      @disbursement = Disbursement.order(:custom_disbursement_type, :custom_disbursement_subtype, :disbursement_description)
    end
  end
end
