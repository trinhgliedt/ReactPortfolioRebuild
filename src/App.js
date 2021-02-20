import "./App.css";
import "./components/portfolio/Background/styles.css";
import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LegendaryCursor from "legendary-cursor";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import AboutMe from "./pages/portfolio/AboutMe/AboutMe";
import Skills from "./pages/portfolio/Skills/Skills";
import MyWork from "./pages/portfolio/MyWork/MyWork";
import Resume from "./pages/portfolio/Resume/Resume";
import ContactMe from "./pages/portfolio/ContactMe/ContactMe";

function App() {
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
      <div className="App p-0">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout {...{ activePage }}>
                <AboutMe {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/skills"
            render={() => (
              <MainLayout {...{ activePage }}>
                <Skills {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/work"
            render={() => (
              <MainLayout {...{ activePage }}>
                <MyWork {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/resume"
            render={() => (
              <MainLayout {...{ activePage }}>
                <Resume {...{ makeActivePage }} />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <MainLayout {...{ activePage }}>
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

export default App;
