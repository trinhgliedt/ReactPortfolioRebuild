import React from "react";

import ProjectCard from "./ProjectTemplate";
import letsMeetVideo from "./../../../assets/portfolio/projects/_3_Let_Meet.mp4";

const LetsMeet = () => {
  return (
    <ProjectCard
      id="4"
      title="Let's Meet"
      imageLink={letsMeetVideo}
      description="A event organization tool that helps connect people with mutual interests"
      technologies="Java, SpringBoot, MAMP, MySQL, HTML, CSS"
      inspiration="I have enjoyed utilizing event organizer apps such as Meetup.com and Facebook Groups, and wanted to rebuild a similar tool to enable people with multure interests to connect."
      challenges="We were lucky to be smooth sailing with the project. Implementing Spring Authorization took a bit to figured out, and we were able to set clear control on which pages a user can access if they didn't log in."
      nextSteps="It would be great to have Web Socket implemented on the comment page so that the users do not need to refresh the page to see new comments."
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
          </a>{" "}
        </p>
      }
      links={
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/trinhgliedt/Let_s_Meet_Java_Project"
        >
          GitHub Repo
        </a>
      }
    />
  );
};

export default LetsMeet;
