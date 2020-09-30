import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderNav from './header_nav';
import SocialsButton from './socials/socials_button';

const Header = (props) => {
  debugger;
  const confusionAbatement = (props.location.pathname === '/') ? <p>Confused? Check out the about page</p> : null;
  return(
    <div className='header'>
      <p className="header-header">Stock Price Analysis</p>
      {confusionAbatement}
      <SocialsButton/>
      <HeaderNav/>
    </div>
  )
}

export default withRouter(Header);