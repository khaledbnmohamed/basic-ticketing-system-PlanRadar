# frozen_string_literal: true

module Api::V1
  class UserBlueprint < Blueprinter::Base
    identifier :id
    fields :email, :mobile, :name
  end
end
