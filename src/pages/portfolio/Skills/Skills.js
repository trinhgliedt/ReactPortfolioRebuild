import React, { useEffect } from "react";
import "./styles.scss";

import react from "./../../../assets/portfolio/techIcons/React.png";
import nodeJS from "./../../../assets/portfolio/techIcons/nodejs.png";
import express from "./../../../assets/portfolio/techIcons/expressjs.png";
import mongoDB from "./../../../assets/portfolio/techIcons/mongodb.png";
import SQLite from "./../../../assets/portfolio/techIcons/sqlite.png";
import redux from "./../../../assets/portfolio/techIcons/redux.png";
import python from "./../../../assets/portfolio/techIcons/python.png";
import django from "./../../../assets/portfolio/techIcons/django.jpg";
import jQuery from "./../../../assets/portfolio/techIcons/jQuery.png";
import bootstrap from "./../../../assets/portfolio/techIcons/bootstrap.png";
import github from "./../../../assets/portfolio/techIcons/github.png";
import postman from "./../../../assets/portfolio/techIcons/postman.png";
import vsCode from "./../../../assets/portfolio/techIcons/VSCode.png";
import java from "./../../../assets/portfolio/techIcons/java.png";
import javascript from "./../../../assets/portfolio/techIcons/JavaScript.png";
import springBoot from "./../../../assets/portfolio/techIcons/SpringBoot.png";
import mySQL from "./../../../assets/portfolio/techIcons/mysql.png";
import aws from "./../../../assets/portfolio/techIcons/AWS.png";
import firebase from "./../../../assets/portfolio/techIcons/GoogleFirebase.png";
import html from "./../../../assets/portfolio/techIcons/HTML.png";
import css from "./../../../assets/portfolio/techIcons/CSS.png";
import materialUI from "./../../../assets/portfolio/techIcons/materialUI.png";

import Skill from "./../../../components/portfolio/Skill/Skill";
const sectionHeadStyle = "py-2 mt-3 sectionHead";
const sectionStyle = "row justify-content-center tilesWrap";

const Skills = () => {
  return (
    <div className="container">
      <h1 className="text-center main-title py-3">Technical Skills</h1>
      <h5 className={sectionHeadStyle}>Languages</h5>
      <div className={sectionStyle}>
        <Skill name="Javascript" icon={javascript} />
        <Skill name="Python" icon={python} />
        <Skill name="Java" icon={java} />
      </div>
      <h5 className={sectionHeadStyle}>Frameworks</h5>
      <div className={sectionStyle}>
        <Skill name="ReactJS" icon={react} />
        <Skill name="ExpressJS" icon={express} />
        <Skill name="Django" icon={django} />
        <Skill name="Spring Boot" icon={springBoot} />
      </div>
      <h5 className={sectionHeadStyle}>Databases</h5>
      <div className={sectionStyle}>
        <Skill name="MySQL" icon={mySQL} />
        <Skill name="SQLite" icon={SQLite} />
        <Skill name="MongoDB" icon={mongoDB} />
        <Skill name="Google Cloud DB" icon={firebase} />
      </div>
      <h5 className={sectionHeadStyle}>Cloud Services</h5>
      <div className={sectionStyle}>
        <Skill name="Google Firebase" icon={firebase} />
        <Skill name="Amazon Web Service" icon={aws} />
      </div>
      <h5 className={sectionHeadStyle}>Others</h5>
      <div className={sectionStyle}>
        <Skill name="Node.JS" icon={nodeJS} />
        <Skill name="Redux" icon={redux} />
        <Skill name="jQuery" icon={jQuery} />
        <Skill name="HTML" icon={html} />
        <Skill name="CSS" icon={css} />
        <Skill name="Bootstrap" icon={bootstrap} />
        <Skill name="Material UI" icon={materialUI} />
        <Skill name="Postman" icon={postman} />
        <Skill name="Git Hub" icon={github} />
        <Skill name="VS Code" icon={vsCode} />
      </div>
    </div>
  );
};

export default Skills;
