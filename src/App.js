import React, { Fragment } from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <div className="row">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
