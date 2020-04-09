import React, { useState, useContext } from "react";
import "./Navbar.scss";
import sunny from "../../images/Icons/wb_sunny-24px.svg";
import dark from "../../images/Icons/nights_stay-24px.svg";

import { Link } from "react-scroll";
import { ThemeContext } from "../../context/ThemeContext";

export const Navbar: React.FC = () => {
  const context = useContext(ThemeContext);
  const { theme, toggleTheme } = context;

  const [show, setShow] = useState("hide");

  return (
    <div
      className={`navContainer navContainer--${show} navContainer--${theme}`}
    >
      <div className={`nav nav--${theme}`}>
        <ul className="navbar">
          <Link
            to="home-destination"
            spy={true}
            smooth={true}
            duration={500}
            className={`navbar__item navbar__item--${theme}`}
          >
            Home
          </Link>
          <Link
            to="skills-destination"
            spy={true}
            smooth={true}
            duration={500}
            className={`navbar__item navbar__item--${theme}`}
          >
            Skills
          </Link>
          <Link
            to="education-destination"
            spy={true}
            smooth={true}
            duration={500}
            className={`navbar__item navbar__item--${theme}`}
          >
            Education
          </Link>
          <Link
            to="projects-destination"
            spy={true}
            smooth={true}
            duration={500}
            className={`navbar__item navbar__item--${theme}`}
          >
            Projects
          </Link>
          <Link
            to="about-destination"
            spy={true}
            smooth={true}
            duration={500}
            className={`navbar__item navbar__item--${theme}`}
          >
            About Me
          </Link>
          <Link
            to="contact-destination"
            spy={true}
            smooth={true}
            duration={500}
            className={`navbar__item navbar__item--${theme}`}
          >
            Contact
          </Link>
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
          src={theme === "dark" ? sunny : dark}
          alt="sun"
        />
      </button>
    </div>
  );
};
