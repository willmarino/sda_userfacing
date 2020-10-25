import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';

const HeaderButton = (props) => {
  const { destinationPath, label } = props;
  const handleClick = () => {
    window.location.hash = `${destinationPath}`;
  }
  const useStyles = makeStyles((theme) => ({
    button: {
      fontSize: '13px'
    }
  }));
  const classes = useStyles();
  return(
    // <div onClick={handleClick} className="header-button">
    //   <p className='header-button-label'>{label}</p>
    //   <div className="header-button-underline"></div>
    // </div>
    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>{props.label}</Button>
  )
}

export default HeaderButton;