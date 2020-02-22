import React, { useState, useContext } from "react";
import "./Projects.scss";

import { Pannel } from "./Pannel";
import { ThemeContext } from "../../context/ThemeContext";

export const Projects: React.FC = () => {
  const context = useContext(ThemeContext);

  const { theme } = context;

  const [projects] = useState([
    {
      title: "CIG",
      logo: "CIG logo",
      icons: ["Some", "icons", "here"],
      landing: "landingpage"
    },
    {
      title: "Monterey Mushrooms",
      logo: "MM logo",
      icons: ["Some", "icons", "here"],
      landing: "landingpage"
    },
    {
      title: "Smart Brain",
      logo: "SmartBrain logo",
      icons: ["Some", "icons", "here"],
      landing: "landingpage"
    }
  ]);

  return (
    <div className={`Container--Projects Container--Projects--${theme}`}>
      <React.Fragment>
        {projects.map(item => (
          <Pannel
            key={item.title}
            title={item.title}
            logo={item.logo}
            icons={item.icons}
            landing={item.landing}
          />
        ))}
      </React.Fragment>
    </div>
  );
};
