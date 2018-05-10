import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = props => {
  return (
    <header className="flex flex-col w-full">
      <span>Citizen window</span>
      <div className="icon-menu block absolute self-end" />
      <nav className="flex justify-center align-center w-full h-48 bg-green-light sm:hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/data">Data</Link>
        <Link to="/connect">Connect</Link>
      </nav>
    </header>
  );
};

export default Navbar;
