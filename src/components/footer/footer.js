import React from "react";
import styled from "styled-components";
import "./footer.css";

const Wrapper = styled.div`
  background-color: red;
`;

const Footer = () => (
  <div className="flex justify-center align-center w-full h-10 bg-grey">
    footer
  </div>
);

export default styled(Footer)`
  background-color: red;
`;
