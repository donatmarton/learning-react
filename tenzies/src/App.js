import React from "react"
import Die from "./components/Die";
import Confetti from "react-confetti"

function App() {
  const [tenzies, setTenzies] = React.useState(false);
  const [dice, setDice] = React.useState(generateAllDice());

  function generateAllDice() {
    const randomDieValues = generateRandomDieValues();
    return randomDieValues.map((value, index) => {
      return {id:index, isHeld:false, value:value}
    })
  }
  
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

  function startNewGame() {
    setDice(generateAllDice());
    setTenzies(false);
  }

  React.useEffect( () => {
    let firstValue = dice[0].value;
    let isAllSame = dice.every(die => die.value === firstValue);
    let isAllHeld = dice.every(die => die.isHeld);
    
    if (isAllHeld && isAllSame) {
      setTenzies(true);
      console.log("congrats")
    }
  }, [dice])

  return (
    <main className="app">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice">
        {dieComponents}
      </div>
      <button 
        className="roll-button"
        onClick={tenzies ? startNewGame : rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
      {tenzies && <Confetti />}
    </main>
  );
}

export default App;
