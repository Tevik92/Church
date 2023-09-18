import React, { useState } from "react";
import "./Lamps.css";

const Lamps = (props) => {
  const [isOnfirstLamp, setIsOnFirstLamp] = useState(false);
  const [isOnSecondLamp, setIsOnSecondLamp] = useState(false);

  return (
    <div className="parent">
      <div
        onClick={() => {
          setIsOnSecondLamp(!isOnSecondLamp);
        }}
        className={isOnfirstLamp ? "child bg-green" : "child"}
      >
        {isOnfirstLamp.toString()}{" "}
      </div>
      <div
        onClick={() => {
          setIsOnFirstLamp(!isOnfirstLamp);
        }}
        className={isOnSecondLamp ? "child bg-green" : "child"}
      >
        {isOnSecondLamp.toString()}{" "}
      </div>
      {isOnSecondLamp && isOnfirstLamp && (
        <button
          onClick={() => {
            setIsOnSecondLamp(false);
            setIsOnFirstLamp(false);
          }}
        >
          ???
        </button>
      )}
    </div>
  );
};

export default Lamps;
