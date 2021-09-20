# frozen_string_literal: true

module Api::V1
  class TicketsController < ::Api::BaseController
    before_action :set_user, only: %i[show edit update destroy create index]
    before_action :set_ticket, only: %i[show edit update destroy index]

    # GET /tickets
    def index
      tickets = @ticket.present? ? @ticket.subtickets : @user.tickets.page

      render json: { tickets: TicketBlueprint.render_as_json(tickets.page(params[:page])) }
    end

    # POST /users
    def create
      complete_ticket = ticket_params
      complete_ticket.merge!(parent_id: params[:ticket_id]) if params[:ticket_id].present?
      ticket = Ticket.new(complete_ticket)
      ticket.creator = @user
      raise Errors::CustomError.new(:bad_request, 400, ticket.errors.messages) unless ticket.save

      render json: TicketBlueprint.render(ticket)
    end

    # GET /tickets/1
    def show
      render json: TicketBlueprint.render(@ticket)
    end

    # GET /tickets/1/edit
    def edit; end

    # PATCH/PUT /tickets/1
    def update
      raise Errors::CustomError.new(:bad_request, 400, @ticket.errors.tickets) unless @ticket.update(ticket_params)

      render json: TicketBlueprint.render(@ticket)
    end

    # DELETE /tickets/1
    def destroy
      @ticket.destroy
      render json: TicketBlueprint.render(@ticket)
    end

    private

    def set_user
      @user = User.find_by!(id: params[:user_id])
    end

    def set_ticket
      @ticket = Ticket.find_by(id: params[:id] || params[:ticket_id])
    end

    # Only allow a trusted parameter "white list" through.
    def ticket_params
      params.require(:ticket).permit(:assignee_id, :title, :description, :status, :due_date)
    end
  end
end
