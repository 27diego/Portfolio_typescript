import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Intro.scss";
import logo from "../../images/brand logos/IMG_0855.png";
import mapIcon from "../../images/Icons/location_on-24px.svg";

export const Intro = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className={`intro intro--${theme}`}>
      <img className="img--emoji" src={logo} alt="emoji" />

      <div className={`greeting greeting--${theme}`}>
        <h1 className="greeting__header">Hello I'm Diego,</h1>
        <p className="greeting__body">
          I'm an up and coming designer and developer out of Salinas, CA
          {<img className="icon--map" src={mapIcon} alt="map icon" />}
        </p>
      </div>

      <div className={`indicator indicator--${theme}`}>
        <p className="indicator__text">Swipe Down</p>
        <div className={`indicator__icon indicator__icon--${theme}`}></div>
      </div>
    </div>
  );
};
