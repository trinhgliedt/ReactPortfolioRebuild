import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <div className="skillCard col-6 col-md-4 col-lg-3 text-center px-0">
      <h5>{name}</h5>
      <img className="mt-2" src={icon} width="30%" alt="skill icon" />
    </div>
  );
};
export default Skill;
