import React, { useState, useEffect, useRef } from "react";
import "./More.scss";

import portrait from "../../images/portrait.png";
import whyImg from "../../images/images for grid/whycoding.jpeg";
import futureImg from "../../images/images for grid/future.jpeg";
import fieldsImg from "../../images/images for grid/fields.jpg";
import guitarImg from "../../images/images for grid/guitar.png";

export const More: React.FC<NavBarProps> = ({ main, setMain }) => {
  const [activate, setActivate] = useState<boolean>(false);
  const [backArrow, setBackArrow] = useState<string>("");

  const side: any = useRef(null);

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActivate(true);
    }, 1500);
  }, [activate]);

  const onScroll = () => {
    // console.log("position of element: ", side.current?.getBoundingClientRect());
    if (side.current?.getBoundingClientRect().x < 201) {
      console.log("ON SCREEN");
    }
  };

  return (
    <div className="Container--More">
      <div className="main">
        <div className={`home home--${activate ? "show" : "hide"}`}>
          <div
            className="homeArrow__container"
            onMouseOver={(): void => setBackArrow("back")}
            onMouseOut={(): void => setBackArrow("")}
            onClick={(): void => setMain(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`homeArrow homeArrow--${backArrow}`}
            >
              <polyline
                points="244 400 100 256 244 112"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
                }}
              />
              <line
                x1="120"
                y1="256"
                x2="412"
                y2="256"
                style={{
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "48px",
                }}
              />
            </svg>
          </div>
          <div className="home__title">Home</div>
        </div>
        <div
          className={`name__container name__container--${
            activate ? "load" : "initial"
          }`}
        >
          <h1 className="name">Diego Vega</h1>
        </div>

        <img
          className={`portrait portrait--${activate ? "show" : "hide"}`}
          src={portrait}
          alt="self portrait"
        />
      </div>

      <div className={`section section--why`}>
        <img
          className="section section__img"
          src={whyImg}
          alt="screens with code"
        />
        <p className="section__description">
          The reason I choose to dedicate myself to this is because I enjoy web
          development and I enjoy creating. I look at a blank screen like as if
          it is a drawing board where I can come up with something and make it
          turn to life. It gives me that same artistic feeling of playing the
          guitar. It is something that I can say I love to do.
        </p>
      </div>
      <div className={`section section--background`}>
        <img
          className="section section__img"
          src={fieldsImg}
          alt="screens with code"
        />
        <p className="section__description">
          I come from a family of hard workers and self made individuals. My
          parents went from working in the Salinas valley fields and going to
          school at the same time, while raising two children, to becoming a
          nurse and a management technician respectively. It is from them that I
          get my belief that hard work and determination can accomplish
          everything and anything. This belief is what allowed me to go through
          college while being a full time worker and expand my knowledge of what
          I enjoy doing even outside of school, taking online courses and
          applying my learning when I could.
        </p>
      </div>
      <div className={`section section--hobby`}>
        <img
          className="section section__img"
          src={guitarImg}
          alt="screens with code"
        />
        <p className="section__description">
          When I’m not coding or designing potential projects, I can be found
          either learning new songs on my guitar or lifting weights. Playing the
          guitar is another way I can open my mind to new creative ideas not
          only on how to play a certain melody but also on how to come up with
          new designs and new ways to tackle developing problems. As for lifting
          I enjoy being active and trying to stay healthy so it is something
          that I like to challenge myself with. Lifting gave me a stronger sense
          of if I can put my mind to it, I can achieve it and it worked! In my
          first 10-12 months of lifting I gained 20lbs of muscle!
        </p>
      </div>
      <div className={`section section--future`}>
        <img
          className="section section__img"
          src={futureImg}
          alt="screens with code"
        />
        <p className="section__description">
          My future goal is to become the full product, I want to become a
          DevOps engineer and to do that I have to master full stack
          development. That means constant learning and working on new projects
          to expand my skillset in order to adapt to new challenges as
          efficiently as possible. It’s a long path go where I want to be but
          everyday offers a new opportunity to get closer to new goals and
          heights.
        </p>
      </div>
    </div>
  );
};
