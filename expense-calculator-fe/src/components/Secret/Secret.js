import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/Global.css";
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actionTypes from "../../store/actionTypes";

 class Secret extends Component {
    constructor() {
        super();
        //Set default message
        this.state = {
            message: 'Loading...'
        }
    }
    componentDidMount() {
        //GET message from server using fetch api
        const headers = {
            'Content-Type': 'application/json',
            'x-access-token': this.props.token
          };
        //var token = {
        //    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdvcmFuQHRyYWprby5jb20iLCJpYXQiOjE1NzE3Mzc3NTUsImV4cCI6MTU3NDMyOTc1NX0.kw5XwDu1eZnQh01wJBnkL7nO6NUOGqh7tmZ0rqB0BoU"
        //} 
        axios.get("http://localhost:8080/api/secret", {headers})
            .then(response => {
                console.log("Goran");
                this.setState({ message: response.data });
            })
            .catch(error => {
                if (error.response) {
                    // Request made and server responded
                    this.setState({ message: error.response.data });
                }
            });
    }
    render() {
        return (
            <div>
                <h1>Secret</h1>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    //prods: state.products,
   // sectionStatus: state.sectionStatus,
    //alertStatus: state.alertStatus,
    //deleteId: state.deleteId
    token: state.userToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
   // setUserName: user => dispatch(actionTypes.setUserName(user)),
    //setUserToken: token => dispatch(actionTypes.setUserToken(token))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Secret);