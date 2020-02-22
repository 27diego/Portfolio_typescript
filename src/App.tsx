import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { Love } from "./components/love/Love";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

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
      </div>
    </ThemeContextProvider>
  );
}

export default App;
