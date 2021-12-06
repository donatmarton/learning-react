import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  )
}