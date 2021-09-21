import Ticket from "./Ticket";
import VirtualScroll from "./VirtualScroller/VirtualScroll";

function Tickets({ tickets, onTglStatus }) {
  const row_height = 150;
  const height_margin = 5;

  let ticketsArray = [];
  tickets.map((ticket) => {
    ticketsArray.push(
      <Ticket ticket={ticket} onTglStatus={onTglStatus} showSubTicket={false} />
    );
    ticket.subtickets.map((subticket) =>
      ticketsArray.push(
        <Ticket
          ticket={subticket}
          subticket
          onTglStatus={onTglStatus}
          showSubTicket={false}
        />
      )
    );
  });

  return (
    <div className="row">
      <VirtualScroll
        height={window.innerHeight + height_margin}
        totalElements={ticketsArray.length}
        rowHeight={row_height}
        items={ticketsArray}
        visibleItemsLength={50}
      />
    </div>
  );
}

export default Tickets;
