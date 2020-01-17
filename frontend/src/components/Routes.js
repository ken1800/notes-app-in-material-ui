import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TopNavbar from "./Navbar/TopNavbar";
import Home from "./Home";
import AddNotes from "./AddNotes";
import Favourites from "./Favourites";
import Account from "./Account";
import Notes from "./Notes";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
class Routes extends Component {
  render() {
    return (
      <Router>
        <TopNavbar />
        <Switch>
          <Route path="/my-notes">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            My Notes
          </Route>
          <Route path="/add-notes" component={AddNotes} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/:slug" component={Notes} />
          <Route path="/" component={Home} />
        </Switch>
        <Navbar />
      </Router>
    );
  }
}

export default Routes;
