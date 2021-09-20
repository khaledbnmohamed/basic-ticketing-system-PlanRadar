import { BrowserRouter as Router, Route } from "react-router-dom";

import ListingTickets  from "./components/ListingTickets";
function App() {
  return (
    <Router>
      <Route exact path="/:user_id/tickets" component={ListingTickets} />
    </Router>
  );
}

export default App;
