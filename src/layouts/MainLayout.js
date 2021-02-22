import React from "react";
import NavigationBar from "../components/portfolio/Navigation/NavBar/NavBar";
import Footer from "../components/portfolio/Navigation/Footer/Footer";
import ScrollToTop from "./../components/reusable/ScrollToTop";

const MainLayout = ({ children, activePage }) => {
  return (
    <div className="pt-0 px-0">
      <ScrollToTop />
      <NavigationBar {...{ activePage }} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
