module DisbursementsHelper
  def sort_link(column:, label:)
    link_to(label, disbursements_path(sort_by: column), data: { turbo_action: "replace" })
  end
end
