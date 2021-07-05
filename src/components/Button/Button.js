import React from "react";
import "./Button.css";

function Button({ label, onClick }) {
  return (
    <div data-testid="button" className="button" onClick={onClick}>
      Hi {label}
    </div>
  );
}

export default Button;
