class Site < ApplicationRecord
  has_many :events
  has_many :pickups
  has_many :users, through: :pickups
end
