import React from "react";
import "./styles.scss";
import resumePic from "../../../assets/portfolio/resumePic.jpg";

const Resume = () => {
  return (
    <div className="container">
      <h1 className="main-title text-center">Resume</h1>
      <div className="resumeWrap d-flex justify-content-center">
        <div className="resume">
          <div className="resumeLeft">
            <img src={resumePic} width="60%" alt="resume" />
          </div>
          <div className="resumeRight">
            <h5 className="">Trinh Gliedt</h5>
            <h6>Resume</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
