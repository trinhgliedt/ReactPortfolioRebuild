import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import resumePic from "../../../assets/portfolio/resume/resumePic.jpg";
import wordResume from "../../../assets/portfolio/resume/TrinhGliedt_Resume.docx";
import pdfResume from "../../../assets/portfolio/resume/TrinhGliedt_Resume.pdf";
import pdfLogo from "../../../assets/portfolio/resume/download/pdfLogo.png";
import wordLogo from "../../../assets/portfolio/resume/download/wordLogo.png";

import {
  phoneIcon,
  emailIcon,
  websiteIcon,
  addressIcon,
} from "../../../components/portfolio/Resume/ResumeIcons";

import dojoLogo from "../../../assets/portfolio/resume/schools/dojoLogo.png";
import npuLogo from "../../../assets/portfolio/resume/schools/npuLogo.png";
import hutechLogo from "../../../assets/portfolio/resume/schools/hutechLogo.png";
import VerticalTimeLine from "../../../components/portfolio/Resume/Timeline";

const Contact = ({ icon, detail }) => {
  return (
    <div className="contactRow">
      {icon}
      <span className="col-10">{detail}</span>
    </div>
  );
};
const Education = ({ schoolLogo, schoolName, year, certName }) => {
  return (
    <div className="eduSection">
      <p className="font-weight-bold eduRow1">
        <span className="eduRow1-1">
          <img src={schoolLogo} alt="school logo" width="100%" />
        </span>
        <span className="eduRow1-2">
          <span className="schoolName">{schoolName}</span>
          <span>{year}</span>
        </span>
      </p>
      <p className="eduRow2">{certName}</p>
    </div>
  );
};

const Resume = () => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, (isOpened) => setIsOpened(false));

  return (
    <div className="container">
      <h1 className="main-title text-center">Resume</h1>
      <div className="resumeWrap">
        <div className="btnWrap">
          <button
            className="downloadBtn blinkBg"
            onClick={(e) => setIsOpened(true)}
          >
            Download full resume
          </button>
          <div id="hoverMenuWrap">
            {isOpened && (
              <div id="hoverMenu" ref={ref}>
                <a href={pdfResume} download="resumeFile.pdf">
                  <img src={pdfLogo} alt="pdf Logo" width="10%" />
                  pdf
                </a>
                <a href={wordResume} download="resumeFile.docx">
                  <img src={wordLogo} alt="word Logo" width="10%" />
                  word
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="resume">
          <div className="resumeLeft">
            <div className="d-flex justify-content-center mb-0">
              <img className="myPic" src={resumePic} width="60%" alt="resume" />
            </div>
            <p className="sectionTitle">CONTACT</p>
            <Contact icon={phoneIcon} detail="+1 (510) 396-6601" />
            <Contact icon={emailIcon} detail="chuot2008@gmail.com" />
            <Contact icon={websiteIcon} detail="http://trinhgliedt.com/" />
            <Contact icon={addressIcon} detail="Fremont, CA, USA" />
            <p className="sectionTitle">EDUCATION</p>

            <Education
              schoolLogo={dojoLogo}
              schoolName="Coding Dojo"
              year="2020"
              certName="Bootcamp Certificate"
            />
            <Education
              schoolLogo={npuLogo}
              schoolName="Northwestern Polytechnic University"
              year="2010"
              certName="Master of Business Administration"
            />
            <Education
              schoolLogo={hutechLogo}
              schoolName="Ho Chi Minh University of Technology"
              year="2007"
              certName="Master of Business Administration"
            />
          </div>

          <div className="resumeRight">
            <h5 className="">Trinh Gliedt</h5>
            <h6>Resume</h6>
            <VerticalTimeLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}
