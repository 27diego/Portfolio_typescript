import React, { useState } from "react";
import "./Projects.scss";

export const Projects: React.FC = () => {
  const [expand, setExpand] = useState(false);
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
    <div className="Container--Projects">
      <React.Fragment>
        {projects.map(item => {
          return (
            <div
              className={`project project--${item.title
                .replace(/\s/g, "")
                .toLocaleLowerCase()}`}
            >
              <div className="project__title">{item.title}</div>
            </div>
          );
        })}
      </React.Fragment>
    </div>
  );
};
