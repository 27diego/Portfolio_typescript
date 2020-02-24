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
    <div className="Container--Course">
      <div
        onMouseLeave={makeExpand}
        className={`CourseCard CourseCard--${expand}`}
      >
        <div className="CourseCard__title">{title}</div>
        <div className="CourseCard__description">{description}</div>
      </div>
      <div
        onMouseEnter={makeExpand}
        className={`CourseIcon CourseIcon--${expand}`}
      >
        <div className="CourseIcon__wrapper">
          <img className="CourseIcon__icon" src={icon} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
};
