import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Products from "./Products/Products";
import Expenses from "./Expenses/Expenses";
import CreateProduct from "./CreateProduct/CreateProduct";
import Home from "./Home/Home";
import Secret from "./Secret/Secret";
import EditProduct from "./EditProduct/EditProduct";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul> */}
        <Switch>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/create-product" component={CreateProduct} />
          <Route path="/" exact component={Login} />
          <Route path="/secret" component={Secret} />
          <Route path="/edit-product" component={EditProduct} />
        </Switch>
      </>
    );
  }
}

export default Main;
