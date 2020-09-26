import { connect } from 'react-redux';
import { fetchPredictions, fetchMostRecentPrediction } from '../../../../actions/predictions';
import { startDatafeed, stopDatafeed } from '../../../../actions/datafeed_config';
import ChartDisplay from './chart_display';


const msp = (state) => ({
  datafeedConfig: state.config.datafeedConfig
})

const mdp = (dispatch) => ({
  fetchPredictions: () => dispatch(fetchPredictions()),
  fetchMostRecentPrediction: () => dispatch(fetchMostRecentPrediction()),
  startDatafeed: (interval) => dispatch(startDatafeed(interval)),
  stopDatafeed: () => dispatch(stopDatafeed())
})

export default connect(msp, mdp)(ChartDisplay);