import React from 'react'

const Res = (props) => {
  return (
    <div>
      <p className='res-p'>Кількість вірних відповідей</p>
      <div className="result">{props.res}</div>
      <div className='center-fix'>
        <button onClick={props.restart} className='restart-btn'>Restart</button>
      </div>
    </div>
  )
}

export default Res
