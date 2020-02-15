import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
