import React from "react";

export default function QuizQuestion() {
  return (
    <div className="quiz--question">
      <h2 className="quiz--question-text">How would one say goodbye in spanish?</h2>
      <div className="quiz--answer-field">
        <button className="quiz--answer">Adiós</button>
        <button className="quiz--answer">Hola</button>
        <button className="quiz--answer">Au revoir</button>
        <button className="quiz--answer">Salir</button>
      </div>
      <hr/>
    </div>
  )
}