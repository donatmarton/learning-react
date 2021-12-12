import React from "react";
import parse from "html-react-parser";


export default function QuizQuestion(props) {
  const correctAnswerStyle = {
    backgroundColor: "#94D7A2",
    border: "none",
  }
  const incorrectAnswerStyle = {
    backgroundColor: "#F8BCBC",
    border: "none",
  }
  const disabledButtonStyle = {
    borderColor: "#8b90af",
    color: "#8b90af",
  }

  const answerElements = props.answers.map( (answer) => {
    const isChecked = props.selectedAnswerValue === answer.id;
    const isEvaluation = props.displayCorrectId;
    const isThisCorrect = props.displayCorrectId === answer.id;

    let style = null;
    if (isEvaluation) {
      if (isThisCorrect) {
        style = correctAnswerStyle;
      } else if (isChecked) {
        style = incorrectAnswerStyle;
      } else {
        style = disabledButtonStyle;
      }
    }

    return (
      <div className="quiz--answer-single-radio" key={answer.id} >
        <input 
          required
          type="radio"
          id={answer.id}
          name={props.id}
          value={answer.id}
          checked={isChecked}
          onChange={props.handleChange}
          disabled={isEvaluation ? true : false}
        />
        <label 
          style={style} 
          htmlFor={answer.id}
        >
          {parse(answer.text)}
        </label>
      </div>
    )
  });

  return (
    <>
      <fieldset className="quiz--question">
        <legend className="quiz--question-text" >{parse(props.question)}</legend>
        <div className="quiz--answer-radios">
          {answerElements}
        </div>
      </fieldset> 
      <hr/>
    </>
  )
}