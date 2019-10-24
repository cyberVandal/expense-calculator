import React, { Component } from "react";
import "./Global.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import * as actionTypes from "../../store/actionTypes";
import image from "./user.png";
import logout from "./logout.png";
import logout1 from "./logout1.png";


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false


    };
  }

  sectionStatusHandler = status => {
    this.props.setSectionStatus(status);
  };

  logout = () => {
    this.props.setUserName("");
    this.props.setUserToken("");
    this.setState({ clicked: true });
    //this.props.setLogout(true);

  }


  render() {
    if (this.state.clicked === true) {
      return <Redirect to='/' />
    }
    return (
      <>
        <div className="dashboard-header">
          <div className="buttons-holder">
            <NavLink className="nav-link" exact to="/products">
              {" "}
              <button
                // onClick={() => this.sectionStatusHandler("products")}
                className={
                  this.props.sectionStatus === "products"
                    ? "button-ghost-clicked border-radius"
                    : "button-ghost border-radius"
                }
              >
                PRODUCTS
              </button>
            </NavLink>
            <NavLink className="nav-link" exact to="/expenses">
              {" "}
              <button
                // onClick={() => this.sectionStatusHandler("expenses")}
                className={
                  this.props.sectionStatus === "expenses"
                    ? "button-ghost-clicked border-radius"
                    : "button-ghost border-radius"
                }
              >
                EXPENSES
              </button>
            </NavLink>
          </div>
          <div className="avatar-holder">
            <img
              className="avatar-img"
              src={image}
              // src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083376__340.jpg"
              alt="Smiley face"
            />
            <span>{this.props.user}</span>

            <span onClick={() => this.logout()}>
              <img
                className="logout-img"
                src={logout}
                alt="Logout" />
            </span>

            {/* <img
              className="logout-img"
              src={logout}
              alt="Logout"
            /> */}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    sectionStatus: state.sectionStatus,
    user: state.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status)),
    setUserName: user => dispatch(actionTypes.setUserName(user)),
    setUserToken: token => dispatch(actionTypes.setUserToken(token)),
    setLogout: data => dispatch(actionTypes.setLogout(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
