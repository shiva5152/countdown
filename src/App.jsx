import React from "react";
import About from "./sections/About";
import Features from "./sections/Features";
import Features2 from "./sections/Features2";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Roadmap from "./sections/Roadmap";
import Socials from "./sections/Socials";

function App() {
  return (
    <div className="max-w-[1360px] w-full mx-auto bg-[#010101] font-spaceMono">
      <Hero />
      <About />
      <Features />
      <Features2 />
      <Roadmap />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
