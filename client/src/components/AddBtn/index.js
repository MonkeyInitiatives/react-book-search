import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <a className="btn btn-success add-btn" {...props} role="button" tabIndex="0" href="/books">
      Save
    </a>
  );
}

export default AddBtn;
