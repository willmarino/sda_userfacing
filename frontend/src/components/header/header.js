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
      width: '250px',
      fontSize: '22px',
      fontWeight: 500
    },
    button: {
      marginRight: '20px'
    }
  }))
  const classes = useStyles();

  const navPages = (path) => {
    return () => {
      props.history.push(path);
    }
  }
  return(
    <div className='header-container'>
      <div className='header'>
        <p className='header-section'></p>
        <p className={classes.headline}>Stock Data Analysis</p>
        <div className='header-section'>
          <Button color='secondary' variant='contained' className={classes.button} onClick={navPages('/')}>Home</Button>
          <Button color='secondary' variant='contained' className={classes.button} onClick={navPages('/about')}>About</Button>
        </div>
      </div>
      {/* <p className="header-header">Stock Price Analysis</p>
      <SocialsButton/>
      <HeaderNav/> */}
    </div>
  )
}

export default withRouter(Header);