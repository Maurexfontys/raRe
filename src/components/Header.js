import React from "react";
import styled from "styled-components";

import { colors, fontSizes } from "./Tokens";

import { Container } from "./Container";

import logo from "../assets/logo.svg";

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: #000000;
  top: 0;
  z-index: 1;

  .logo {
    position: relative;
    left: -66px;
    max-height: 207, 85px;
    max-width: 207, 85px;
    background-color: ${colors.black};
  }
  .circle {
    shape-outside: circle();
    clip-path: circle();
    align: center;
    width: 10px;
    margin-left: 0;
    background-color: ${colors.black};
  }
  .header {
    height: 7.5rem;
    display: flex;
    align-items: center;
    color: ${colors.white};
    position: relative;
    display: flex;
    flex: 1;
    margin: 0 2.5rem;

    > div {
      white-space: nowrap;
      margin: 0;
      display: flex;
      padding: 80px;
      font-family: Montserrat;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container valign="center" a>
        <div className="header">
          <div>Home</div>
          <div>Over Ons</div>
          <div>Services</div>
          <div className="circle">
            <img alt="logo" src={logo} className="logo" />
          </div>
          <div>Brouwerij</div>
          <div>Agenda</div>
          <div>Contact</div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export { Header };
