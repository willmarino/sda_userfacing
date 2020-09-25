import { connect } from 'react-redux';
import LinRegChart from './lin_reg_chart';

const msp = (state) => ({
  predictions: state.predictions
})

// const mdp = (dispatch) => ({
//   fetchPredictions: () => dispatch(fetchPredictions()),
//   fetchMostRecentPrediction: () => dispatch(fetchMostRecentPrediction())
// })

export default connect(msp, null)(LinRegChart)