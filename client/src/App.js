import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import locations for Search & Saved
import { Search, Saved } from "./pages"
// import "./App.css";

class App extends Component {
  render() {
    return (
      // Utilize react-router
      <Router>

        <Switch>
          <Route exact pather="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>

      </Router>
    );
  }
}

export default App;
