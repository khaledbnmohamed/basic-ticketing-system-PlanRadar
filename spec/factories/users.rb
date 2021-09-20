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
FactoryBot.define do
  factory :user do
    sequence(:name) { |i| "user #{i}" }
    sequence(:email) { |i| "test-user-#{i}@ticketer.com" }
    sequence(:mobile) { "0#{rand(505_000_000..505_999_999)}" }
    password_diget { 'QWer12%!' }
  end
end
