import React, { useState } from 'react'
import state from './object/state';
import Question from './Question';
import Res from './Res';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [res, setRes] = useState({});

  const numberOfRightAnswers = Object.keys(res).reduce((accumulator, questionNumber) => {
    if (res[questionNumber] === state.questions[questionNumber].answer) {
      accumulator += 1;
    }
    return accumulator
  }, 0)

  const restart = () => {
    setRes({})
    setCurrentQuestionIndex(0)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < state.questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);

    }
  };

  const onAnswerSelect = (e) => {
    setRes(previousRes => {
      const newRes = { ...previousRes }
      newRes[currentQuestionIndex] = Number(e.target.value);
      return newRes
    })

  }

  const currentQuestion = state.questions[currentQuestionIndex];
  return (
    <div className='container'>
      <h1>Test</h1>
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onNextQuestion={handleNextQuestion}
          onPreviousQuestion={handlePreviousQuestion}
          onAnswerSelect={onAnswerSelect}
          selectedAnswer={res[currentQuestionIndex]}
        />
      )}
      {currentQuestionIndex >= state.questions.length && (
        <Res numberOfRightAnswers={numberOfRightAnswers} restart={restart} />
      )}
    </div>
  );
}

export default App;
