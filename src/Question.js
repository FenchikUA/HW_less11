import React from 'react'

const Question = (props) => {

  return (
    <div className="test-wrapper">
      <h2 className='question-title'><span>{props.question.questionTitle}</span>{props.question.question}</h2>
        {props.question.variants.map((variant, index) => {
            return <div className="question-inputs">
                <input type="radio" checked={props.selectedAnswer === index} className='question-input'  id={`q${index}`} value={index} onChange={(e) => props.onAnswerSelect(e)} />
                <label htmlFor={`q${index}`}> {variant}</label>
            </div>
        })}
      <div className='right-fix'>
        <input type="button" className='question-button' value='Назад' onClick={props.onPreviousQuestion} />
        <input type="button" className='question-button' value={props.question.nextStep} onClick={props.onNextQuestion} />
      </div>
    </div>
  )
}

export default Question
