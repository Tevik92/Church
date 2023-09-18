import React from "react";
import { headerData } from "./headerData";

const Header = (props) => {
  return (
    <div>
      {headerData.map((elem, index) => (
        <span key={index}>{elem.title}</span>
      ))}
      <p>hello</p>
    </div>
  );
};

export default Header;
