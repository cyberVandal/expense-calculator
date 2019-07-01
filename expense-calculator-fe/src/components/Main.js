import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Switch>

          <Route exact path="/" component={Login} />
        </Switch>
      </>
    );
  }
}

export default Main;
