class User < ApplicationRecord
  has_many :pickups
  has_many :sites, through: :pickups

  has_many :events_users
  has_many :events, through: :events_users
end
