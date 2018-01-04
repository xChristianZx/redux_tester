import React from "react";
import Proptypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onclick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;