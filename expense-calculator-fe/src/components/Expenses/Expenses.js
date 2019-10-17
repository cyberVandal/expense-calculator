import React, { Component } from "react";
import "../../css/Global.css";
import Header from "../Header/Header";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import SelectorMonthly from "../SelektorMonthly/SelektorMonthly";
import SelectorYearly from "../SelectorYearly/SelectorYearly";
import TableRows from "../TableRows/TableRows";

class Expenses extends Component {
  componentDidMount() {
    this.props.setSectionStatus("expenses");

    var sum = 0;
    for (let i = 0; i < this.props.products.length; i++) {
    if(this.props.products[i].user_name === this.props.userName){
        sum = sum + this.props.products[i].product_price;
        console.log(this.props.products[i].user_name);
     }
     
    }

    this.props.setSum(sum);
  }

  tabClickHandler = status => {
    this.props.setTabStatus(status);
  };

  yearSelectHandler = (e) =>{
     
      this.props.setYear(e.target.value);

  };

  render() {
    return (
      <>
        <Header />
        <div className="dashboard-container">
          <div className="column">
            <div className="dashboard-container-head">
              <h1>Expenses</h1>
            </div>
            <div className="margin-left">
              <button
                onClick={() => this.tabClickHandler("monthly")}
                className={
                  this.props.tabStatus === "monthly"
                    ? "tab-button-clicked border-radius-left"
                    : "tab-button border-radius-left"
                }
              >
                MONTHLY
              </button>
              <button
                onClick={() => this.tabClickHandler("yearly")}
                className={
                  this.props.tabStatus === "yearly"
                    ? "tab-button-clicked border-radius-right"
                    : "tab-button border-radius-right"
                }
              >
                YEARLY
              </button>
              {this.props.tabStatus === "monthly" ? (
                <SelectorMonthly />
              ) : (
                  <SelectorYearly
                  
                    selectYear={this.yearSelectHandler}
                  />
                )}
            </div>
            <div className="dashboard-container-table">
              <table>
                <tr>
                  <th>Product Name</th>
                  <th>Product Type</th>
                  <th>Product Description</th>
                  <th>Purchase Date</th>
                  <th>Product Price</th>
                  <th />
                </tr>
                <TableRows
                  products={this.props.products}
                  sectionStatus={this.props.sectionStatus}
                  userName={this.props.userName}
                  year={this.props.year}
                />
              </table>
            </div>
          </div>
        </div>
        <footer>
          <h2>Total spent: {this.props.sum} den.</h2>
        </footer>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    tabStatus: state.tabStatus,
    sectionStatus: state.sectionStatus,
    sum: state.sum,
    userName: state.userName,
    year: state.year
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => dispatch(actionTypes.removeProduct(id)),
    setTabStatus: status => dispatch(actionTypes.setTabStatus(status)),
    setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status)),
    setSum: sum => dispatch(actionTypes.setSum(sum)),
    setYear: year => dispatch(actionTypes.setYear(year))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
