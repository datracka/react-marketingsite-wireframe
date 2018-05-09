import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #fff;
  /* background-color: #5995da; /* Blue */
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const NavBar = props => {
  return (
    <Wrapper>
      <nav className={`foo ${props.className}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/data">Data</Link>
        <Link to="/connect">Connect</Link>
      </nav>
    </Wrapper>
  );
};

export default styled(NavBar)`
  border: 1px solid #fff; /* For debugging */
  width: 400px;
  display: flex;
  justify-content: space-around;
`;
