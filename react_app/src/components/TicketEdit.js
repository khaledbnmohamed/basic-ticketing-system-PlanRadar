import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getTicket, createTicket, editTicket } from "../tickets";

function TicketEdit({ ticket = {}, onSaveTicket }) {
  const history = useHistory();
  const { user_id } = useParams();
  const { id } = useParams();
  const [ticketSelected, setTicketSelected] = useState(ticket);
  const { title, description, due_date, ticket_status } = ticketSelected;

  const saveTicket = async (e) => {
    e.preventDefault();
    const ticket_params = {
      title,
      description,
      due_date
    }
    const resp = id ? await editTicket(ticket_params, {user_id, ticket_id: id}) : await createTicket(ticket_params, {user_id});
    if (resp.hasError) {
      console.log("error", resp);
    } else {
      console.log(resp.data);
      history.push(`/users/${user_id}/tickets/${resp.data["id"]}`);
      setTicketSelected({});
    }
  };

  const getTicketData = async (id) => {
    const resp = await getTicket({ user_id, ticket_id: id });
    if (resp.hasError) {
      console.log("error");
    } else {
      setTicketSelected(resp.data);
    }
  };

  useEffect(() => {
    if (id) {
      getTicketData(id);
    }
  }, [id]);

  return (
    <div className="card">
      <h3> {id ? "Edit Ticket" : "Add Ticket" }</h3>
      <form>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) =>
            setTicketSelected({ ...ticketSelected, title: e.target.value })
          }
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) =>
            setTicketSelected({
              ...ticketSelected,
              description: e.target.value,
            })
          }
        />

        <label htmlFor="date">Due date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={due_date}
          onChange={(e) =>
            setTicketSelected({ ...ticketSelected, due_date: e.target.value })
          }
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTicket}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TicketEdit;
