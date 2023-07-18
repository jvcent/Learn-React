import React, { Component } from "react";

// Stateless functional component (sfc shortcut)
// Using functions to define a component instead of a class
const NavBar = ({ totalCounters }) => {
  // always add props as parameter in func components
  // class components don't need parameter since they use <this> to specify
  // life cycle hooks can only be used with class components
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
          {/*using curly braces in argument destructures it, no need for prop */}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
