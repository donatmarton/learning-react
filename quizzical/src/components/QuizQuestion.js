import React from "react";

export default function QuizQuestion(props) {
  return (
    <div className="quiz--question">
      <fieldset className="quiz--question">
        <legend className="quiz--question-text">How would one say goodbye in spanish?How would one say goodbye in spanish?</legend>
        <div className="quiz--answer-radios">
          <input 
            type="radio"
            id={"question"+props.id+"answer1"}
            name={"question"+props.id}
            value="unemployed"
            // checked={}
            // onChange={}
          />
          <label htmlFor={"question"+props.id+"answer1"}>Adiós</label>

          <input 
            type="radio"
            id={"question"+props.id+"answer2"}
            name={"question"+props.id}
            value="unemployed"
            // checked={}
            // onChange={}
          />
          <label htmlFor={"question"+props.id+"answer2"}>Hola</label>

          <input 
            type="radio"
            id={"question"+props.id+"answer3"}
            name={"question"+props.id}
            value="unemployed"
            // checked={}
            // onChange={}
          />
          <label htmlFor={"question"+props.id+"answer3"}>Au revoir</label>

          <input 
            type="radio"
            id={"question"+props.id+"answer4"}
            name={"question"+props.id}
            value="unemployed"
            // checked={}
            // onChange={}
          />
          <label htmlFor={"question"+props.id+"answer4"}>Salir</label>
        </div>
      </fieldset> 
      <hr/>
    </div> 
  )
}