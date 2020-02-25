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
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio."
    },
    {
      logo: developLogo,
      header: "Develop",
      paragraph:
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio."
    },
    {
      logo: ProblemSolveLogo,
      header: "Problem Solve",
      paragraph:
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio."
    }
  ]);

  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className={`container--Card container--Card--${theme}`}>
      <h1 className={`Card__header Card__header--${theme}`}>What I Do... </h1>
      <div className="Card__container">
        {Cards.map(item => (
          <Card
            key={item.header}
            logo={item.logo}
            header={item.header}
            paragraph={item.paragraph}
            longParagraph={item.longParagragh}
          />
        ))}
      </div>
    </div>
  );
};
