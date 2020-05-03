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
      hiddenDes: {
        title1: "UX",
        paragraph1:
          "An important part of wether a user comes back to a website is how the user remembers the interactions it had with the product. I like to first identify the target audience that the product will have and design the product around that target audience. I try to convey the feeling of how the website should be to both serve it's purpose and make the user feel comfortable. This could be how easy it is for a user to achieve their goals, or the mini interactions they had with the product.",
        title2: "UI",
        paragraph2:
          "Once the structure of how the product should feel is concerte, I try and connect the pieces of what the product should look like to achieve that feeling. The process I choose is to usually go with deciding which colors and fonts the site should have. I then choose the layout along with images and combine components with special animations to make the product as pleasing for the end user as it can. Once I mock up my designs I get ready for development.",
      },
    },
    {
      logo: developLogo,
      header: "Develop",
      paragraph:
        "Every project of mine is developed in an organic way, with sticking to my designs and using pure scss and javascript I am able to develop components from scratch and make them come to life",
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
              hiddenDes={item.hiddenDes}
              containerSize={containerSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
