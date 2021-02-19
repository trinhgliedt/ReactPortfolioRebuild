import React from "react";

import logo from "../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import SideDrawer from "../SideDrawer/SideDrawer";
import "./styles.scss";

const NavigationBar = ({ activePage }) => {
  return (
    <div className="sticky">
      <div className="container p-0 justify-content-between d-none d-xs-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
        {logo()}
        <NavItems {...{ activePage }} />
      </div>
      <SideDrawer />
    </div>
  );
};

export default NavigationBar;
