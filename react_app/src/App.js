import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListingTickets  from "./components/ListingTickets";
import ViewTicket from "./components/ViewTicket";
import TicketEdit from "./components/TicketEdit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users/:user_id/tickets" component={ListingTickets} />
        <Route exact path="/users/:user_id/tickets/:id" component={ViewTicket} />
        <Route exact path="/users/:user_id/tickets/:id/edit" component={TicketEdit} />

      </Switch>
    </Router>
  );
}

export default App;
