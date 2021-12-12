import React from "react";
import QuizQuestion from "./QuizQuestion";

export default function QuizScreen() {
  return (
    <div className="screen quiz--container">
      <QuizQuestion />
      <QuizQuestion />
      <QuizQuestion />

      <div className="quiz--controls">
        <p className="quiz--result">You scored 3/5 correct answers</p>
        <button className="quiz--control-button">
          Play again
        </button>
      </div>
    </div>
  )
}