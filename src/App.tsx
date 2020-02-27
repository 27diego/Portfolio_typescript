import React, { useRef } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { Love } from "./components/love/Love";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Education } from "./components/education/Education";
import { Outro } from "./components/outro/Outro";
import { More } from "./components/more/More";

import { ThemeContextProvider } from "./context/ThemeContext";

class App extends React.Component {
  //home, skills, education, about me, contact

  private homeRef = React.createRef<HTMLDivElement>();
  private skillsRef = React.createRef<HTMLDivElement>();
  private educationRef = React.createRef<HTMLDivElement>();
  private aboutMeRef = React.createRef<HTMLDivElement>();
  private contactRef = React.createRef<HTMLDivElement>();

  render() {
    return (
      <ThemeContextProvider>
        <div className="App" style={{ height: "100%" }}>
          <Navbar
            homeRef={this.homeRef}
            skillsRef={this.skillsRef}
            educationRef={this.educationRef}
            aboutMeRef={this.aboutMeRef}
            contactRef={this.contactRef}
          />
          <Intro />
          <Love />
          <Projects />
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
