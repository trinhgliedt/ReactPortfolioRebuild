import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  aboutMeIcon,
  skillsIcon,
  myWorkIcon,
  resumeIcon,
  contactMeIcon,
} from "./../Icons";
import "./styles.scss";

var navLinks = [
  { title: "About me", path: "/", icon: aboutMeIcon, active: true },
  { title: "Skills", path: "/skills", icon: skillsIcon, active: false },
  { title: "My work", path: "/work", icon: myWorkIcon, active: false },
  { title: "Resume", path: "/resume", icon: resumeIcon, active: false },
  { title: "Contact", path: "/contact", icon: contactMeIcon, active: false },
];

const NavItems = ({ displayDirection, opened }) => {
  var containerStyles;
  if (displayDirection === "vertical" && opened === true) {
    containerStyles = "navItems d-block py-3";
  } else if (displayDirection === "vertical" && opened === false) {
    containerStyles = "d-none";
  } else {
    containerStyles = "navItems d-flex justify-content-between col-11";
  }

  useEffect(() => {});
  const itemStyles =
    displayDirection === "vertical"
      ? "d-block text-center"
      : "px-lg-4 px-md-3 d-flex align-items-end justify-content-center ";

  const handleClick = (index) => {
    navLinks.map((link) => {
      link.active = false;
      return link;
    });
    navLinks[index].active = true;
  };
  return (
    <div className={containerStyles}>
      {navLinks.map((navItem, index) => {
        return (
          <Link
            className={
              "hover-effects py-2 " +
              itemStyles +
              (navItem.active && " text-success")
            }
            key={index}
            to={navItem.path}
            onClick={(e) => handleClick(index)}
          >
            {navItem.icon} {navItem.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
