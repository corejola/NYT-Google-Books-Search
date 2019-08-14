import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Jumbontron from "./components/Jumbotron";
// import locations for Search & Saved
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavTabs />
          <Jumbontron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Saved" component={Saved} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
