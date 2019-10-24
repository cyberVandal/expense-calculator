import React, { Component } from "react";
import "../../css/Global.css";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import * as actionTypes from "../../store/actionTypes";
// import SelectorMonthly from "../SelektorMonthly/SelektorMonthly";
// import SelectorYearly from "../SelectorYearly/SelectorYearly";
// import TableRows from "../TableRows/TableRows";

class Expenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeSumYear: 0,
      changeSumMonth: 0,
      year: "All",
      month: "All",
      filterProductsMonth: [],
      clicked: false
    };
  }
  componentDidMount() {

    if (this.props.token) {
      this.props.setSectionStatus("expenses");

      var sum = 0;
      for (let i = 0; i < this.props.products.length; i++) {

        sum = sum + this.props.products[i].product_price;

      }
      this.props.setFilterProducts(this.props.products);
      this.props.setSum(sum);
      this.setState({
        filterProductsMonth: this.props.products,
        changeSumYear: sum,
        changeSumMonth: sum
      })
    } else {
      this.setState({ clicked: true });
      this.props.setLogout(true);
    }


  }

  tabClickHandler = status => {
    this.props.setTabStatus(status);
    this.setState({
      month: "All",
      filterProductsMonth: this.props.filterProducts
    })
  };

  yearSelectHandler = (e) => {
    console.log(e.target.value);
    this.props.setYear(e.target.value);
    var filterProducts = [];
    var sum1 = 0;
    if (e.target.value === "All") {
      this.props.setFilterProducts(this.props.products);
      //this.props.setSum(this.props.sum);
      this.setState({
        year: "All",
        month: "All",
        changeSumYear: this.props.sum,
        filterProductsMonth: this.props.products
      })
    } else {
      for (let i = 0; i < this.props.products.length; i++) {
        if (this.props.products[i].purchase_date.slice(0, 4) === e.target.value) {

          filterProducts.push(this.props.products[i]);
          sum1 = sum1 + this.props.products[i].product_price;

        }
      }
      this.props.setFilterProducts(filterProducts);
      this.setState({
        changeSumYear: sum1,
        year: e.target.value,
        month: "All",
        filterProductsMonth: filterProducts
      })
    }
  };
  monthSelectHandler = (e) => {


    //this.props.setYear(e.target.value);
    var filterProducts1 = [];
    var sum2 = 0;
    if (e.target.value === "All") {
      this.setState({
        filterProductsMonth: this.props.filterProducts,
        month: "All",
        changeSumMonth: this.state.changeSumYear
      })
    } else {

      for (let i = 0; i < this.props.filterProducts.length; i++) {
        if (this.props.filterProducts[i].purchase_date.slice(5, 7) === e.target.value) {

          filterProducts1.push(this.props.filterProducts[i]);
          sum2 = sum2 + this.props.filterProducts[i].product_price;

        }
      }
      //this.props.setFilterProducts(filterProducts);
      this.setState({
        changeSumMonth: sum2,
        month: e.target.value,
        filterProductsMonth: filterProducts1
      })
    }
  };
  tabChangeSum = (status) => {
    this.props.setTabStatus(status);
    this.setState({
      changeSumMonth: this.state.changeSumYear,
      month: "All"
    })
  }

  render() {

    if (this.state.clicked === true) {
      return <Redirect to='/' />
    }
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
                onClick={
                  //() => this.tabClickHandler("monthly")
                  () => this.tabChangeSum("monthly")
                }
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
                <>
                  <label className="margin-left">Choose Month</label>
                  <select className="border-radius" onChange={this.monthSelectHandler} value={this.state.month}>
                    <option value="All">All</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>

                  </select>
                </>
              ) : (
                  <>
                    <label className="margin-left">Choose Year</label>
                    <select className="border-radius" onChange={this.yearSelectHandler} value={this.state.year}>
                      <option value="All">All</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                    </select>
                  </>
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
                <tbody>
                  {
                    this.props.tabStatus === "yearly" ? (
                      this.props.filterProducts.map(product => (

                        <tr key={product.id}>
                          <td>{product.product_name}</td>
                          <td>{product.product_type}</td>
                          <td>{product.product_description}</td>
                          <td>{product.purchase_date}</td>
                          <td>{product.product_price}</td>
                          <td>

                          </td>
                        </tr>
                      ))) : (
                        this.state.filterProductsMonth.map(product => (

                          <tr key={product.id}>
                            <td>{product.product_name}</td>
                            <td>{product.product_type}</td>
                            <td>{product.product_description}</td>
                            <td>{product.purchase_date}</td>
                            <td>{product.product_price}</td>
                            <td>

                            </td>
                          </tr>
                        ))
                      )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer>
          <h2>Total spent: {this.props.tabStatus === "yearly" ? (this.state.changeSumYear) : (this.state.changeSumMonth)} den.</h2>
        </footer>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    filterProducts: state.filterProducts,
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
    setYear: year => dispatch(actionTypes.setYear(year)),
    setFilterProducts: products => dispatch(actionTypes.setFilterProducts(products)),
    setLogout: data => dispatch(actionTypes.setLogout(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
