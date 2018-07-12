import React from "react";
import { Link } from "react-router-dom";
import "./FunctionComponents.css";

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Persona
    </Link>
  </nav>
);

