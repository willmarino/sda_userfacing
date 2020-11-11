import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.fetchingInterval = null;
  }

  componentDidMount(){
    const { fetchLatestPrices } = this.props;
    fetchLatestPrices()
      .then(() => {
        this.fetchingInterval = setInterval(() => {
          fetchLatestPrices()
        }, 1000);
      })
  }

  componentWillUnmount(){
    clearInterval(this.fetchingInterval);
  }

  render(){
    const { latestPrices } = this.props;
    let prices;

    if(Object.values(latestPrices).length === 0){
      prices = <CircularProgress />;
    }else{
      prices = [];
      latestPrices.forEach((lp) => {
        prices.push(
          <p>{lp.stock} is at {lp.price}</p>
        )
      })
    }


    return(
      <div className='sidebar'>
        {prices}
      </div>
    )
  }
}

export default Sidebar;