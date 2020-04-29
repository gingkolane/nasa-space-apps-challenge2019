# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_20_030606) do

  create_table "drifters", force: :cascade do |t|
    t.text "drifter_ID", limit: 255
    t.text "WMO", limit: 255
    t.text "EXP", limit: 255
    t.text "1st DATE", limit: 255
    t.text "1st LAT", limit: 255
    t.text "1st LON", limit: 255
    t.text "END DATE", limit: 255
    t.text "END LAT", limit: 255
    t.text "END LON", limit: 255
    t.text "DROG OFF Month", limit: 255
    t.text "DROG OFF DATE", limit: 255
    t.text "DROG OFF YEAR", limit: 255
    t.text "DOFF LT", limit: 255
    t.text "DOFF LN", limit: 255
    t.text "DEATH CODE", limit: 255
    t.text "MANUF", limit: 255
    t.text "TYPE", limit: 255
    t.integer "site_id"
  end

  create_table "events", force: :cascade do |t|
    t.text "name"
    t.integer "site_id"
    t.text "organizer"
    t.date "date"
    t.time "time"
    t.text "location"
    t.text "event_url"
  end

  create_table "events_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "event_id"
    t.index ["event_id"], name: "index_events_users_on_event_id"
    t.index ["user_id"], name: "index_events_users_on_user_id"
  end

  create_table "pickups", force: :cascade do |t|
    t.integer "user_id"
    t.integer "site_id"
    t.date "date"
    t.time "time"
    t.text "content"
    t.decimal "weight"
    t.text "pict_url_before"
    t.text "pict_url_after"
    t.index ["site_id"], name: "index_pickups_on_site_id"
    t.index ["user_id"], name: "index_pickups_on_user_id"
  end

  create_table "sites", force: :cascade do |t|
    t.text "name"
    t.text "END_LAT"
    t.text "END_LON"
    t.text "DEATH CODE"
    t.text "trash_level"
    t.text "reponsible_organization"
    t.text "drifter_ID"
  end

  create_table "users", force: :cascade do |t|
    t.text "name"
    t.text "username"
    t.text "password"
  end

end
