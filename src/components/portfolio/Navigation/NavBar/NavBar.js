import React from "react";

import logo from "./../Logo";
import NavItems from "./../../Navigation/NavItems/NavItems";
import SideDrawer from "./../SideDrawer/SideDrawer";
const NavigationBar = () => {
  return (
    <div>
      <div className="container justify-content-between d-none d-xs-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
        {logo()}
        <NavItems />
      </div>
      <SideDrawer />
    </div>
  );
};

export default NavigationBar;
