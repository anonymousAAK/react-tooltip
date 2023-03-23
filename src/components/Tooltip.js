import React from "react";
import "./Tooltip.css";

const Tooltip = ({ children, position, content }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip-text tooltip-${position}`}>{content}</span>
    </div>
  );
};

export default Tooltip;
