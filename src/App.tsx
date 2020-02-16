import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App" style={{ height: "100%" }}>
        <Navbar />
        <Intro />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
