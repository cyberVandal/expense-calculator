import React from "react";
import "../../css/Global.css";
import { NavLink } from "react-router-dom";

function SelectorMonthly() {
  return (
    <>
      <label className="margin-left">Choose Month</label>
      <select className="border-radius">
        <option value="volvo">Day</option>
        <option value="saab">Mounth</option>
        <option value="opel">Year</option>
      </select>
    </>
  );
}

export default SelectorMonthly;
