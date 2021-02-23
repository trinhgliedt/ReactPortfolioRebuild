import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EquityX from "./../../../components/portfolio/Project/EquityX";
import Sunflowers from "./../../../components/portfolio/Project/Sunflowers";
import AQIMaps from "./../../../components/portfolio/Project/AQIMaps";
import LetsMeet from "./../../../components/portfolio/Project/LetsMeet";

const MyWork = () => {
  return (
    <div className="container">
      <h1 className="text-center main-title py-3">My work</h1>
      <div className="row justify-content-center">
        <EquityX />
        <Sunflowers />
        <AQIMaps />
        <LetsMeet />
      </div>
    </div>
  );
};

export default MyWork;
