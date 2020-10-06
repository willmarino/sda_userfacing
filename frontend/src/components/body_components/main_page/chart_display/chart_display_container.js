import { connect } from 'react-redux';
import { fetchPredictions, fetchMostRecentPrediction } from '../../../../actions/predictions';
import { startDatafeed, stopDatafeed } from '../../../../actions/datafeed_config';
import { changeTimeframe } from '../../../../actions/fetch_config';
import ChartDisplay from './chart_display';


const msp = (state) => ({
  datafeedConfig: state.config.datafeedConfig,
  fetchConfig: state.config.fetchConfig
})

const mdp = (dispatch) => ({
  fetchPredictions: (options) => dispatch(fetchPredictions(options)),
  fetchMostRecentPrediction: (stock) => dispatch(fetchMostRecentPrediction(stock)),
  startDatafeed: (interval) => dispatch(startDatafeed(interval)),
  stopDatafeed: () => dispatch(stopDatafeed()),
  changeTimeframe: (time) => dispatch(changeTimeframe(time))
})

export default connect(msp, mdp)(ChartDisplay);