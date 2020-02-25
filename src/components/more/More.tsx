import React, { useState } from "react";
import "./More.scss";

import niners from "../../images/images for grid/niners.png";
import lakers from "../../images/images for grid/lakers.jpg";
import mexico from "../../images/images for grid/mexico.jpg";
import gym from "../../images/images for grid/gym.jpg";
import nature from "../../images/images for grid/nature.jpg";
import starwars from "../../images/images for grid/starwars.png";
import guitar from "../../images/images for grid/guitar.png";
import sky from "../../images/images for grid/sky.jpg";
import manU from "../../images/images for grid/manU.jpg";
import boxing from "../../images/images for grid/boxing.jpg";

export const More = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="Container--More">
      <div className="gallery">
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--niners`}
        >
          <img src={niners} className="gallery__img" alt="niners" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--mexico`}
        >
          <img src={mexico} className="gallery__img" alt="mexico" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--gym`}
        >
          <img className="gallery__img" src={gym} alt="gym" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--nature`}
        >
          <img className="gallery__img" src={nature} alt="nature" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--starwars`}
        >
          <img className="gallery__img" src={starwars} alt="starwars" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--guitar`}
        >
          <img className="gallery__img" src={guitar} alt="guitar" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--lakers`}
        >
          <img className="gallery__img" src={lakers} alt="lakers" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--sky`}
        >
          <img className="gallery__img" src={sky} alt="sky" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--manU`}
        >
          <img className="gallery__img" src={manU} alt="Man U" />
        </figure>
        <figure
          className={`gallery__item gallery__item--${expand} gallery__item--boxing`}
        >
          <img className="gallery__img" src={boxing} alt="boxing" />
        </figure>
      </div>
    </div>
  );
};
