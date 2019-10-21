import  React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../../css/Global.css';


class Register extends Component {
  state = {
    clicked: false,
    firstName: "",
    errFirstName: "",
    lastName: "",
    errLastName: "",
    telephone: "",
    errTelephone: "",
    country: "",
    errCountry: "",
    email: "",
    errEmail: "",
    password: "",
    errPassword: ""

  }

  getDate = () => {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }
  handleChangeFirstName = e => {
    if (e.target.value.length <= 8) {
      this.setState({ firstName: e.target.value });
      this.setState({ errFirstName: "" });
      
    } else {
      this.setState({ errFirstName: "8 character is max" });
     
    }
  };
  handleChangeLastName = e => {
    if (e.target.value.length <= 8) {
      this.setState({ lastName: e.target.value });
      this.setState({ errLastName: "" });
      
    } else {
      this.setState({ errLastName: "8 character is max" });
      
    }
  };
  handleChangeTelephone = e => {
    if (e.target.value.length <= 8) {
      this.setState({ telephone: e.target.value });
      this.setState({ errTelephone: "" });
    } else {
      this.setState({ errTelephone: "8 character is max" });
      
    }
  };

  handleChangeEmail = e => {
    if (e.target.value.length <= 20) {
      this.setState({ email: e.target.value });
      this.setState({ errEmail: "" });
      
    } else {
      this.setState({ errEmail: "8 character is max" });
      
    }
  };
  handleChangeCountry = e => {
    if (e.target.value.length <= 8) {
      this.setState({ country: e.target.value });
      this.setState({ errCountry: "" });
      
    } else {
      this.setState({ errCountry: "8 character is max" });
      
    }
  };
  handleChangePassword = e => {
    if (e.target.value.length <= 8) {
      this.setState({ password: e.target.value });
      this.setState({ errPassword: "" });
     
    } else {
      this.setState({ errPassword: "8 character is max" });
 
    }
  };

  handleOnSubmit = (e) => {

    e.preventDefault();
    var bodyFormData = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "telephone": this.state.telephone,
      "country": this.state.country,
      "email": this.state.email,
      "password": this.state.password
       
    }
    axios.post('http://localhost:8080/api/register', bodyFormData);

    this.setState({ errName: "" });
    this.setState({ errLastName: "" });
    this.setState({ errTelephone: "" });
    this.setState({ errCountry: "" });
    this.setState({ errEmail: "" });
    this.setState({ errPassword: "" });

    
    this.setState({ clicked: true });

    
  }


  render() {
    if (this.state.clicked === true) {
      return <Redirect to='/login' />
    }
    return (
      <div className="wrapper">
        <div className="column">
          <div className="main">
            <form onSubmit={this.handleOnSubmit}>
              <label for="firstName">First Name:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="firstName"
                onChange={this.handleChangeFirstName}
                value={this.state.firstName}
              />
              <br />
              {
                this.state.errFirstName !== '' ? <p>{this.state.errFirstName}</p> : null
              }

              <label for="lastName">Last Name:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="lastName" 
                onChange={this.handleChangeLastName}
                value={this.state.lastName}
              />
              <br />
              {
                this.state.errLastName !== '' ? <p>{this.state.errLastName}</p> : null
              }

              <label for="email">E-mail:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="email" 
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
              <br />
              {
                this.state.errEmail !== '' ? <p>{this.state.errEmail}</p> : null
              }

              <label for="telephone">Thelephone:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="telephone"
                onChange={this.handleChangeTelephone}
                value={this.state.telephone}
              />
              <br />
              {
                this.state.errTelephone !== '' ? <p>{this.state.errTelephone}</p> : null
              }

              <label for="country">Country:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="country"
                onChange={this.handleChangeCountry}
                value={this.state.country}
              />
              <br />
              {
                this.state.errCountry !== '' ? <p>{this.state.errCountry}</p> : null
              }

              <label for="pass">Password:</label>
              <input
                className="border-radius form-input"
                type="password"
                name="pass"
                onChange={this.handleChangePassword}
                value={this.state.password}
              />
              <br />
              {
                this.state.errPassword !== '' ? <p>{this.state.errPassword}</p> : null
              }

              <button className="border-radius button-solid" >REGISTER</button>
            </form>
          </div>
          <div className="text-holder">
            <p>
              Or if you alrady have account {" "} <NavLink exact to="/">login</NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default Register;
