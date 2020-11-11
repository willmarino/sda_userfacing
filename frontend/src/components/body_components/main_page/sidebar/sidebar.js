import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TickerDisplay from './sidebar_components/ticker_display';

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

    if(Object.values(latestPrices).length === 0){
      return <CircularProgress />;
    }
    // else{
    //   prices = [];
    //   latestPrices.forEach((lp) => {
    //     prices.push(
    //       <p>{lp.stock} is at {lp.price}</p>
    //     )
    //   })
    // }


    return(
      <div className='sidebar'>
        <TickerDisplay prices={latestPrices}/>
        <div className='sidebar-placeholder'>
        </div>
      </div>
    )
  }
}

export default Sidebar;