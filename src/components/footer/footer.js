import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: red;
`;

const Footer = () => <div>footer3</div>;

export default styled(Footer)`
  background-color: red;
`;
