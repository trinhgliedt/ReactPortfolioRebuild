import React from "react";

import ProjectCard from "./ProjectTemplate";
import aqiMapVideo from "./../../../assets/portfolio/projects/_2_AQIMap.mp4";

const AQIMaps = () => {
  return (
    <ProjectCard
      id="3"
      title="AQI Maps"
      imageLink={aqiMapVideo}
      description="A single page application displaying real time Air Quality Index on Google Maps"
      technologies="Javascript, React, Express, API, HTML, CSS"
      inspiration="With the recent wildfires in the West Coast, we wanted to build an app so that user can have easy access to real time air quality index (AQI) which can help them arrange their outdoor activity accordingly. This application could detect user's current location and, upon their consent, display the maps for their location. Users could also search to view the AQI for a specific location, or for the whole U.S. and filter to the relevant AQI value that they want to see."
      challenges="One of our challenges was to integrate the two layers of API, one from World Air Quality Index API and one from GoogleMaps API, to ensure the information is displayed correctly."
      nextSteps="More API calls could be made from World Air Quality Index for the forecast air quality index value."
      collaborators={
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/howard-shin/"
          >
            Howard Shin
          </a>
        </p>
      }
      links={
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SHJoon/AQI-Maps"
        >
          GitHub Repo
        </a>
      }
    />
  );
};

export default AQIMaps;
