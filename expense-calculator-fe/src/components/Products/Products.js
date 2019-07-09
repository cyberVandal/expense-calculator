import React, { Component } from "react";
import "./Products.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import TableRows from "../TableRows/TableRows";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.props.setSectionStatus("products");

    if (this.props.prods.length === 0) {
      axios.get("http://localhost:8080/products").then(response => {
        this.props.init(response.data.products);
      });
    } else {
      // this.setState({ products: this.props.prods, filtered: this.props.prods });
    }
  }

  removeProductHandler = id => {
    console.log(id);
    this.props.removeProduct(id);
  };

  render() {
    return (
      <>
        <Header />
        <div class="dashboard-container">
          <NavLink className="nav-link" exact to="/create-product">
            <button className="fixed-button border-radius">ADD NEW</button>
          </NavLink>
          <div className="column">
            <div className="dashboard-container-head">
              <div>
                <h1>Products</h1>
              </div>
              <div>
                <select className="border-radius">
                  <option value="volvo">Day</option>
                  <option value="saab">Mounth</option>
                  <option value="opel">Year</option>
                </select>
              </div>
            </div>
            <div className="dashboard-container-table">
              <table>
                <tr>
                  <th>Product Name</th>
                  <th>Product Type</th>
                  <th>Product Description</th>
                  <th>Purchase Date</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
                {/* Tuka Pocnuva Mapiranje ili dinamichna tabela */}
                <TableRows
                  products={this.props.prods}
                  click={this.removeProductHandler}
                  sectionStatus={this.props.sectionStatus}
                />
              </table>
            </div>
          </div>
        </div>
        <div id="non-something">
          <div id="something" className="something">
            <div className="alert-message">
              <h2>Delete Product</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                eligendi at iusto vel numquam voluptatem odit modi maiores
                recusandae accusantium.
              </p>
              <div className="alert-button-holder">
                <a href="#non-something">
                  <button class="delete-button-cancel border-radius">
                    CANCEL
                  </button>
                </a>
                <button className="delete-button-delete border-radius">
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    prods: state.products,
    sectionStatus: state.sectionStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: products => dispatch(actionTypes.initGlobalState(products)),
    removeProduct: id => dispatch(actionTypes.removeProduct(id)),
    setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
