import React from "react";
import "./styles.scss";
import resumePic from "../../../assets/portfolio/resumePic.jpg";
import { phoneIcon } from "../../../components/portfolio/Resume/ResumeIcons";

const Resume = () => {
  return (
    <div className="container">
      <h1 className="main-title text-center">Resume</h1>
      <div className="resumeWrap">
        <div className="resume">
          <div className="resumeLeft">
            <div className="d-flex justify-content-center mb-3">
              <img src={resumePic} width="60%" alt="resume" />
            </div>
            <p className="sectionTitle">CONTACT</p>
            <div className="">
              {phoneIcon}
              <span className="col-10">+1 (510) 396-6601</span>
            </div>
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
