import React, { Component } from "react";
import "../../css/Global.css";
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actionTypes from "../../store/actionTypes";

export default class Secret extends Component {
    constructor() {
        super();
        //Set default message
        this.state = {
            message: 'Loading...'
        }
    }
    componentDidMount() {
        //GET message from server using fetch api
        axios.get("http://localhost:8080/api/secret")
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