import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h2 className='header__title'>{props.title}</h2>
        <h5 className='header__subtitle'>{props.subTitle}</h5>
      </div>
    </div>
  )
}

Header.defaultProps = {
  title: 'Choosen One',
  subTitle: 'Let Choose Your Computer!!'
}
export default Header;