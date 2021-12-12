import React from "react";
import QuizQuestion from "./QuizQuestion";
import { knuthShuffle } from "knuth-shuffle";
import { nanoid } from "nanoid"


export default function QuizScreen() {
  const [questions, setQuestions] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState({});
  const [result, setResult] = React.useState( {
    evaluated: false,
    correct: null,
  });

  React.useEffect( () => {
    const triviaApiUrl = "https://opentdb.com/api.php?amount=5";
    fetch(triviaApiUrl)
      .then( response => response.json())
      .then( triviaResponse =>  {
        const data = triviaResponse.results;
        let dataWithId = data.map( questionData => {
          const correctAnswer = {
            text:questionData.correct_answer,
            id:nanoid()
          };
          const incorrectAnswers = questionData.incorrect_answers.map( badAnswer => (
            {
              text:badAnswer,
              id:nanoid()
            }
          ));
          const allAnswers = incorrectAnswers.concat(correctAnswer);
          const shuffledAnswers = knuthShuffle(allAnswers);
          return {
            ...questionData, 
            id:nanoid(),
            correctAnswerId: correctAnswer.id,
            answers: shuffledAnswers,
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

  function evaluateQuiz(event) {
    event.preventDefault();

    const correct = questions.reduce( (correctAnswers, question) => {
      if (userAnswers[question.id] === question.correctAnswerId) {
        return ++correctAnswers;
      } else {
        return correctAnswers;
      }
    }, 0)

    setResult( {
      evaluated: true,
      correct: correct,
    });
  }

  const questionElements = questions.map( (question) => {
    return (
      <QuizQuestion 
        key={question.id}
        id={question.id}
        question={question.question}
        answers={question.answers}
        selectedAnswerValue={userAnswers[question.id]}
        handleChange={saveUserAnswer}
        displayCorrectId={result.evaluated ? question.correctAnswerId : null}
      />
    )
  });

  return (
    <div className="screen quiz--container">
      <form onSubmit={evaluateQuiz}>
        {questionElements}

        <div className="quiz--controls">
          <p className="quiz--result">
            {result.evaluated ? 
              `You scored ${result.correct}/5 correct answers`
              :
              'Answer all questions'
            }
          </p>
          <button className="quiz--control-button">
            Play again
          </button>
        </div>
      </form>
    </div>
  )
}