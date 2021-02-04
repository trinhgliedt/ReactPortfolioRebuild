import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import AboutMe from "./pages/portfolio/AboutMe";
import Skills from "./pages/portfolio/Skills";
import MyWork from "./pages/portfolio/MyWork";
import Resume from "./pages/portfolio/Resume";
import ContactMe from "./pages/portfolio/ContactMe";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
