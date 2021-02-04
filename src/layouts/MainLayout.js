import React from "react";
import NavigationBar from "./../components/portfolio/Navigation/NavBar/NavBar";

const MainLayout = (props) => {
  return (
    <div>
      <NavigationBar />
      {props.children}
    </div>
  );
};

export default MainLayout;
