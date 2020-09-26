import { connect } from 'react-redux';
import { fetchPredictions } from '../../../actions/predictions';
import ExecuteFetchButton from './execute_fetch_button';
import { stopDatafeed } from '../../../actions/datafeed_config';

const msp = (state) => ({
  fetchConfig: state.config.fetchConfig
})

const mdp = (dispatch) => ({
  fetchPredictions: (options) => dispatch(fetchPredictions(options)),
  stopDatafeed: () => dispatch(stopDatafeed())
})

export default connect(msp, mdp)(ExecuteFetchButton);