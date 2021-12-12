import React from "react";
import parse from "html-react-parser";


export default function QuizQuestion(props) {

  const answerElements = props.answers.map( (answer) => {
    return (
      <div className="quiz--answer-single-radio" key={answer.id} >
        <input 
          required
          type="radio"
          id={answer.id}
          name={props.id}
          value={answer.id}
          checked={props.selectedAnswerValue === answer.id}
          onChange={props.handleChange}
        />
        <label htmlFor={answer.id}>{parse(answer.text)}</label>
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