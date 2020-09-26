import { connect } from 'react-redux';
import ChartFilterButtons from './chart_filter_buttons';

import {
  changeAlgorithm,
  changeStock,
  changeTimeframe
} from '../../../actions/fetch_config';

const msp = (state) => ({
  fetchConfig: state.config.fetchConfig
})

const mdp = (dispatch) => ({
  changeAlgorithm: (algo) => dispatch(changeAlgorithm(algo)),
  changeStock: (stock) => dispatch(changeStock(stock)),
  changeTimeframe: (timeframe) => dispatch(changeTimeframe(timeframe))
})

export default connect(msp, mdp)(ChartFilterButtons);