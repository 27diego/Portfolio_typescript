import React, { useState, useContext } from "react";
import "./Love.scss";

import designLogo from "../../images/Icons/brush-24px.svg";
import developLogo from "../../images/Icons/code-24px.svg";
import ProblemSolveLogo from "../../images/Icons/wb_incandescent-24px.svg";

import { ThemeContext } from "../../context/ThemeContext";

import { Card } from "../card/Card";

export const Love: React.FC = () => {
  const [Cards] = useState([
    {
      logo: designLogo,
      header: "Design",
      paragraph:
        "From a sketch pad to Adobe XD I design all the components on my projects coming up with a beautiful UI, animations and color schemes",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio.",
    },
    {
      logo: developLogo,
      header: "Develop",
      paragraph:
        "Every project of mine is developed in an organic way, with sticking to my designs and using pure scss and javascript I am able to develop components from scratch and make them come to life",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio.",
    },
    {
      logo: ProblemSolveLogo,
      header: "Problem Solve",
      paragraph:
        "I believe that problem solving is a critical part of designing and developing, so I always try to improve my skills practicing my problem solving from coding to communication",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio.",
    },
  ]);

  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className={`container--Card container--Card--${theme}`}>
      <h1 className={`Card__header Card__header--${theme}`}>What I Do... </h1>
      <div className="Card__container">
        {Cards.map((item) => (
          <div className="Cardsss" key={item.header}>
            <Card
              logo={item.logo}
              header={item.header}
              paragraph={item.paragraph}
              longParagraph={item.longParagragh}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
