import React from 'react';

const Action = (props) => {
  const checkDisabled = !props.options.length;
  return (
    <div className="action">
      <button className="big-button" onClick={props.chooseOne} disabled={checkDisabled}>Lets Choose</button>
      <div className="widget-header">
        <h3>Total Options <i><u>{props.options.length}</u></i></h3>
        <button className="button button__link" onClick={props.removeAll} disabled={checkDisabled}>Remove All</button>
      </div>
    </div>
  )
}
export default Action;