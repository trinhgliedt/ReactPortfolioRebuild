import React from "react";

import react from "./../../../assets/techIcons/React.png";
import nodeJS from "./../../../assets/techIcons/nodejs.png";
import express from "./../../../assets/techIcons/expressjs.png";
import mongoDB from "./../../../assets/techIcons/mongodb.png";
import SQLite from "./../../../assets/techIcons/sqlite.png";
import redux from "./../../../assets/techIcons/redux.png";
import python from "./../../../assets/techIcons/python.png";
import django from "./../../../assets/techIcons/django.png";
import jQuery from "./../../../assets/techIcons/jQuery.png";
import bootstrap from "./../../../assets/techIcons/bootstrap.png";
import github from "./../../../assets/techIcons/github.png";
import postman from "./../../../assets/techIcons/postman.png";
import vsCode from "./../../../assets/techIcons/VSCode.png";
import java from "./../../../assets/techIcons/java.png";
import javascript from "./../../../assets/techIcons/JavaScript.png";
import springBoot from "./../../../assets/techIcons/SpringBoot.png";
import mySQL from "./../../../assets/techIcons/mysql.png";
import aws from "./../../../assets/techIcons/AWS.png";
import firebase from "./../../../assets/techIcons/GoogleFirebase.png";
import html from "./../../../assets/techIcons/HTML.png";
import css from "./../../../assets/techIcons/CSS.png";
import materialUI from "./../../../assets/techIcons/materialUI.png";

import Skill from "./../../../components/portfolio/Skill/Skill";
const sectionHeadStyle = "text-center bg-success rounded py-2 mt-3";

const Skills = () => {
  return (
    <div className="container">
      <h1 className="text-center main-title py-3">Technical Skills</h1>
      <h3 className={sectionHeadStyle}>Languages</h3>
      <div className="row">
        <Skill name="Javascript" icon={javascript} />
        <Skill name="Python" icon={python} />
        <Skill name="Java" icon={java} />
      </div>
      <h3 className={sectionHeadStyle}>Frameworks</h3>
      <div className="row">
        <Skill name="ReactJS" icon={react} />
        <Skill name="ExpressJS" icon={express} />
        <Skill name="Django" icon={django} />
        <Skill name="Spring Boot" icon={springBoot} />
      </div>
      <h3 className={sectionHeadStyle}>Databases</h3>
      <div className="row">
        <Skill name="MySQL" icon={mySQL} />
        <Skill name="SQLite" icon={SQLite} />
        <Skill name="MongoDB" icon={mongoDB} />
        <Skill name="Google Cloud DB" icon={firebase} />
      </div>
      <h3 className={sectionHeadStyle}>Cloud Services</h3>
      <div className="row">
        <Skill name="Google Firebase" icon={firebase} />
        <Skill name="Amazon Web Service" icon={aws} />
      </div>
      <h3 className={sectionHeadStyle}>Others</h3>
      <div className="row">
        <Skill name="Node.JS" icon={nodeJS} />
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
