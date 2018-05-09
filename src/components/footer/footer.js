import React from "react";
import styled from "styled-components";
import "./footer.css";

const Wrapper = styled.div`
  background-color: red;
`;

const Footer = () => <div className="footer">footer</div>;

export default styled(Footer)`
  background-color: red;
`;
