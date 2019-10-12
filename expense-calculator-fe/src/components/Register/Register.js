import { React, Component } from "react";
import { NavLink } from 'react-router-dom';
import '../../css/Global.css';


class Register extends Component {
  state = {}

  getDate = () => {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }



  render() {
    return (
      <div className="wrapper">
        <div className="column">
          <div className="main">
            <form>
              <label for="firstName">First Name:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="firstName"
              />
              <br />
              <label for="lastName">Last Name:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="lastName"
              />
              <label for="email">E-mail:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="email"
              />
              <br />
              <label for="dateOfBirth">Date of Birth:</label>
              <input
                className="border-radius form-input"
                type="date"
                name="dateOfBirth"
              />
              <br />
              <label for="telephone">Thelephone:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="telephone"
              />
              <br />
              <label for="country">Country:</label>
              <input
                className="border-radius form-input"
                type="text"
                name="country"
              />
              <br />
              <label for="pass">Password:</label>
              <input
                className="border-radius form-input"
                type="password"
                name="pass"
              />
              <br />
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
