import { connect } from 'react-redux';
import ChartDisplay from './chart_display';
import { fetchPredictions } from '../../../../actions/predictions';

const msp = (state) => ({
  predictions: state.predictions
})

const mdp = (dispatch) => ({
  fetchPredictions: () => dispatch(fetchPredictions())
})

export default connect(msp, mdp)(ChartDisplay);