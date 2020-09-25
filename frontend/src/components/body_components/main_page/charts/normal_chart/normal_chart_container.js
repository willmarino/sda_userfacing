import { connect } from 'react-redux';
import { fetchPredictions } from '../../../../../actions/predictions';
import NormalChart from './normal_chart';

const msp = (state) => ({
  predictions: state.predictions
})

const mdp = (dispatch) => ({
  fetchPredictions: () => dispatch(fetchPredictions())
})

export default connect(msp, mdp)(NormalChart);