import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
// import HeaderNav from './header_nav';
// import SocialsButton from './socials/socials_button';

const Header = (props) => {
  const useStyles = makeStyles((theme) => ({
    headline: {
      fontSize: '22px',
      fontWeight: 500
    }
  }))
  const classes = useStyles();
  return(
    <div className='header-container'>
      <div className='header'>
        <p></p>
        <p className={classes.headline}>Stock Data Analysis</p>
        <div>
          <Button color='secondary' variant='contained'>Home</Button>
          <Button color='secondary' variant='contained'>About</Button>
        </div>
      </div>
      {/* <p className="header-header">Stock Price Analysis</p>
      <SocialsButton/>
      <HeaderNav/> */}
    </div>
  )
}

export default withRouter(Header);