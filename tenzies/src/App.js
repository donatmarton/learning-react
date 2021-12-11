import React from "react"
import Die from "./components/Die";

function App() {
  const [dieValues, setDieValues] = React.useState(generateRandomDice());
  
  function generateRandomDice() {
    let dieValues = [];
    for (let i = 0; i < 10; i++) {
      dieValues.push( Math.floor(Math.random() * 6 + 1) );
    }
    return dieValues
  }
  const dieComponents = dieValues.map((dieValue, index) => (
    <Die 
      value={dieValue}
      key={index}
    />
  ));

  function rollDice() {
    setDieValues(generateRandomDice());
  }

  return (
    <main className="app">
      <div className="dice">
        {dieComponents}
      </div>
      <button 
        className="roll-button"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  );
}

export default App;
