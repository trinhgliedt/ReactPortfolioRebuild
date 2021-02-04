import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// icons
import {
  homeIcon,
  aboutMeIcon,
  skillsIcon,
  myWorkIcon,
  resumeIcon,
  contactMeIcon,
  iconWrap,
} from "./../Icons";

const navLinkStyle = "px-lg-5 px-md-4 d-flex align-items-end py-2";
const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="/">{homeIcon()}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={navLinkStyle} href="/">
              {iconWrap(aboutMeIcon())} About Me
            </Nav.Link>
            <Nav.Link className={navLinkStyle} href="/skills">
              {iconWrap(skillsIcon())} Skills
            </Nav.Link>
            <Nav.Link className={navLinkStyle} href="/work">
              {iconWrap(myWorkIcon())} My Work
            </Nav.Link>
            <Nav.Link className={navLinkStyle} href="/resume">
              {iconWrap(resumeIcon())} Resume
            </Nav.Link>
            <Nav.Link className={navLinkStyle} href="/contact">
              {iconWrap(contactMeIcon())} Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
