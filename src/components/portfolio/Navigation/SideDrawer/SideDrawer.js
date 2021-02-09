import React, { useState } from "react";
import logo from "../Logo/Logo";
import Hamburger from "./Hamburger";
import NavItems from "../NavItems/NavItems";
const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="container px-2 d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
      <div className="container d-flex justify-content-between p-0">
        {logo()}
        <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
      </div>
      <div className="container p-0">
        <NavItems displayDirection="vertical" opened={isOpened} />
      </div>
    </div>
  );
};

export default SideDrawer;
