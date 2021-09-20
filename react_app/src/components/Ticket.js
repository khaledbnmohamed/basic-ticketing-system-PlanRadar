function Ticket({ ticket, onTglStatus }) {
  return (
    <div className="card text-left" key={ticket.id}>
      <div className="row">
        <div className="col-6">
          <h4>{ticket.title}</h4>
          <h5>{ticket.description}</h5>
          <div className="ticket-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {ticket.due_date}
            {ticket.assignee_id}
          </div>
        </div>

        <div className="col-2 is-center">
          {ticket.status}
          <button
            className="button icon-only clear"
            onClick={() => onTglStatus(ticket)}>
            {ticket.status === "completed" && "✅"}
            {ticket.status === "pending" && "⬜"}
          </button>
          {ticket.subtickets.length > 0 && (ticket.subtickets.map((subticket) => (
                <div className="col-12 right">
                {"Subticket"}
                <h4>{subticket.title}</h4>
                <h5>{subticket.description}</h5>
                <h5>{subticket.due_date}</h5>
                <h5>{subticket.status}</h5>
               </div>
            )))}
        </div>
      </div>
    </div>
  );
}

export default Ticket;
