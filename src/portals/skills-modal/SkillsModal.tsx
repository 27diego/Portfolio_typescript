import React, { useEffect, useState } from "react";
import "./SkillsModal.scss";
import { motion, AnimatePresence } from "framer-motion";

import react from "../../images/reactlogo.png";

export const SkillsModal: React.FC<SkillsModal> = ({
  selected,
  modal,
  setModal,
  setActiveLabel,
  activeLabel,
}) => {
  const closeModal = (): void => {
    setModal(false);
  };

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

  console.log(selected);

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          // animate={{ x: -100, y: -150 }}
          // transition={{ ease: "easeOut", duration: 0.5 }}
          className={`Container__Modal--skills Container__Modal--skills--${expand} Container__Modal--skills--${expand}--${activeLabel}`}
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
            Context
          </div>
          <div
            className={`modal__skill modal__skill--${expand} modal__skill--2 modal__skill--2--${
              active ? "active" : ""
            }`}
          >
            Hooks
          </div>
          <div
            className={`modal__skill modal__skill--${expand} modal__skill--3 modal__skill--3--${
              active ? "active" : ""
            }`}
          >
            Server Side
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
