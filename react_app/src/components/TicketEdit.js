import { useState } from "react";
import { createTicket } from "../tickets";
import { useParams, useHistory } from "react-router-dom";

function TicketEdit({ ticket, onSaveTicket }) {
  const [description, setDescription] = useState("");
  const { user_id } = useParams();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");



  const saveTicket = async (e) => {
    e.preventDefault();
    // onSaveTicket({ desc: desc, date: date, title: title });
    const resp = await createTicket({
      title, description, due_date: date
    }, {user_id})
    if (resp.hasError) {
      console.log("error")
    } else {
      console.log(resp.data)
    }
    setTitle("");
    setDesc("");
    setDate("");
  };
  return (
    <div className="card">
      <h3>Add Ticket</h3>
      <form>
      <label htmlFor="Title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
