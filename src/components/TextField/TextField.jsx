import React from "react";

function TextField({ label, ...props }) {
  return (
    <div className="textfield-wrapper">
      <div className="textfield-data">
        <input type="text" {...props} required />
        <div className="underline"></div>
        <label>{label}</label>
      </div>
    </div>
  );
}

export default TextField;
