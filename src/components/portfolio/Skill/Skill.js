import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <div className="mt-2 col-6 col-md-4 col-lg-3 text-center pb-3 px-0 ">
      <h4>{name}</h4>
      <img src={icon} width="30%" alt="skill icon" />
    </div>
  );
};
export default Skill;
