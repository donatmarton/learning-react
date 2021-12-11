import React from "react"
import TitleScreen from "./components/TitleScreen";
import QuizScreen from "./components/QuizScreen";


function App() {
  const [showTitle, setShowTitle] = React.useState(true)

  function hideTitle() {
    setShowTitle(false);
  }

  return (
    <div className="app">
      {showTitle ? 
        <TitleScreen hideTitle={hideTitle}/> 
        : 
        <QuizScreen />}
    </div>
  );
}

export default App;
