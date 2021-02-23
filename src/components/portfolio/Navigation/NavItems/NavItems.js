import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  aboutMeIcon,
  skillsIcon,
  myWorkIcon,
  resumeIcon,
  contactMeIcon,
} from "../../../../assets/portfolio/bootstrapIcons/Icons";
import "./styles.scss";

const NavItems = ({ displayDirection, opened }) => {
  const activePage = useSelector((state) => state.page.activePage);
  const dispatch = useDispatch();
  var navLinks = [
    {
      title: "About me",
      path: "/",
      icon: aboutMeIcon,
      active: activePage === "" ? true : false,
    },
    {
      title: "Skills",
      path: "/skills",
      icon: skillsIcon,
      active: activePage === "skills" ? true : false,
    },
    {
      title: "My work",
      path: "/work",
      icon: myWorkIcon,
      active: activePage === "work" ? true : false,
    },
    {
      title: "Resume",
      path: "/resume",
      icon: resumeIcon,
      active: activePage === "resume" ? true : false,
    },
    {
      id: "contact",
      title: "Contact",
      path: "/contact",
      icon: contactMeIcon,
      active: activePage === "contact" ? true : false,
    },
  ];

  var containerStyles;
  if (displayDirection === "vertical" && opened === true) {
    containerStyles = "navItems d-block py-3 px-lg ";
  } else if (displayDirection === "vertical" && opened === false) {
    containerStyles = "d-none";
  } else {
    containerStyles = "navItems d-flex justify-content-between col-11";
  }
  const itemStyles =
    displayDirection === "vertical"
      ? "d-block text-center  "
      : "px-lg-4 px-md-3 d-flex align-items-end justify-content-center";

  const handleClick = (index) => {
    navLinks.forEach((link) => {
      link.active = false;
    });
    navLinks[index].active = true;
    const path = navLinks[index].path.slice(1);
    dispatch({ type: path });
  };
  return (
    <div className={containerStyles}>
      {navLinks.map((navItem, index) => {
        return (
          <Link
            className={
              "hover-effects py-2 " +
              itemStyles +
              (navItem.active && " borderLink")
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
