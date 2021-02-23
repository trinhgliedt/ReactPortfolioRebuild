import React from "react";

import ProjectCard from "./ProjectTemplate";
import equityXVideo from "./../../../assets/portfolio/projects/_4_equityX.mp4";

const EquityX = () => {
  return (
    <ProjectCard
      expanded={true}
      id="1"
      title="EquityX"
      imageLink={equityXVideo}
      description=" Helping companies and investors manage their cap tables, valuation, investments, and equity plans"
      technologies="React, Javascript, HTML, CSS"
      inspiration="Coming from business and accounting background, I have seen the need of having cap tables and cap valuation done correctly. A service such as EquityX would be of help for companies that want to delegate the work burden or need an expert advise."
      challenges="With the page acting like store front for a business, it took a bit of effort to figure out the right presentation of the elements on the page, and also to be sure that all elements fits nicely in different screen sizes."
      nextSteps="A lot more content can be added to the sub-pages. And it would be good to build dynamic theme for the user to choose based on their liking."
      collaborators={<p>None</p>}
      links={
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/trinhgliedt/equityX"
        >
          GitHub Repo
        </a>
      }
    />
  );
};

export default EquityX;
