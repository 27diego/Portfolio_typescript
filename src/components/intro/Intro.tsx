import React from "react";
import "./Intro.scss";
import logo from "../../images/brand logos/IMG_0855.png";
import mapIcon from "../../images/Icons/location_on-24px.svg";

export const Intro = () => {
  return (
    <div className="intro">
      <img className="img--emoji" src={logo} alt="emoji" />

      <div className="greeting">
        <h1 className="greeting__header">Hello I'm Diego,</h1>
        <p className="greeting__body">
          Im an up and coming designer and developer out of Salinas, CA{" "}
          {/* {<img className="icon--map" src={mapIcon} alt="map icon" />} */}
        </p>
      </div>

      <div className="indicator">
        <p className="indicator__text">Swipe Down</p>
        <div className="indicator__icon">&nbsp;</div>
      </div>
    </div>
  );
};
