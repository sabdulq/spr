import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Bibliography from "./Bibliography";
import FAQ from "./FAQ";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Content />
      </main>
      <div className="side-by-side-container">
        <Bibliography />
        <FAQ />
      </div>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
