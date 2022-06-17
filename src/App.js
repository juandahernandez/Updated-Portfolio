import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import SliderWithReactBoostrap from "./components/slider/SliderWithReactBoostrap";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <SliderWithReactBoostrap />
      <Form />
      <Contact />
    </div>
  );
}

export default App;
