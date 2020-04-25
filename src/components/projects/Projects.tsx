import React, { useState, useContext } from "react";
import "./Projects.scss";

// import MMLogo from "../../images/MMlogo.png";
import sopIndex from "../../images/sopIndex.png";

import smartbrain from "../../images/smart-brain.png";
import brain from "../../images/brand logos/brain.svg";

import CIGLanding from "../../images/cig.png";

//logos
import react from "../../images/brand logos/Front end/React-icon.svg";
import redux from "../../images/brand logos/Front end/redux.svg";
import typescript from "../../images/brand logos/Front end/typescript.svg";
import js from "../../images/brand logos/Front end/javascript.svg";
import css from "../../images/brand logos/Front end/css3.svg";
import scss from "../../images/brand logos/Front end/sass.svg";

import node from "../../images/brand logos/Back end/node-dot-js.svg";
import mongo from "../../images/brand logos/Back end/mongodb.svg";
import postgresql from "../../images/brand logos/Back end/postgresql.svg";
import docker from "../../images/brand logos/Back end/docker.svg";
import redis from "../../images/brand logos/Back end/redis.svg";

import { Pannel } from "./Pannel";
import { ThemeContext } from "../../context/ThemeContext";

export const Projects: React.FC = () => {
  const context = useContext(ThemeContext);

  const { theme } = context;

  const [projects] = useState([
    {
      title: "Smart Brain",
      logo: brain,
      options: {
        width: "",
      },
      icons: [react, js, css, node, postgresql, redis],
      landing: smartbrain,
      link: "https://github.com/27diego/smart-brain-front",
    },
    {
      title: "Monterey Mushrooms",
      logo: "",
      landing: sopIndex,
      icons: [react, redux, typescript, scss, node, mongo, docker],
      link: "https://github.com/27diego/MM-index",
    },

    {
      title: "CIG",
      logo: "",
      landing: CIGLanding,
      icons: [react, redux, css, node, mongo, redis],
      link: "https://github.com/27diego/CapStone-Backend",
    },
  ]);

  return (
    <div className={`Container--Projects Container--Projects--${theme}`}>
      <div className="projects">
        {projects.map((item) => (
          <Pannel
            key={item.title}
            title={item.title}
            logo={item.logo}
            options={item.options}
            icons={item.icons}
            landing={item.landing}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
