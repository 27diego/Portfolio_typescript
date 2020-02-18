import React from "react";
import "./Card.scss";

interface Props {
  logo: string;
  header: string;
  paragraph: string;
}

export function Card({ logo, header, paragraph }: Props) {
  return (
    <div className="Card">
      <div className="Card__side Card__side--front">
        <div className=" Card__content Card__content--front">
          <img className="Card__logo" src={logo} alt="brush" />
          <h2 className="Card__content__header">{header}</h2>
        </div>
      </div>
      <div className="Card__side Card__side--back">
        <div className="Card__content Card__content--back">
          <img className="Card__logo" src={logo} alt="brush" />
          <h2 className="Card__content__header">{header}</h2>
          <p className="Card__content__info">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
