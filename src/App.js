import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './homePage'
import Detail from './detailPage'
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/forms/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

 

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
