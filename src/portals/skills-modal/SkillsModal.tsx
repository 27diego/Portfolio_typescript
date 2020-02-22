import React from "react";
import "./SkillsModal.scss";

import react from "../../images/reactlogo.png";

export const SkillsModal: React.FC<SkillsModal> = ({ selected, setModal }) => {
  console.log(selected, " from modal");

  const closeModal = (): void => {
    setModal(false);
  };

  return (
    <div className="Container__Modal--skills">
      <img
        className="modal__icon"
        src={selected === "react" ? react : selected}
        alt="logo"
      />
      <div className="modal__skill modal__skill--1">Context</div>
      <div className="modal__skill modal__skill--2">Hooks</div>
      <div className="modal__skill modal__skill--3">Server Side</div>
    </div>
  );
};
