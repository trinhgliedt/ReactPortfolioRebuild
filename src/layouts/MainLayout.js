import React from "react";
import NavigationBar from "../components/portfolio/Navigation/NavBar/NavBar";
import Footer from "../components/portfolio/Navigation/Footer/Footer";

const MainLayout = (props) => {
  return (
    <div className="pt-0 px-0">
      <NavigationBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
