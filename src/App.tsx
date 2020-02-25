import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { Love } from "./components/love/Love";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Education } from "./components/education/Education";
import { Outro } from "./components/outro/Outro";
import { More } from "./components/more/More";

import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App" style={{ height: "100%" }}>
        <Navbar />
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

export default App;
