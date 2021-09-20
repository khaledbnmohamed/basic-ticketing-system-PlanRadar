# frozen_string_literal: true

module Api::V1
  class TicketBlueprint < Blueprinter::Base
    fields :creator_id, :assignee_id, :parent_id, :title, :description, :status, :due_date
    association :subtickets, blueprint: TicketBlueprint
  end
end
