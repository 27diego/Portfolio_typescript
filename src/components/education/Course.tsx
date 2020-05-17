import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Course.scss";

interface PROPS {
  title: string;
  icon: string;
  description: string;
}

export const Course: React.FC<PROPS> = ({ title, icon, description }) => {
  const [expand, setExpand] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const openExpand = () => {
    setExpand(true);
  };

  const closeExpand = () => {
    setExpand(false);
  };

  const context = useContext(ThemeContext);
  const { theme } = context;

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = () => {
    if (container.current!.getBoundingClientRect().width < 100) {
      if (container.current!.getBoundingClientRect().top < 681) {
        openExpand();
      }
    }
  };

  return (
    <div ref={container} className="Container--Course">
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
