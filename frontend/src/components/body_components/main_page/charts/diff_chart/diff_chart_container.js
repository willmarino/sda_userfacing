import { connect } from 'react-redux';
import { fetchPredictions } from '../../../../../actions/predictions';
import DiffChart from './diff_chart';

const msp = (state) => ({
  predictions: state.predictions
})

const mdp = (dispatch) => ({
  fetchPredictions: () => dispatch(fetchPredictions())
})

export default connect(msp, mdp)(DiffChart);