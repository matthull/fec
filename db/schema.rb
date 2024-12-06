# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2024_12_06_182504) do
  create_table "disbursements", force: :cascade do |t|
    t.integer "committee_id"
    t.string "committee_name"
    t.integer "report_year"
    t.string "entity_type"
    t.string "entity_type_desc"
    t.string "recipient_name"
    t.string "beneficiary_committee_name"
    t.string "memo_code"
    t.string "memo_code_full"
    t.string "disbursement_type"
    t.string "disbursement_type_name"
    t.datetime "disbursement_date"
    t.decimal "disbursement_amount"
    t.string "fec_election_type"
    t.string "payee_last_name"
    t.string "payee_first_name"
    t.string "recipient_city"
    t.integer "recipient_zip"
    t.string "disbursement_purpose_category"
    t.string "pdf_url"
    t.string "line_number_label"
    t.string "report_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
