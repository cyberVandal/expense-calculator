import React, { Component } from "react";
import "./Products.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import TableRows from "../TableRows/TableRows";
import Alert from "../Alert/Alert";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.props.setSectionStatus("products");

    axios.get("http://localhost:8080/api/products")
      .then(response => {
        this.props.init(response.data);
      });
   
  }
  componentDidUpdate(){
    axios.get("http://localhost:8080/api/products")
      .then(response => {
        this.props.init(response.data);
      });
  }

  removeProductHandler = id => {


    axios.delete(`http://localhost:8080/api/products/${id}`);

    this.props.removeProduct(id);
    // axios.get("http://localhost:8080/api/products")
    //   .then(response => {
    //     this.props.init(response.data);

    //   });
  };

  alertHandler = id => {
    this.props.setAlertStatus(id);
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
                  sectionStatus={this.props.sectionStatus}
                  alertStatus={this.props.alertStatus}
                  clickAlert={this.alertHandler}
                />
              </table>
            </div>
          </div>
        </div>
        {this.props.deleteId === 0 ? (
          " "
        ) : (
            <Alert
              clickDelete={this.removeProductHandler}
              clickStatus={this.alertHandler}
              id={this.props.deleteId}
            />


          )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    prods: state.products,
    sectionStatus: state.sectionStatus,
    alertStatus: state.alertStatus,
    deleteId: state.deleteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: products => dispatch(actionTypes.initGlobalState(products)),
    removeProduct: id => dispatch(actionTypes.removeProduct(id)),
    setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status)),
    setAlertStatus: id => dispatch(actionTypes.setAlertStatus(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
