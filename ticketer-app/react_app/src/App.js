import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

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
        <Route exact path="/users/:user_id/tickets/:id/edit" component={TicketEdit} />
        <Route exact path="/" component={() => <Redirect to="/users/1/tickets" />} />

      </Switch>
    </Router>
  );
}

export default App;
