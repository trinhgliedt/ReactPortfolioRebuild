import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import mainPic from "./../../../assets/portfolio/mainPic.jpg";

// const mapState = ({ page }) => ({
//   activePage: page.activePage,
// });

const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="text-center main-title py-3"> About me </h1>
      <div className="row">
        <div className="col col-lg-8 col-md-12 px-lg-5 px-md-3 px-sm-2">
          <p>
            I am a solution seeker who fell in love with coding, and I have an
            undying curiosity about all things tech. I love tackling complex
            technical problems and devising elegant, efficient solutions that
            impact people’s everyday lives.
          </p>
          <p>
            I come from a non-traditional coding background. I have degrees in
            Environmental Engineering in Vietnam, and then moved to the United
            States to study Business. I’m also a CPA with an active license. I
            have spent the last 9 years in the accounting world, during which
            time I honed a meticulous and efficient approach to solving complex
            problems, as well as customer-facing and collaboration skills.
          </p>
          <p>
            I'm all about optimizing systems (another skill I developed while
            accounting!), so when I saw the opportunity at a prior job to
            eliminate a repetitive process and save the team a bunch of time, I
            jumped on it! I self-taught programming skills in Excel, and wrote a
            program that saved our team a ridiculous number of man hours.
          </p>
          <p>
            This was one of the experiences that helped me discover my passion
            for coding and start down the path to becoming a software developer.
            I joined Coding Dojo Bootcamp and have learned 3 full stacks within
            14 weeks (Python, MERN and Java). Coding Dojo is a highly
            collaborative learning environment where I built functional and
            responsive applications in dynamic, small-team settings.
          </p>
        </div>
        <div className="col-lg-4 d-md-none d-lg-flex flex-column justify-content-center">
          <img className="rounded" src={mainPic} width="100%" alt="main" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
