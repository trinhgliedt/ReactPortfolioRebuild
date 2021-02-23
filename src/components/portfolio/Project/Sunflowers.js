import React from "react";

import ProjectCard from "./ProjectTemplate";
import sunflowersVideo from "./../../../assets/portfolio/projects/_1_Django_Ecommerce.mp4";

const Sunflowers = () => {
  return (
    <ProjectCard
      id="2"
      title="Sunflowers"
      projectUrl="http://18.191.91.140/"
      imageLink={sunflowersVideo}
      description="Easy fashion shopping from the comfort of your home - You want it: You've got it!"
      technologies="Python, Django MVC, Javascript, HTML, CSS, Bootstrap"
      inspiration="I love the convenience of being able to browse and shop for clothes from the comfort of your home, and I also think eCommerce sites are widely needed by many businesses. Both of those reasons had me want to try building this site for our Python stack coding boot camp project.  We used Python, HTML, CSS for front-end and Django framework for back-end. We also utilized Django Admin function to upload product photos and product details."
      challenges="One of the biggest challenges was figuring out the best relationship structure between different objects so that information will be reflected properly. We have documented our thought process in the relevant files to make it easy for code viewer to understand."
      nextSteps="More functionalities can be added so that owner of the shop can add and update inventory, add cash to the business and view a simple set of the financial operation reports. For sales tax, an API call can be made so that the sales tax rate can be updated automatically based on the customer's address."
      collaborators={
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/howard-shin/"
          >
            Howard Shin
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/madhuri-ravuri/"
          >
            Madhuri Ravuri
          </a>
        </p>
      }
      links={
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/trinhgliedt/Ecommerce_Django_Project"
        >
          GitHub Repo
        </a>
      }
    />
  );
};

export default Sunflowers;
