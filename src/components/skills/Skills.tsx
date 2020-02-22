import React from "react";
import "./Skills.scss";

import css from "../../images/brand logos/Front end/css3.svg";
import html from "../../images/brand logos/Front end/html5.svg";
import js from "../../images/brand logos/Front end/javascript.svg";
import npm from "../../images/brand logos/Front end/npm.svg";
import react from "../../images/brand logos/Front end/React-icon.svg";
import redux from "../../images/brand logos/Front end/redux.svg";

import docker from "../../images/brand logos/Back end/docker.svg";
import mongodb from "../../images/brand logos/Back end/mongodb.svg";
import node from "../../images/brand logos/Back end/node-dot-js.svg";
import postgresql from "../../images/brand logos/Back end/postgresql.svg";
import redis from "../../images/brand logos/Back end/redis.svg";

export const Skills = () => {
  return (
    <React.Fragment>
      <div className="skills__header">Tools I Use...</div>
      <div className="Container--skills">
        <div className="technologies">
          <div className="technologies__header">Frontend</div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={react}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={css}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={html}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={js}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={redux}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={npm}
              alt="css logo"
              height="200rem"
            />
          </div>
        </div>
        <div className="seperator--skills">&nbsp;</div>
        <div className="technologies">
          <div className="technologies__header"> Backend</div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={node}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={mongodb}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={docker}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon">
            <img
              className="skills__icon"
              src={redis}
              alt="css logo"
              height="200rem"
            />
          </div>
          <div className="container--icon container--icon--middle">
            <img
              className="skills__icon"
              src={postgresql}
              alt="css logo"
              height="200rem"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
