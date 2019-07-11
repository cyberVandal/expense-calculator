import React from "react";
import "../../css/Global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditDeleteIcon(props) {
  return (
    <>
      <span className="edit-trash">
        <FontAwesomeIcon icon="edit" />
      </span>
      <span
        className="edit-trash"
        style={{ marginLeft: "10px" }}
        onClick={props.click}
      >
        <FontAwesomeIcon icon="trash-alt" />
      </span>
    </>
  );
}

export default EditDeleteIcon;
