import React from "react";
import "../../css/Global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditDeleteIcon(props) {
  return (
    <>
      <span>
        <FontAwesomeIcon icon="edit" />
      </span>
      <span style={{ marginLeft: "10px" }} onClick={props.click}>
        <FontAwesomeIcon icon="trash-alt" />
      </span>
    </>
  );
}

export default EditDeleteIcon;
