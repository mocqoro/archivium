class UserUniverse < ApplicationRecord
	belongs_to :user
	belongs_to :universe
end