import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Header({ location: { hash } }) {
  return (
    <HeaderContainer>
      <List>
        <Item>
          <NavLink
            to="/#Home"
            activeClassName="selected"
            activeStyle={{ borderBottom: "2px solid #3498db" }}
            smooth
          >
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/#More"
            activeClassName="selected"
            activeStyle={{ borderBottom: "2px solid #3498db" }}
            smooth
          >
            More
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/#Contact"
            activeClassName="selected"
            activeStyle={{ borderBottom: "2px solid #3498db" }}
            smooth
          >
            Contact
          </NavLink>
        </Item>
      </List>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  color: whtie;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 10;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    height: 45px;
  }
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    height: 45px;
  }
`;

const NavLink = styled(NavHashLink)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 45px;
  }
`;

export default withRouter(Header);
