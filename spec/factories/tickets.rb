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
FactoryBot.define do
  factory :ticket do
    title { FFaker::Lorem.sentence }
    description { FFaker::Lorem.paragraph }
    due_date { Date.today + 1.week }
    status { 'pending' }
    association :assignee, factory: :user
    association :creator, factory: :user

    factory :subticket, parent: :ticket do
      parent_id { create(:ticket).id }
    end
  end
end
