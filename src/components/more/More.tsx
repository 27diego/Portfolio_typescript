import React, { useState, useEffect, useRef } from "react";
import "./More.scss";

import whyImg from "../../images/images for grid/whycoding.jpeg";

import portrait from "../../images/me.jpg";

export const More: React.FC<NavBarProps> = ({ main, setMain }) => {
  const [activate, setActivate] = useState<boolean>(false);
  const [backArrow, setBackArrow] = useState<string>("");
  const [why, setWhy] = useState<boolean>(false);

  const codeRef: any = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

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
    console.log(codeRef.current!.getBoundingClientRect().top);
    if (codeRef.current!.getBoundingClientRect().top < 170) {
      setWhy(true);
      console.log("middle");
    }
  };

  return (
    <div className="Container--More">
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

      <div className={`about about--${activate ? "show" : "hide"}`}>
        <div className="about__main">About Me</div>
      </div>

      <section className="section section--why">
        <img
          ref={codeRef}
          src={whyImg}
          alt="coding"
          className={`section__img section__img--left--${
            why ? "load" : "initial"
          }`}
        />
        <div className={`info info--left info--${why ? "load" : "initial"}`}>
          <div className="info__header">
            <span>The reason I choose</span>
          </div>
          <p className="info__body ">
            to dedicate myself to this is because I enjoy web development and I
            enjoy creating. I look at a blank screen like as if it is a drawing
            board where I can come up with something and make it turn to life.
            It gives me that same artistic feeling of playing the guitar. It is
            something that I can say I love to do.
          </p>
        </div>
      </section>
      <section className="section section--background"></section>
      <section className="section section--hobby"></section>
      <section className="section section--future"></section>
    </div>
  );
};
