import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Highlights />
      <Hero />
    </main>
  );
};

export default App;
