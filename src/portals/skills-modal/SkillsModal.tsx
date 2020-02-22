import React from "react";
import "./SkillsModal.scss";

export const SkillsModal: React.FC<SkillsModal> = ({ selected, setModal }) => {
  console.log(selected, " from modal");

  const closeModal = (): void => {
    setModal(false);
  };

  return (
    <div className="Container__Modal--skills">
      <div>Modal Here</div>
      <button className="Close Modal" onClick={closeModal}>
        Close Modal
      </button>
    </div>
  );
};
