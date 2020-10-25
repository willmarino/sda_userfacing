import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderNav from './header_nav';
import SocialsButton from './socials/socials_button';

const Header = (props) => {
  // const confusionAbatement = (props.location.pathname === '/') ? <p>Check out the about page for more information</p> : null;
  return(
    <div className='header'>
      <p className="header-header">Stock Price Analysis</p>
      {/* {confusionAbatement} */}
      <SocialsButton/>
      <HeaderNav/>
    </div>
  )
}

export default withRouter(Header);