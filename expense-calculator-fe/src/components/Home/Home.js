import React, { Component } from "react";
import "../../css/Global.css";
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actionTypes from "../../store/actionTypes";

export default class Home extends Component {
    constructor() {
        super();
        //Set default message
        this.state = {
            message: 'Loading...' 
        }
    }
    componentDidMount() {

        //GET message from server using fetch api
        axios.get("http://localhost:8080/api/home")
            .then(response => {
                this.setState({ message: response.data })
            });
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>{this.state.message}</p>
            </div>
        );
    }
}