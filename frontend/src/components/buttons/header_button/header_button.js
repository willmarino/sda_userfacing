import React from 'react';

const HeaderButton = (props) => {
  const { destinationPath, label } = props;
  const handleClick = () => {
    window.location.hash = `${destinationPath}`;
  }
  return(
    <div onClick={handleClick} className="header-button">
      <p className='header-button-label'>{label}</p>
      <div className="header-button-underline"></div>
    </div>
  )
}

export default HeaderButton;