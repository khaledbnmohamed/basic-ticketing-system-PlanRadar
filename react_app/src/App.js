import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListingTickets  from "./components/ListingTickets";
import ViewTicket from "./components/ViewTicket";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users/:user_id/tickets" component={ListingTickets} />
        <Route exact path="/users/:user_id/tickets/:id" component={ViewTicket} />
      </Switch>
    </Router>
  );
}

export default App;
