import Ticket from "./Ticket";
function Tickets({ tickets, onTglStatus }) {
  return (
    <div className="card">
      <div className="row">
        {tickets.map((ticket) => (
          <div className="col-12" key={ticket.id}>
            <Ticket ticket={ticket} onTglStatus={onTglStatus} />


          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
