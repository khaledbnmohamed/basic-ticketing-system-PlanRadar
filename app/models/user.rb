# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id             :integer          not null, primary key
#  email          :string           not null
#  mobile         :string           not null
#  name           :string           not null
#  password_diget :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class User < ApplicationRecord
  has_many :tickets, class_name: 'Ticket', foreign_key: 'creator_id', dependent: :restrict_with_exception,
                     inverse_of: :creator
  has_many :assigned_tickets, class_name: 'Ticket', foreign_key: 'assignee_id', dependent: :restrict_with_exception,
                              inverse_of: :assignee
end
