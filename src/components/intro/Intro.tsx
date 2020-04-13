import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Intro.scss';
import logo from '../../images/brand logos/IMG_0855.png';

export const Intro = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  const [active, setActive] = useState<boolean>(true);

  setTimeout(() => {
    setActive(false);
  }, 3000);

  return (
    <div className={`intro intro--${theme}`}>
      <div className="resumeContainer">
        <a
          className="intro__resumeLink"
          href="https://drive.google.com/file/d/13m916VLRIlfxaoAWPSaJQSpLgIivj1Kb/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="img--emoji" src={logo} alt="emoji" />
        </a>
        <div
          className={`intro__label intro__label--${
            active ? 'active' : 'deactive'
          }`}
        >
          <span>Click for my Resume!</span>
        </div>
      </div>
      <div className={`greeting greeting--${theme}`}>
        <h1 className="greeting__header">Hello I'm Diego,</h1>
        <p className="greeting__body">
          I am a Developer and aspiring Web Designer out of Salinas, CA
          <a
            href="http://www.google.com/search?q=Salinas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="45"
              viewBox="0 0 24 24"
              width="45"
              className="icon__container--map"
            >
              <path
                className={`icon--map--${theme}`}
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
          </a>
        </p>
      </div>

      <div className={`indicator indicator--${theme}`}>
        <p className="indicator__text">Swipe Down</p>
        <div className={`indicator__icon indicator__icon--${theme}`}></div>
      </div>
    </div>
  );
};
