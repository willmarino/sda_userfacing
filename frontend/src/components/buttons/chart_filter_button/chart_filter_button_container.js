import { connect } from 'react-redux';
import ChartFilterButton from './chart_filter_button';

import {
  changeAlgorithm,
  changeStock,
  changeTimeframe
} from '../../../actions/fetch_config';

const msp = (state, ownProps) => ({
  curOption: state.config.fetchConfig[ownProps.label],
  label: ownProps.label,
  options: ownProps.options
})

const mdp = (dispatch) => ({
  changeAlgorithm: (algo) => dispatch(changeAlgorithm(algo)),
  changeStock: (stock) => dispatch(changeStock(stock)),
  changeTimeframe: (timeframe) => dispatch(changeTimeframe(timeframe))
})

export default connect(msp, mdp)(ChartFilterButton);

