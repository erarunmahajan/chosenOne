import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div className='widget__box' id='wb'>
    {
      props.options.length > 0 ?
        <div>
          <h3 className="widget__message">Available Options Are</h3>
          {props.options.map((opt, i) => {
            return (
              <Option option={opt} key={i} index={i} removeSelected={props.removeSelected}></Option>
            )
          }

          )}
        </div>
        :
        <h3 className="widget__message" >Please Add some options</h3>
    }
  </div>
)
export default Options;