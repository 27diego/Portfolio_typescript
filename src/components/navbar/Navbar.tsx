import React, { useState, useContext } from "react";
import "./Navbar.scss";
import sunny from "../../images/Icons/wb_sunny-24px.svg";
import dark from "../../images/Icons/nights_stay-24px.svg";
import { ThemeContext } from "../../context/ThemeContext";

export const Navbar = () => {
  const context = useContext(ThemeContext);

  const { theme, toggleTheme } = context;

  const [show, setShow] = useState("hide");

  return (
    <div
      className={`navContainer navContainer--${show} navContainer--${theme}`}
    >
      <div className={`nav nav--${theme}`}>
        <ul className="navbar">
          <li className={`navbar__item navbar__item--${theme}`}>Home</li>
          <li className={`navbar__item navbar__item--${theme}`}>Skills</li>
          <li className={`navbar__item navbar__item--${theme}`}>Projects</li>
          <li className={`navbar__item navbar__item--${theme}`}>Education</li>
          <li className={`navbar__item navbar__item--${theme}`}>About Me</li>
          <li className={`navbar__item navbar__item--${theme}`}>Contact</li>
        </ul>
      </div>
      <button
        onClick={() => setShow(show === "show" ? "hide" : "show")}
        className={`navbtn navbtn--${show} navbtn--${theme}`}
      ></button>

      <button
        onClick={() => toggleTheme()}
        className={`themebtn themebtn--${theme}`}
      >
        <img
          className={`img img--${theme}`}
          src={theme === "dark" ? dark : sunny}
          alt="sun"
        />
      </button>
    </div>
  );
};
