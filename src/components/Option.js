import React from 'react'

const Option = (props) => {
    
  return (
    <div className="option">
      <p className="option__text" id={props.index}>
        {props.index+1}. {props.option}
      </p>
      <button className="button button__link" onClick={(e) => {props.removeSelected(e, props.index)}} >Remove</button>
    </div>
  )
}

export default Option;