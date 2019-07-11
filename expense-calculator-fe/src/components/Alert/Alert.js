import React from "react";
import "../../css/Global.css";

function Alert(props) {
  return (
    <div className="alert">
      <div className="alert-message">
        <h2>Delete Product</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          eligendi at iusto vel numquam voluptatem odit modi maiores recusandae
          accusantium.
        </p>
        <div className="alert-button-holder">
          <button
            class="delete-button-cancel border-radius"
            onClick={() => props.clickStatus(0)}
          >
            CANCEL
          </button>
          <button
            className="delete-button-delete border-radius"
            onClick={() => props.clickDelete(props.id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
