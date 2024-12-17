class DisbursementsController < ApplicationController
  def index
    if params[:sort_by]
      @disbursement = Disbursement.order(params[:sort_by])
    else
      @disbursement = Disbursement.order(:custom_disbursement_type, :custom_disbursement_subtype, :disbursement_description)
    end
  end
end
