import { useHistory } from "react-router-dom";


function Ticket({ ticket, onTglStatus }) {
  const history = useHistory();

  return (
    <div className="card text-left" key={ticket.id}>
      <div className="row">
        <div className="col-6">
          <a href={`/users/${ticket.creator_id}/tickets/${ticket.id}`}>
            <h4>{ticket.title}</h4>
          </a>
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
            onClick={() => onTglStatus(ticket)}
          >
            {ticket.status === "completed" && "✅"}
            {ticket.status === "pending" && "⬜"}
          </button>
          {ticket.subtickets.length > 0 &&
            ticket.subtickets.map((subticket) => (
              <div className="col-12 right">
                {"Subticket"}
                <a
                  href={`/users/${subticket.creator_id}/tickets/${subticket.id}`}
                >
                  <h4>{subticket.title}</h4>
                </a>
                <h5>{subticket.description}</h5>
                <h5>{subticket.due_date}</h5>
                <h5>{subticket.status}</h5>
              </div>
            ))}
        </div>
        <button className="button outline" onClick={() => history.push(`/users/${ticket.creator_id}/tickets/${ticket.id}/edit`)}>
          <img
            src="https://icongr.am/feather/edit-2.svg?size=74&color=ff6f00"
            alt="calendar"
          />
        </button>
      </div>
    </div>
  );
}

export default Ticket;
