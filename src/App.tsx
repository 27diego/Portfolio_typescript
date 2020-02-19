import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { Love } from "./components/love/Love";

import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App" style={{ height: "100%" }}>
        <Navbar />
        <Intro />
        <Love />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
