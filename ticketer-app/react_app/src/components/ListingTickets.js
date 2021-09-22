import { useState, useEffect } from "react";
import Tickets from "./Tickets";
import TicketEdit from "./TicketEdit";
import { listTickets } from "../tickets";
import { useParams } from "react-router-dom";

function ListingTickets() {
  const { user_id } = useParams();

  const [tickets, setTickets] = useState([]);

  const getTickets = async (user_id) => {
    const resp = await listTickets({ user_id });
    if (resp.hasError) {
      console.log("error");
    } else {
      setTickets(resp.data["tickets"]);
    }
  };

  useEffect(() => {
    getTickets(user_id);
  }, [user_id]);

  const [showTicketEdit, setShowTicketEdit] = useState(false);

  const onSaveTicket = ({ desc, date }) => {
    console.log("saving tickets");
    setTickets([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tickets,
    ]);
  };

  return tickets.length > 0 ? (
    <div className="ListingTickets">
      <div className="container">
        <button
          className="button outline"
          onClick={() => setShowTicketEdit(!showTicketEdit)}
        >
          {!showTicketEdit && "New"}
          {showTicketEdit && "➖"}
        </button>
      </div>
      {showTicketEdit && <TicketEdit ticket={{}} onSaveTicket={onSaveTicket} />}
      <Tickets tickets={tickets} onTglStatus={false}></Tickets>
    </div>
  ) : (
    "Loading"
  );
}

export default ListingTickets;
