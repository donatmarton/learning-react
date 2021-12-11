import React from "react"
import Die from "./components/Die";

function App() {
  const [dice, setDice] = React.useState(() => {
    // state initialization
    const randomDieValues = generateRandomDieValues();
    return randomDieValues.map((value, index) => {
      return {id:index, isHeld:false, value:value}
    })
  });
  
  function generateRandomDieValues() {
    let dieValues = [];
    for (let i = 0; i < 10; i++) {
      const randomValue = Math.floor(Math.random() * 6 + 1);
      dieValues.push( randomValue );
    }
    return dieValues
  }

  function toggleHoldDie(dieID) {
    setDice( (prevDice) => {
      return prevDice.map((die) => (
        die.id === dieID 
        ? {...die, isHeld:!die.isHeld} 
        : die
      ))
    });
  }

  const dieComponents = dice.map((die) => (
    <Die 
      value={die.value}
      key={die.id}
      isSelected={die.isHeld}
      handleClick={() => toggleHoldDie(die.id)}
    />
  ));

  function rollDice() {
    const newDieValues = generateRandomDieValues();
    setDice( (prevDice) => {
      return prevDice.map(die => {
        return die.isHeld ? die : {...die, value:newDieValues[die.id]}
      })
    })
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
