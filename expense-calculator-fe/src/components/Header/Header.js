import React, { Component } from "react";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

class Header extends Component {

  sectionStatusHandler = (status) => {
    this.props.setSectionStatus(status)
  }
  render() {
    return (
      <>
        <div className="dashboard-header">
          <div className="buttons-holder">
            <NavLink className="nav-link" exact to="/products">
              {" "}
              <button
                // onClick={() => this.sectionStatusHandler("products")}
                className={this.props.sectionStatus === "products" ? "button-ghost-clicked border-radius" : "button-ghost border-radius"}>
                PRODUCTS
              </button>
            </NavLink>
            <NavLink className="nav-link" exact to="/expenses">
              {" "}
              <button
                // onClick={() => this.sectionStatusHandler("expenses")} 
                className={this.props.sectionStatus === "expenses" ? "button-ghost-clicked border-radius" : "button-ghost border-radius"}>
                EXPENSES</button>
            </NavLink>
          </div>
          <div className="avatar-holder">
            <img
              className="avatar-img"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083376__340.jpg"
              alt="Smiley face"
            />
            <span>Milena Spasovska</span>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    sectionStatus: state.sectionStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSectionStatus: (status) => dispatch(actionTypes.setSectionStatus(status))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
