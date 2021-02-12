import React from "react";
import "./styles.scss";
import resumePic from "../../../assets/portfolio/resumePic.jpg";
import {
  phoneIcon,
  emailIcon,
  websiteIcon,
  addressIcon,
} from "../../../components/portfolio/Resume/ResumeIcons";

import dojoLogo from "../../../assets/portfolio/resume/dojoLogo.png";
import npuLogo from "../../../assets/portfolio/resume/npuLogo.png";
import hutechLogo from "../../../assets/portfolio/resume/hutechLogo.png";

const Resume = () => {
  return (
    <div className="container">
      <h1 className="main-title text-center">Resume</h1>
      <div className="resumeWrap">
        <div className="resume">
          <div className="resumeLeft">
            <div className="d-flex justify-content-center mb-0">
              <img className="myPic" src={resumePic} width="60%" alt="resume" />
            </div>
            <p className="sectionTitle">CONTACT</p>
            <div className="contactRow">
              {phoneIcon}
              <span className="col-10">+1 (510) 396-6601</span>
            </div>
            <div className="contactRow">
              {emailIcon}
              <span className="col-10">chuot2008@gmail.com</span>
            </div>
            <div className="contactRow">
              {websiteIcon}
              <span className="col-10">http://trinhgliedt.com/</span>
            </div>
            <div className="contactRow">
              {addressIcon}
              <span className="col-10">Fremont, CA, USA</span>
            </div>
            <p className="sectionTitle">EDUCATION</p>
            <div className="eduSection">
              <p className="font-weight-bold eduRow1">
                <img src={dojoLogo} alt="dojo logo" width="10%" />
                <span className="eduRow1-2">
                  <span>Coding Dojo</span>
                  <span>2020</span>
                </span>
              </p>
              <p className="ml-3">Bootcamp Certificate</p>
            </div>
            <div className="eduSection">
              <p className="font-weight-bold eduRow1">
                <span className="imgWrap">
                  <img src={npuLogo} alt="dojo logo" width="100%" />
                </span>

                <span className="eduRow1-2">
                  <span>Northwestern Polytechnic University</span>
                  <span className="yearWrap">
                    <span>2010</span>
                  </span>
                </span>
              </p>
              <p className="ml-3">Master of Business Administration</p>
            </div>
            <div className="eduRow">
              <p className="font-weight-bold">
                Northwestern Polytechnic University
                <span>2010</span>
              </p>
              <p className="ml-3">Master of Business Administration</p>
            </div>
            <div className="eduRow">
              <p className="font-weight-bold">
                Ho Chi Minh University of Technology
                <span>2007</span>
              </p>
              <p className="ml-3">BS Environmental Engineering</p>
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
