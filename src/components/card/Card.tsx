import React, { useContext, useState, useRef, useEffect } from "react";
import "./Card.scss";

import { ThemeContext } from "../../context/ThemeContext";

export const Card: React.FC<CardProps> = ({
  logo,
  header,
  paragraph,
  longParagraph,
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
          <img className="Card__logo" src={logo} alt="brush" />
          <h2 className="Card__content__header">{header}</h2>
        </div>
      </div>
      <div
        onClick={() => {
          setExpand(!expand);
          show
            ? setShow(false)
            : setTimeout(() => {
                setShow(true);
              }, 650);
        }}
        className={`Card__side Card__side--${
          expand ? "active" : "unactive"
        } Card__side--${theme} Card__side--back`}
      >
        {show ? (
          <div className={`hidden-container hidden-container--${theme}`}>
            <h1>Web Development</h1>
            <h3>HTML / CSS</h3>
            <p>
              Creating a strong foundation for a website means getting the HTML
              and CSS architecture right. If you’ve got a design I can create
              the front-end code for it.
            </p>
            <h3>WordPress</h3>
            <p>
              Almost all of the websites I make are done using WordPress and the
              reason is simple: It just works. You can easily update every piece
              of content, turn sections on or off and so much more.
            </p>
            <h3>Performance</h3>
            <p>
              Having a fast website is key to keeping people around which
              ultimately converts them into customers. There are a myriad of
              techniques involved in making a fast website, all of which I’ve
              spent years learning. I build these techniques into every site I
              code and can also offer this as a standalone service for existing
              websites.
            </p>
          </div>
        ) : (
          // <div className={`hidden-container hidden-container--${theme}`}>
          //   <div className="loading-dots">
          //     <div className="dots">&nbsp; </div>
          //   </div>
          // </div>
          ""
        )}
        <div
          className={`Card__content Card__content--${
            expand ? "active" : "unactive"
          } Card__content--${theme} Card__content--back`}
        >
          <img className="Card__logo" src={logo} alt="brush" />
          <h2 className="Card__content__header">{header}</h2>
          <p className="Card__content__info">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
