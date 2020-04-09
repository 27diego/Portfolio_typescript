type CardProps = {
  logo: string;
  header: string;
  paragraph: string;
  longParagraph: string;
};

type Projects = {
  title: string;
  logo: string;
  landing: string;
  icons: string[];
  link: string;
};

type SkillsModal = {
  selected: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
};
