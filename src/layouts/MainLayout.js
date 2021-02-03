import React from "react";

const MainLayout = (props) => {
  return (
    <div>
      <h1>Main Layout</h1>
      {props.children}
    </div>
  );
};

export default MainLayout;
