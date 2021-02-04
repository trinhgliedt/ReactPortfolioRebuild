import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import myPic from "./../../../../assets/profileThumbnail.jpg";

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

const navLinkStyle =
  "px-lg-4 px-md-3 px-sm-3 d-flex align-items-end justify-content-center py-2";
const NavigationBar = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="/">
          <img className="rounded-circle" src={myPic} width="40px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto mr-0 col d-flex justify-content-around">
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
