import { connect } from 'react-redux';
import { fetchPredictions, fetchMostRecentPrediction } from '../../../../actions/predictions';
import ChartDisplay from './chart_display';


const mdp = (dispatch) => ({
  fetchPredictions: () => dispatch(fetchPredictions()),
  fetchMostRecentPrediction: () => dispatch(fetchMostRecentPrediction())
})

export default connect(null, mdp)(ChartDisplay);