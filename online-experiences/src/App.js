import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map( (cardData) => {
    return (
      <Card 
        key={cardData.id}
        data={cardData}
      />
    )
  });
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="cards-container">
        {cards}
      </section>
    </div>
  );
}

export default App;
