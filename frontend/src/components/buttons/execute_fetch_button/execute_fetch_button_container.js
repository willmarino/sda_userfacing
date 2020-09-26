import { connect } from 'react-redux';
import { fetchPredictions } from '../../../actions/predictions';
import ExecuteFetchButton from './execute_fetch_button';

const msp = (state) => ({
  fetchConfig: state.fetchConfig
})

const mdp = (dispatch) => ({
  fetchPredictions: (options) => dispatch(fetchPredictions(options))
})

export default connect(msp, mdp)(ExecuteFetchButton);