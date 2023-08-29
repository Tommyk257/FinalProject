import React from "react";
import { Link } from "react-router-dom";
import { logoIcon } from "../icons/logo.js";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        {logoIcon()}
      </Link>
    </div>
  );
}

export default Logo;