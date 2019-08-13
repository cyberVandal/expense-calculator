import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";
import * as actionTypes from "../../store/actionTypes";

class Login extends Component {
  handleName = () => { };
  handleChangeName = e => {
    console.log("TMP EMAIL : " + this.props.tmpEmail + "  ERR EMAIL : " + this.props.errEmail);
    if (e.target.value.length <= 8) {
      this.props.setTmpEmail(e.target.value);
      this.props.setErrEmail("");
      // this.setState({ errName: "", tmpName: e.target.value });
    } else {
      this.props.setErrEmail("8 character is max");
      // this.setState({ errName: "8 character is max" });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="column">
          <div className="main">
            <form>
              <label for="email">E-mail: </label>
              <input
                className="border-radius form-input"
                type="text"
                name="email"
                onChange={this.handleChangeName}
                value={this.props.tmpEmail}
              />
              <br />
              {
                this.props.errEmail !== '' ? <p>{this.props.errEmail}</p> : null
              }
              <label for="pass">Password:</label>
              <input
                className="border-radius form-input"
                type="password"
                name="pass"
                onChange={this.handleName}
              />
              <NavLink exact to="/products">
                <input
                  className="border-radius button-solid"
                  type="submit"
                  value="SIGN IN"
                />
              </NavLink>
            </form>
          </div>
          <div className="text-holder">
            <p>
              Or if you don't have account{" "}
              <NavLink exact to="/register">
                register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tmpEmail: state.tmpEmail,
    errEmail: state.errEmail,
    sectionStatus: state.sectionStatus,
    alertStatus: state.alertStatus,
    deleteId: state.deleteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTmpEmail: tmp => dispatch(actionTypes.setTmpEmail(tmp)),
    setErrEmail: err => dispatch(actionTypes.setErrEmail(err)),
    init: products => dispatch(actionTypes.initGlobalState(products)),
    removeProduct: id => dispatch(actionTypes.removeProduct(id)),
    setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status)),
    setAlertStatus: id => dispatch(actionTypes.setAlertStatus(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
