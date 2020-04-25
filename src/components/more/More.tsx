import React, { useState, useEffect } from "react";
import "./More.scss";

import portrait from "../../images/me.jpg";

export const More: React.FC<NavBarProps> = ({ main, setMain }) => {
  const [activate, setActivate] = useState<boolean>(false);
  const [backArrow, setBackArrow] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setActivate(true);
    }, 1500);
  }, [activate]);

  return (
    <div className="Container--More">
      <div className={`home home--${activate ? "show" : "hide"}`}>
        <div
          className="homeArrow__container"
          onMouseOver={(): void => setBackArrow("back")}
          onMouseOut={(): void => setBackArrow("")}
          onClick={(): void => setMain(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`homeArrow homeArrow--${backArrow}`}
          >
            <polyline
              points="244 400 100 256 244 112"
              style={{
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              style={{
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
          </svg>
        </div>
        <div className="home__title">Home</div>
      </div>
      <div
        className={`name__container name__container--${
          activate ? "load" : "initial"
        }`}
      >
        <h1 className="name">Diego Vega</h1>
      </div>

      <img
        className={`portrait portrait--${activate ? "show" : "hide"}`}
        src={portrait}
        alt="self portrait"
      />

      <div className={`about about--${activate ? "show" : "hide"}`}>
        <div className="about__main">About Me</div>
      </div>
    </div>
  );
};
