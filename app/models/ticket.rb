# frozen_string_literal: true

# == Schema Information
#
# Table name: tickets
#
#  id          :integer          not null, primary key
#  description :string
#  due_date    :date
#  status      :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  assignee_id :integer
#  creator_id  :integer          not null
#  parent_id   :integer
#
# Indexes
#
#  index_tickets_on_assignee_id  (assignee_id)
#  index_tickets_on_creator_id   (creator_id)
#  index_tickets_on_parent_id    (parent_id)
#
# Foreign Keys
#
#  assignee_id  (assignee_id => users.id)
#  creator_id   (creator_id => users.id)
#  parent_id    (parent_id => tickets.id)
#
class Ticket < ApplicationRecord
  belongs_to :creator, class_name: 'User', inverse_of: :tickets, optional: true
  belongs_to :assignee, class_name: 'User', inverse_of: :assigned_tickets, optional: true

  belongs_to :parent, class_name: 'Ticket', optional: true
  has_many :subtickets, class_name: 'Ticket', foreign_key: 'parent_id', dependent: :destroy
end
