import React from "react";
import QuizQuestion from "./QuizQuestion";
import { knuthShuffle } from "knuth-shuffle";
import { nanoid } from "nanoid"



export default function QuizScreen() {
  const [questions, setQuestions] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState({});

  React.useEffect( () => {
    const triviaApiUrl = "https://opentdb.com/api.php?amount=5";
    fetch(triviaApiUrl)
      .then( response => response.json())
      .then( triviaResponse =>  {
        const data = triviaResponse.results;
        let dataWithId = data.map( questionData => {
          return {
            ...questionData, 
            id:nanoid(),
            correct_answer:{text:questionData.correct_answer, id:nanoid()},
            incorrect_answers:[questionData.incorrect_answers.map( badAnswer => (
              {text:badAnswer, id:nanoid()}
            ))]
          }
        });
        setQuestions(dataWithId)
      })
  }, [])

  function saveUserAnswer(event) {
    const answerId = event.target.value;
    const questionId = event.target.name;
    setUserAnswers( prevAnswers => ({...prevAnswers, [questionId]:answerId}));
  }

  const questionElements = questions.map( (question) => {
    let allAnswers = [].concat(...question.incorrect_answers, [question.correct_answer]);
    const shuffledAnswers = knuthShuffle(allAnswers);
    return (
      <QuizQuestion 
        key={question.id}
        id={question.id}
        question={question.question}
        answers={shuffledAnswers}
        selectedAnswerValue={userAnswers[question.id]}
        handleChange={saveUserAnswer}
      />
    )
  });

  return (
    <div className="screen quiz--container">
      <form>
        {questionElements}

        <div className="quiz--controls">
          <p className="quiz--result">You scored 3/5 correct answers</p>
          <button className="quiz--control-button" disabled>
            Play again
          </button>
        </div>
      </form>
    </div>
  )
}