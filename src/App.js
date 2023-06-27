import React, { useState } from 'react'
import state from './object/state';
import Question from './Question';
import Res from './Res';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [flag, setFlag] = useState(0);
  const [res, setRes] = useState(0);

  const restart = () => {
    setAnswer(0)
    setFlag(0)
    setRes(0)
    setCurrentQuestionIndex(0)
    handleNextQuestion()
  }

  const clearRadioSelection = () => {
    const radioButtons = document.getElementsByName('q1');
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setFlag(0);
      setAnswer(0);
      setRes(prevRes => prevRes + answer);
      clearRadioSelection();
    }
  };

  const handlePreviousQuestion = () => {
    // if (currentQuestionIndex > 0) {
    //   setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    //   setFlag(0);
    //   setAnswer(0);
    //   setRes((prevRes) => prevRes - answer);
    //   clearRadioSelection();
    // }
  };

  const getAnswers = (e) => {
    if (e.target.value === 'yes') {
      if (flag === 0) {
        setAnswer(prevAnswer => prevAnswer + 1)
        setFlag(flag + 1)
      } else {
        setAnswer(answer)
      }
    } else {
      if (flag !== 0) {
        setAnswer(answer - 1)
        setFlag(flag - 1)
      } else {
        setAnswer(answer)
      }
    }
  }

  const currentQuestion = state.questions[currentQuestionIndex];
  return (
    <div className='container'>
      <h1>Test</h1>
      {currentQuestion && (
        <Question
          questionNumber={currentQuestion.questionNumber}
          questions={currentQuestion.questions}
          var1={currentQuestion.var1}
          var2={currentQuestion.var2}
          var3={currentQuestion.var3}
          value1={currentQuestion.value1}
          value2={currentQuestion.value2}
          value3={currentQuestion.value3}
          btn={currentQuestion.btn}
          onNextQuestion={handleNextQuestion}
          onPreviousQuestion={handlePreviousQuestion}
          getAnswers={getAnswers}
        />
      )}
      {currentQuestionIndex >= 4 && (
        <Res res={res} restart={restart} />
      )}
      {/* <div>{answer}</div>
      <div>{res}</div> */}
    </div>
  );
}

export default App;
