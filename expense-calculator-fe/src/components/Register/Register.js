import React from "react";
import {NavLink} from 'react-router-dom';
import classes from "./Register.module.css";

function Register() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.column}>
        <div className={classes.main}>
          <form>
            <label for="email">First Name:</label>
            <input   
                className={`${classes.borderRadius} ${classes.formInput}`} 
                type="text" 
                name="firstName" 
            />
             <br />
            <label for="lastName">Last Name:</label>
            <input  
                className={`${classes.borderRadius} ${classes.formInput}`} 
                type="text" 
                name="lastName" 
            />
            <label for="email">E-mail:</label>
            <input
              className={`${classes.borderRadius} ${classes.formInput}`}
              type="text"
              name="email"
            />
            <br />
            <label for="dateOfBirth">Date of Birth:</label>
            <input 
                className={`${classes.borderRadius} ${classes.formInput}`} 
                type="text" 
                name="dateOfBirth"
             />
            <br /> 
            <label for="telephone">Thelephone:</label>
            <input 
                className={`${classes.borderRadius} ${classes.formInput}`} 
                type="text" 
                name="telephone" 
            />
            <br /> 
            <label for="country">Country:</label>
            <input 
                className={`${classes.borderRadius} ${classes.formInput}`} 
                type="text" 
                name="country" 
            />
            <br />
            <label for="pass">Password:</label>           
            <input
              className={`${classes.borderRadius} ${classes.formInput}`}
              type="password"
              name="pass"
            />
            <br />
            <button className={`${classes.borderRadius} ${classes.buttonSolid}`} >REGISTER</button>
          </form>
        </div>
        <div className={classes.textHolder}>
                <p>
                     Or if you alrady have account {" "} <NavLink  exact  to="/">login</NavLink>         
                </p>
            </div>
        </div>
    </div>
  );
}

export default Register;
