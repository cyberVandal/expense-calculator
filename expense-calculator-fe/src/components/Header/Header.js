import React from "react";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="dashboard-header">
        <div className="buttons-holder">
          <NavLink className="nav-link" exact to="/products">
            {" "}
            <button className="button-ghost border-radius">PRODUCTS</button>
          </NavLink>
          <NavLink className="nav-link" exact to="/expenses">
            {" "}
            <button className="button-ghost border-radius">EXPENSES</button>
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

export default Header;
