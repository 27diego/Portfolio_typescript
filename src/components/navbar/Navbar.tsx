import React, { useState } from "react";
import "./Navbar.scss";
import sunny from "../../images/Icons/wb_sunny-24px.svg";

export const Navbar = () => {
  const [show, setShow] = useState("show");

  return (
    <div className={`navContainer navContainer--${show}`}>
      <div className="nav">
        <ul className="navbar">
          <li className="navbar__item">Home</li>
          <li className="navbar__item">Skills</li>
          <li className="navbar__item">Projects</li>
          <li className="navbar__item">Education</li>
          <li className="navbar__item">About Me</li>
          <li className="navbar__item">Contact</li>
        </ul>
      </div>
      <button
        onClick={() => setShow(show === "show" ? "hide" : "show")}
        className={`navbtn navbtn--${show}`}
      ></button>

      <button className="themebtn">
        <img className="img img--sunny" src={sunny} alt="sun" />
      </button>
    </div>
  );
};
