import React, { useState, useContext, useRef, useEffect } from "react";
import "./Love.scss";

import designLogo from "../../images/Icons/brush-24px.svg";
import developLogo from "../../images/Icons/code-24px.svg";
import ProblemSolveLogo from "../../images/Icons/wb_incandescent-24px.svg";

import { ThemeContext } from "../../context/ThemeContext";

import { Card } from "../card/Card";

export const Love: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [Cards] = useState([
    {
      logo: designLogo,
      header: "Design",
      paragraph:
        "From a sketch pad to Adobe XD I design all the components on my projects coming up with a beautiful UI, animations and color schemes",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio.",
      hiddenDes: {
        title1: "UX",
        paragraph1:
          "Creating a strong foundation for a website means getting the HTMLand CSS architecture right.If you’ve got a design I can createvthe front- end code for it.",
        title2: "UI",
        paragraph2:
          "Having a fast website is key to keeping people around which ultimately converts them into customers.There are a myriad of techniques involved in making a fast website, all of which I’ve spent years learning.I build these techniques into every site I code and can also offer this as a standalone service for existing websites.",
      },
    },
    {
      logo: developLogo,
      header: "Develop",
      paragraph:
        "Every project of mine is developed in an organic way, with sticking to my designs and using pure scss and javascript I am able to develop components from scratch and make them come to life",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio.",
      hiddenDes: {
        title1: "Development",
        paragraph1:
          "Once the UX & UI design is in place and I have a visual mockup ready, it will be time to implement using code. To do this, I go through my toolbox and pick and choose the right tools for the job. At the end of the day it will be my job to implement all the features of the website and choose right amount of tools and dependencies to make the application run in the most efficient way possible.",
        title2: "Production",
        paragraph2:
          "Having a fast and efficient website combining with great UI / UX is the best way to put your product out there and discover and keep new customers. It is my job to make sure that both the client and the customer have a safe and exciting experience with the application and that means getting the architecture and security around the app an essential piece to producing a great application ready for the world.",
      },
    },
    {
      logo: ProblemSolveLogo,
      header: "Problem Solve",
      paragraph:
        "I believe that problem solving is a critical part of designing and developing, so I always try to improve my skills practicing my problem solving from coding to communication",
      longParagragh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae nihil eaque quos modi eos, unde dolor delectus vero, nostrum, iste reprehenderit. Natus vero excepturi quia aspernatur ab magnam odio.",
      hiddenDes: {
        title1: "Communication",
        paragraph1:
          "I believe that this step is the most essential in producing a great product. Making sure of the client's exact expectations of how the app should look and feel, along with what it should do is something that takes constant communication in the lifecycle of development. This means that it is my job to solve communication problems between the client and the developer in order to produce a great app.",
        title2: "Development",
        paragraph2:
          "Problem solving in development is essential to make sure that the website takes in the least amount of resources and produces peak performance for the client's necesseties to reach full potential. This can vary from using different frameworks, to having the right amount of JS and CSS, along with the right design of a back end API will determine how the website will run. This means that it is my job to first choose which tools I would have to use for the job and implement them in the most efficient way possible.",
      },
    },
  ]);

  const [containerSize, setContainerSize] = useState<number>(0);

  const context = useContext(ThemeContext);
  const { theme } = context;

  useEffect(() => {
    setContainerSize(containerRef.current!.getBoundingClientRect().width);
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className={`container--Card container--Card--${theme}`}
    >
      <h1 className={`Card__header Card__header--${theme}`}>What I Do... </h1>
      <div className="Card__container">
        {Cards.map((item) => (
          <div className="Cardsss" key={item.header}>
            <Card
              logo={item.logo}
              header={item.header}
              paragraph={item.paragraph}
              longParagraph={item.longParagragh}
              hiddenDes={item.hiddenDes}
              containerSize={containerSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
