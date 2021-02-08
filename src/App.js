import "./App.css";
import React from "react";
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

  return (
    <>
      <div className="App p-0">
        <Switch style={{ position: "relative", zIndex: "2" }}>
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
                <Skills />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/work"
            render={() => (
              <MainLayout>
                <MyWork />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/resume"
            render={() => (
              <MainLayout>
                <Resume />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <MainLayout>
                <ContactMe />
              </MainLayout>
            )}
          />

          <Redirect to="/" />
        </Switch>
      </div>
      <div className="polygon-Bg"></div>
      <div className="color-Bg"></div>
    </>
  );
}

export default App;
