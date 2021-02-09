import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked, loggedIn }) => {
  let links;
  links = (
    <Ul mobile={mobile}>
      <NavItem mobile={mobile} clicked={clicked} link="/">
        About me
      </NavItem>
      <NavItem mobile={mobile} clicked={clicked} link="/skills">
        Skills
      </NavItem>
      <NavItem mobile={mobile} clicked={clicked} link="/work">
        My work
      </NavItem>
      <NavItem mobile={mobile} clicked={clicked} link="/resume">
        Resume
      </NavItem>
      <NavItem mobile={mobile} clicked={clicked} link="/contact">
        Contact me
      </NavItem>
    </Ul>
  );
  return <Nav mobile={mobile}>{links}</Nav>;
};

export default NavItems;
