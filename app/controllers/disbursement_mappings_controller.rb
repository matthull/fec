class DisbursementMappingsController < ApplicationController
  def index
    @mappings = Disbursement.type_mappings
  end
end
