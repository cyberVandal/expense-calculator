import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

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
          <Route exact path="/register" component={Register} />
        </Switch>
      </>
    );
  }
}

export default Main;
