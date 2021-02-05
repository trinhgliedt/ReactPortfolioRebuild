import React from "react";
import { Link } from "react-router-dom";
import {
  aboutMeIcon,
  skillsIcon,
  myWorkIcon,
  resumeIcon,
  contactMeIcon,
} from "./../Icons";
import "./styles.scss";

const navLinks = [
  { title: "About me", path: "/", icon: aboutMeIcon },
  { title: "Skills", path: "/skills", icon: skillsIcon },
  { title: "My work", path: "/work", icon: myWorkIcon },
  { title: "Resume", path: "/resume", icon: resumeIcon },
  { title: "Contact", path: "/contact", icon: contactMeIcon },
];

const NavItems = ({ displayDirection, opened }) => {
  var containerStyles;
  if (displayDirection === "vertical" && opened === true) {
    containerStyles = "navItems d-block";
  } else if (displayDirection === "vertical" && opened === false) {
    containerStyles = "d-none";
  } else {
    containerStyles = "navItems d-flex justify-content-around col-11";
  }
  const itemStyles =
    displayDirection === "vertical"
      ? "py-2 d-block text-center"
      : "px-lg-4 px-md-3 d-flex align-items-end justify-content-center py-2";
  return (
    <div className={containerStyles}>
      {navLinks.map((navItem, index) => {
        return (
          <Link className={itemStyles} key={index} to={navItem.path}>
            {navItem.icon} {navItem.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
