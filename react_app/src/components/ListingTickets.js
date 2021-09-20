import "../App.css";
import "../assets/styles.css";

import { useState, useEffect } from "react";
import Tickets from "./Tickets";
import TicketEdit from "./TicketEdit";
import { listTickets } from "../tickets";
import { useParams } from "react-router-dom";

function ListingTickets() {
  const { user_id } = useParams();

  const [tickets, setTickets] = useState([]);

  const getTickets = async (user_id) => {
    const resp = await listTickets({user_id});
    if (resp.hasError) {
      console.log("error")
    } else {
      setTickets(resp.data['tickets'])
    }
  };

  useEffect(() => {
    getTickets(user_id);
  }, [user_id]);

  const onTglStatus = (ticket) => {
    console.log("completing ticket");
    setTickets(
      tickets.map((chkTicket) => {
        chkTicket.complete =
          ticket.id === chkTicket.id ? !chkTicket.complete : chkTicket.complete;
        return chkTicket;
      })
    );
  };


  const [showTicketEdit, setShowTicketEdit] = useState(false);

  const onSaveTicket = ({ desc, date }) => {
    console.log("saving tickets");
    setTickets([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tickets,
    ]);
  };

  return (
    <div className="ListingTickets">
      <div className="container">
          <button
            className="button outline"
            onClick={() => setShowTicketEdit(!showTicketEdit)}>
            {!showTicketEdit && "New"}
            {showTicketEdit && "➖"}
          </button>
        </div>
        {showTicketEdit && <TicketEdit ticket={{}} onSaveTicket={onSaveTicket} />}
        <Tickets tickets={tickets} onTglStatus={onTglStatus}></Tickets>
      </div>
  );
}

export default ListingTickets;
