import { useHistory } from "react-router-dom";

function Ticket({ ticket, subticket, onTglStatus, showSubTicket = true }) {
  const history = useHistory();
  const hasSubtickets = ticket.subtickets.length > 0;
  function truncate(str) {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
  }

  const renderCard = () => {
    return (
      <div className="card">
        <div className="cardtext-left" key={ticket.id}>
          <div className="row">
            <div className={"col-10"}>
              <div className={"col-4"}>
                <a href={`/users/${ticket.creator_id}/tickets/${ticket.id}`}>
                  <h7>{ticket.id}</h7>

                  <h4>{truncate(ticket.title)}</h4>
                </a>
                <h5>{truncate(ticket.description)}</h5>
                <div className="ticket-meta">
                  <img
                    src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                    alt="calendar"
                  />
                  {ticket.due_date}
                  {ticket.assignee_id}
                </div>
              </div>
              <button
                className="ticket-meta"
                onClick={() =>
                  history.push(
                    `/users/${ticket.creator_id}/tickets/${ticket.id}/edit`
                  )
                }
              >
                <img
                  src="https://icongr.am/feather/edit-2.svg?size=12&color=ff6f00"
                  alt="calendar"
                />
              </button>
              <div className="col-2">
                {ticket.status}
                <button
                  className="button icon-only clear"
                  onClick={() => onTglStatus(ticket)}
                >
                  {ticket.status === "completed" && "✅"}
                  {ticket.status === "pending" && "⬜"}
                </button>
              </div>
            </div>
            {ticket.subtickets.length > 0 && showSubTicket && (
              <div className="subticket-row">
                {"Subticket"}
                {ticket.subtickets.map((subticket) => (
                  <div className="col-2 ">
                    <Ticket ticket={subticket} subticket onTglStatus={false} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  return subticket ? <ul>{renderCard()} </ul> : renderCard();
}

export default Ticket;
