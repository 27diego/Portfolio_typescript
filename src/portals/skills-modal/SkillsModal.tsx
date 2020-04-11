import React, { useEffect, useState, useContext } from "react";
import "./SkillsModal.scss";

import { ThemeContext } from "../../context/ThemeContext";

import react from "../../images/reactlogo.png";

export const SkillsModal: React.FC<SkillsModal> = ({
  selected,
  setModal,
  setActiveLabel,
  activeLabel,
  skills,
}) => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  const [expand, setExpand] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 500);
  }, []);

  useEffect(() => {
    setExpand(true);
  }, []);

  const closeModal = (): void => {
    setModal(false);
  };

  return (
    <div
      className={`Container__Modal--skills Container__Modal--skills--${theme} Container__Modal--skills--${expand} Container__Modal--skills--${expand}--${activeLabel}`}
    >
      <div
        onClick={(): void => {
          closeModal();
          setActiveLabel("");
        }}
        className="container--btn--exit"
      >
        <div className="btn--exit">&nbsp;</div>
      </div>
      <img
        className={`modal__icon modal__icon--${active}`}
        src={selected === "react" ? react : selected}
        alt="logo"
      />
      <div
        className={`modal__skill modal__skill--${expand} modal__skill--1 modal__skill--1--${
          active ? "active" : ""
        }`}
      >
        {skills.one}
      </div>
      <div
        className={`modal__skill modal__skill--${expand} modal__skill--2 modal__skill--2--${
          active ? "active" : ""
        }`}
      >
        {skills.two}
      </div>
      <div
        className={`modal__skill modal__skill--${expand} modal__skill--3 modal__skill--3--${
          active ? "active" : ""
        }`}
      >
        {skills.three}
      </div>
    </div>
  );
};
