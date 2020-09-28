import { connect } from 'react-redux';
import { stopDatafeed } from '../../../actions/datafeed_config';
import {
  changeAlgorithm,
  changeStock,
  changeTimeframe
} from '../../../actions/fetch_config';
import ChartFilterButtons from './chart_filter_buttons';

const msp = (state) => ({
  fetchConfig: state.config.fetchConfig
})

const mdp = (dispatch) => ({
  changeAlgorithm: (algo) => dispatch(changeAlgorithm(algo)),
  changeStock: (stock) => dispatch(changeStock(stock)),
  changeTimeframe: (timeframe) => dispatch(changeTimeframe(timeframe)),
  stopDatafeed: () => dispatch(stopDatafeed())
})

export default connect(msp, mdp)(ChartFilterButtons);