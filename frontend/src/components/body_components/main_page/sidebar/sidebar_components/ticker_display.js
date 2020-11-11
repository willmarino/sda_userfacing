import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const TickerDisplay = (props) => {
  const { prices } = props;
  const useStyles = makeStyles((theme) => ({
    mainButton: {
      width: '100%',
      margin: '15px'
    },
    button: {
      width: '80%',
      background: 'white'
    }
  }))
  const classes = useStyles();
  const priceButtons = prices.map((price) => {
    return <Button color='primary' variant='outlined' className={classes.button}>{price.stock} : {price.price}</Button>
  })
  return(
    <div className='ticker-display'>
      <Button color='primary' variant='contained' className={classes.mainButton}>Current Stock Pricing</Button>
      {priceButtons}
    </div>
  )
}

export default TickerDisplay;