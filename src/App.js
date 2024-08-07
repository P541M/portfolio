import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
