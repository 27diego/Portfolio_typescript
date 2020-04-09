import React, { useState, useContext } from "react";
import "./Projects.scss";

import MMLogo from "../../images/MMlogo.png";
import sopIndex from "../../images/sopIndex.png";

//logos
import react from "../../images/brand logos/Front end/React-icon.svg";
import redux from "../../images/brand logos/Front end/redux.svg";
import typescript from "../../images/brand logos/Front end/typescript.svg";
import docker from "../../images/brand logos/Back end/docker.svg";
import node from "../../images/brand logos/Back end/node-dot-js.svg";
import mongo from "../../images/brand logos/Back end/mongodb.svg";

import { Pannel } from "./Pannel";
import { ThemeContext } from "../../context/ThemeContext";

export const Projects: React.FC = () => {
  const context = useContext(ThemeContext);

  const { theme } = context;

  const [projects] = useState([
    {
      title: "CIG",
      logo: "CIG logo",
      landing: "landingpage",
      icons: [],
      link: "",
    },
    {
      title: "Monterey Mushrooms",
      logo: MMLogo,
      landing: sopIndex,
      icons: [react, redux, typescript, docker, node, mongo],
      link: "https://github.com/27diego/MM-index",
    },
    {
      title: "Smart Brain",
      logo: "SmartBrain logo",
      icons: ["Some", "icons", "here"],
      landing: "landingpage",
      link: "",
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
            icons={item.icons}
            landing={item.landing}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
