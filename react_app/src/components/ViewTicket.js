import "../App.css";
import "../assets/styles.css";

import { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { useParams } from "react-router-dom";
import { getTicket } from "../tickets";

function ViewTicket() {
  const { user_id } = useParams();
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);

  const getTicketData = async (id) => {
    const resp = await getTicket({user_id, ticket_id: id});
    if (resp.hasError) {
      console.log("error")
    } else {
      setTicket(resp.data)
    }
  };

  useEffect(() => {
    getTicketData(id);
  }, [id]);


  return (
    ticket && (
    <div className="ListingTickets">
         <div className="container">
          <Ticket ticket={ticket} onTglStatus={false} />
          </div>
      </div>
    )
  );
}

export default ViewTicket;
