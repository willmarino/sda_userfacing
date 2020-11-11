import { connect } from 'react-redux';
import LinRegChart from './lin_reg_chart';

const msp = (state) => ({
  predictions: state.predictions
})

export default connect(msp, null)(LinRegChart)