type CardProps = {
  logo: string;
  header: string;
  paragraph: string;
  longParagraph: string;
  hiddenDes: {
    title1: string;
    paragraph1: string;
    title2: string;
    paragraph2: string;
  };
};

type Projects = {
  title: string;
  logo: string;
  options?: {
    width: string;
  };
  landing: string;
  icons: string[];
  link: string;
};

type SkillsModal = {
  selected: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveLabel: React.Dispatch<React.SetStateAction<string>>;
  activeLabel: string;
  skills: {
    one: string;
    two: string;
    three: string;
  };
};
