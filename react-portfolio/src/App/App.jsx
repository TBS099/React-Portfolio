import React from "react";
import "./App.css";
import AnimatedCursor from "../Components/AnimatedCursor/AnimatedCursor";
import NavBar from "../Sections/NavBar/NavBar";
import Home from "../Sections/Home/Home";
import About from "../Sections/About/About";
import Portfolio from "../Sections/Portfolio/Portfolio";
import Contact from "../Sections/Contact/Contact";

function App() {
  return (
    <main>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
