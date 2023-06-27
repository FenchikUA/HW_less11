import React from 'react'

const Question = (props) => {

  return (
    <div className="test-wrapper">
      <h2 className='question-title'><span>{props.questionNumber}</span>{props.questions}</h2>
      <div className="question-inputs">
        <input type="radio" className='question-input' name='q1' id='q1' value={props.value1} onChange={(e) => props.getAnswers(e)} />
        <label htmlFor='q1'> {props.var1}</label>
      </div>
      <div className="question-inputs">
        <input type="radio" className='question-input' name='q1' id='q2' value={props.value2} onChange={(e) => props.getAnswers(e)} />
        <label htmlFor='q2'> {props.var2}</label>
      </div>
      <div className="question-inputs">
        <input type="radio" className='question-input' name='q1' id='q3' value={props.value3} onChange={(e) => props.getAnswers(e)} />
        <label htmlFor='q3'> {props.var3}</label>
      </div>
      <div className='right-fix'>
        <input type="button" className='question-button' value='Назад' onClick={props.onPreviousQuestion} />
        <input type="button" className='question-button' value={props.btn} onClick={props.onNextQuestion} />
      </div>
    </div>
  )
}

export default Question
