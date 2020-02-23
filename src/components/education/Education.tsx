import React, { useState } from "react";
import "./Education.scss";

import school from "../../images/brand logos/csumblogo.png";
import { Course } from "./Course";

import networks from "../../images/Icons/wifi-24px.svg";
import databases from "../../images/Icons/cloud-24px.svg";
import algorithms from "../../images/Icons/category-24px.svg";
import os from "../../images/Icons/developer_board-24px.svg";

export const Education: React.FC = () => {
  const [courses] = useState([
    {
      title: "OS",
      icon: os,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias assumenda eligendi quasi! Ducimus repellendus rem porro, voluptatibus aperiam optio rerum incidunt? Autem earum excepturi at labore, consectetur sequi nulla?"
    },
    {
      title: "Databases",
      icon: databases,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias assumenda eligendi quasi! Ducimus repellendus rem porro, voluptatibus aperiam optio rerum incidunt? Autem earum excepturi at labore, consectetur sequi nulla?"
    },
    {
      title: "Algorithms",
      icon: algorithms,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias assumenda eligendi quasi! Ducimus repellendus rem porro, voluptatibus aperiam optio rerum incidunt? Autem earum excepturi at labore, consectetur sequi nulla?"
    },
    {
      title: "Networks",
      icon: networks,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias assumenda eligendi quasi! Ducimus repellendus rem porro, voluptatibus aperiam optio rerum incidunt? Autem earum excepturi at labore, consectetur sequi nulla?"
    }
  ]);

  return (
    <div className="Container--Education">
      <div className="EdHeader">
        <div className="wrapper--text">
          <span className="EdHeader__degree">
            B.S. <br /> Computer Science Software Engineer
          </span>
        </div>
        <img className="EdHeader__img" src={school} alt="csumb logo" />
      </div>
      <div className="courses">
        {courses.map(item => (
          <Course
            key={item.title}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
