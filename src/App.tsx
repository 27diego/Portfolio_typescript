import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { Love } from "./components/love/Love";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Education } from "./components/education/Education";
import { Outro } from "./components/outro/Outro";
// import { More } from "./components/more/More";

import { Element } from "react-scroll";
import { ThemeContextProvider } from "./context/ThemeContext";

class App extends React.Component {
  //home, skills, education, about me, contact

  render() {
    return (
      <ThemeContextProvider>
        <div className="App" style={{ height: "100%" }}>
          <Navbar />
          <Intro />
          <Love />
          <Element id="projects-destination" name="projects-destination">
            <Projects />
          </Element>

          <Skills />
          <Education />
          <Outro />
          {/* <More /> */}
        </div>
      </ThemeContextProvider>
    );
  }
}

export default App;
