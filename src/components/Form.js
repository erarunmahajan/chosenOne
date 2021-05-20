import React, { useState } from 'react';

const Form = (props) => {
  const[error, setError] = useState('');
  
  const handleSave =(e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value.trim()
    const error = props.handleSaveOption(option)
    if(!error){
      e.target.elements.option.value=''
    }
    setError(error);
  }

  return (
    <form onSubmit={handleSave} className="form">
      <input
        name='option'
        className="form__input"
        placeholder='Enter your Option'
        autoFocus
      />
      <button className='button'>Save</button>
      {error && <p className="form-error" >{error}</p>}
    </form>
  )
}

export default Form;