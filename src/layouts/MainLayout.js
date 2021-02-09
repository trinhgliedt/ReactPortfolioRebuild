import React from "react";
import NavigationBar from "../components/portfolio/Navigation/NavBar/NavBar";

const MainLayout = (props) => {
  return (
    <div className="pt-3 px-0">
      <NavigationBar />
      {props.children}
    </div>
  );
};

export default MainLayout;
