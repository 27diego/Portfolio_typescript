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
        <div className="course course--true">
          <img className="course__icon" src={icon} alt={title} />
          <div className="course__title">{title}</div>
          <div className="course__desc">{description}</div>
        </div>
      ) : (
        <div onMouseOver={makeExpand} className="course course--false">
          <img className="course__icon" src={icon} alt={title} />
        </div>
      )}
    </div>
  );
};
