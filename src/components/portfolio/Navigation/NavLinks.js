import {
  aboutMeIcon,
  skillsIcon,
  myWorkIcon,
  resumeIcon,
  contactMeIcon,
} from "./Icons";

const NavLinks = [
  { title: "About me", path: "/", icon: aboutMeIcon },
  { title: "Skills", path: "/skills", icon: skillsIcon },
  { title: "My work", path: "/work", icon: myWorkIcon },
  { title: "Resume", path: "/resume", icon: resumeIcon },
  { title: "Contact", path: "/contact", icon: contactMeIcon },
];

// const NavLinks = [
//   { title: `About me`, path: `/`, icon: aboutMeIcon },
//   { title: `Skills`, path: `/skills`, icon: skillsIcon },
//   { title: `My work`, path: `/work`, icon: myWorkIcon },
//   { title: `Resume`, path: `/resume`, icon: resumeIcon },
//   { title: `Contact`, path: `/contact`, icon: contactMeIcon },
// ];
export default NavLinks;
