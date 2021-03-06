import React from "react";

export default function TitleScreen(props) {
  return (
    <div className="screen title-screen--container">
      <h1 className="title-screen--title">Quizzical</h1>
      <p className="title-screen--description">A fun quiz game.</p>
      <button 
        className="title-screen--start-button" 
        onClick={props.hideTitle}
      >
        Start quiz
      </button>
    </div>
  )
}