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
        title={cardData.title}
        coverImg={cardData.coverImg}
        price={cardData.price}
        stats={cardData.stats}
        location={cardData.location}
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
