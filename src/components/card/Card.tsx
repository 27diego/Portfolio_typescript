import React, { useContext, useState, useRef, useEffect } from "react";
import "./Card.scss";

import { ThemeContext } from "../../context/ThemeContext";

export const Card: React.FC<CardProps> = ({
  logo,
  header,
  paragraph,
  hiddenDes,
  containerSize,
}) => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  const [expand, setExpand] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [right, setRight] = useState<string>("left");

  const myRef = useRef<HTMLDivElement>(null);

  const hide = (): void => {
    setExpand(false);
    setShow(false);
  };

  //we need to get the responsive cases
  //container getBoundingClientRect
  useEffect(() => {
    if (myRef.current!.getBoundingClientRect().x > 600) {
      setRight("right");
    }
  }, [myRef]);

  return (
    <div
      onMouseLeave={hide}
      ref={myRef}
      className={`Card Card--${expand ? "active" : "unactive"} Card--${
        expand ? "active" : "unactive"
      }--${right}`}
    >
      <div className={`Card__side Card__side--${theme} Card__side--front`}>
        <div
          className={`Card__content Card__content--front Card__content--${theme}`}
        >
          <img
            className={`Card__logo Card__logo--${
              header.toLocaleLowerCase() === "problem solve" ? "problem" : ""
            }`}
            src={logo}
            alt="brush"
          />
          <h2 className="Card__content__header">{header}</h2>
        </div>
      </div>
      <div
        onClick={() => {
          if (containerSize > 900) {
            setExpand(!expand);
            show
              ? setShow(false)
              : setTimeout(() => {
                  setShow(true);
                }, 750);
          }
        }}
        className={`Card__side Card__side--${
          expand ? "active" : "unactive"
        } Card__side--${theme} Card__side--back`}
      >
        {show && (
          <div className={`hidden-container hidden-container--${theme}`}>
            <h1>{hiddenDes.title1}</h1>
            {/* <h3>HTML / CSS</h3> */}
            <p>{hiddenDes.paragraph1}</p>
            <h1>{hiddenDes.title2}</h1>
            <p>{hiddenDes.paragraph2}</p>
          </div>
        )}
        <div
          className={`Card__content Card__content--${
            expand ? "active" : "unactive"
          } Card__content--${theme} Card__content--back`}
        >
          <img
            className={`Card__logo Card__logo--${
              header.toLocaleLowerCase() === "problem solve" ? "problem" : ""
            }`}
            src={logo}
            alt="brush"
          />
          <h2 className="Card__content__header">{header}</h2>
          <p className="Card__content__info">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
