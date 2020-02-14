import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-width mx-auto my-4 alert-${type}`}>{text}</div>
  );
};

export default Alert;
