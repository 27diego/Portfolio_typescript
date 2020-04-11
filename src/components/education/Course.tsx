import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Course.scss";

interface PROPS {
  title: string;
  icon: string;
  description: string;
}

export const Course: React.FC<PROPS> = ({ title, icon, description }) => {
  const [expand, setExpand] = useState(false);

  const openExpand = () => {
    setExpand(true);
  };

  const closeExpand = () => {
    setExpand(false);
  };

  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className="Container--Course">
      <div
        onMouseLeave={closeExpand}
        className={`CourseCard CourseCard--${theme} CourseCard--${expand}`}
      >
        <div className={`CourseCard__title CourseCard__title--${theme}`}>
          {title}
        </div>
        <div
          className={`CourseCard__description CourseCard__description--${theme}`}
        >
          {description}
        </div>
      </div>
      <div
        onMouseEnter={openExpand}
        className={`CourseIcon CourseIcon--${expand}`}
      >
        <div className={`CourseIcon__wrapper CourseIcon__wrapper--${theme}`}>
          <img className="CourseIcon__icon" src={icon} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
};
