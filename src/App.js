import "./components/portfolio/Background/colorBlinkStyles.css";
import "./components/portfolio/Background/bgStyles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/App.scss";

import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ScrollToTop from "./components/reusable/ScrollToTop";

import LegendaryCursor from "legendary-cursor";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import AboutMe from "./pages/portfolio/AboutMe/AboutMe";
import Skills from "./pages/portfolio/Skills/Skills";
import MyWork from "./pages/portfolio/MyWork/MyWork";
import Resume from "./pages/portfolio/Resume/Resume";
import ContactMe from "./pages/portfolio/ContactMe/ContactMe";

function App(props) {
  window.addEventListener("load", () => {
    LegendaryCursor.init();
  });
  const [activePage, setActivePage] = useState("");
  const makeActivePage = (activePage) => {
    setActivePage(activePage);
  };

  return (
    <>
      <div className="color-Bg blinkBg"></div>
      <div className="polygon-Bg"></div>
      <div className="App p-0" id="App">
        <ScrollToTop />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout>
                <AboutMe />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/skills"
            render={() => (
              <MainLayout>
                <Skills {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/work"
            render={() => (
              <MainLayout>
                <MyWork {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/resume"
            render={() => (
              <MainLayout>
                <Resume {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <MainLayout>
                <ContactMe {...{ makeActivePage }} />
              </MainLayout>
            )}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}
const mapStateToProps = ({ page }) => ({
  activePage: page.activePage,
});
export default connect(mapStateToProps, null)(App);
