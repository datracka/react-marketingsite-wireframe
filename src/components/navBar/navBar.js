import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = props => {
  return (
    <section className="navBar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/data">Data</Link>
        <Link to="/connect">Connect</Link>
      </nav>
    </section>
  );
};

export default Navbar;
