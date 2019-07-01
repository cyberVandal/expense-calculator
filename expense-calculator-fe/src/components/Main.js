import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Products from "./Products/Products";
import Expenses from "./Expenses/Expenses";
import CreateProduct from "./CreateProduct/CreateProduct";

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
          <Route  path="/register" component={Register} />
          <Route  path="/products" component={Products} />
          <Route  path="/expenses" component={Expenses} />
          <Route  path="/create-product" component={CreateProduct} />
        </Switch>
      </>
    );
  }
}

export default Main;
