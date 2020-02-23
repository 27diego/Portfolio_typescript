import React, { useState } from "react";
import "./Course.scss";

interface PROPS {
  title: string;
  icon: string;
  description: string;
}

export const Course: React.FC<PROPS> = ({ title, icon, description }) => {
  const [expand, setExpand] = useState(false);

  const makeExpand = () => {
    setExpand(!expand);
  };
  return (
    <div onMouseLeave={makeExpand} className="Container--Course">
      {expand ? (
        ""
      ) : (
        <div onMouseOver={makeExpand} className="container--icon--course">
          <img className="icon--course" src={icon} alt={title} />
        </div>
      )}
    </div>
  );
};
