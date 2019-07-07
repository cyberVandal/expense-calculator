import React, { Component } from "react";
import '../../css/Global.css';
import { NavLink } from 'react-router-dom';
import Header from "../Header/Header";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

class Expenses extends Component {

  componentDidMount() {

    this.props.setSectionStatus("expenses");
  }

  tabClickHandler = (status) => {
    this.props.setTabStatus(status);

  }

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
              <button onClick={() => this.tabClickHandler("monthly")} className={this.props.tabStatus === "monthly" ? "tab-button-clicked border-radius" : "tab-button border-radius"}>MONTHLY</button>
              <button onClick={() => this.tabClickHandler("yearly")} className={this.props.tabStatus === "yearly" ? "tab-button-clicked border-radius" : "tab-button border-radius"}>YEARLY</button>
              <label className="margin-left">Choose Month</label>
              <select className="border-radius">
                <option value="volvo">Day</option>
                <option value="saab">Mounth</option>
                <option value="opel">Year</option>

              </select>
            </div>
            <div className="dashboard-container-table">
              <table >
                <tr>
                  <th>Product Name</th>
                  <th>Product Type</th>
                  <th>Product Description</th>
                  <th>Purchase Date</th>
                  <th>Product Price</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>Germany</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Berglunds snabbköp</td>
                  <td>Christina Berglund</td>
                  <td>Sweden</td>
                  <td>Sweden</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                  <td>Roland Mendel</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                  <td>UK</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Königlich Essen</td>
                  <td>Philip Cramer</td>
                  <td>Germany</td>
                  <td>Philip Cramer</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                  <td>Giovanni Rovelli</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>North/South</td>
                  <td>Simon Crowther</td>
                  <td>UK</td>
                  <td>Simon Crowther</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Paris spécialités</td>
                  <td>Marie Bertrand</td>
                  <td>France</td>
                  <td>Marie Bertrand</td>
                  <td>Marie Bertrand</td>
                  <td></td>
                </tr>
              </table>

            </div>
          </div>




        </div>
        <footer>
          <h2>Total spent: 1250 den.</h2>
        </footer>
      </>
    );
  }

}
const mapStateToProps = state => {
  return {
    tabStatus: state.tabStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: (id) => dispatch(actionTypes.removeProduct(id)),
    setTabStatus: (status) => dispatch(actionTypes.setTabStatus(status)),
    setSectionStatus: (status) => dispatch(actionTypes.setSectionStatus(status))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
