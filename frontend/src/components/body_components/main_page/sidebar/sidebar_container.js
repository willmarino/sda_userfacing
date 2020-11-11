import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchLatestPrices } from '../../../../actions/price_actions';

const msp = (state) => ({
  latestPrices: state.entities.prices
})

const mdp = (dispatch) => ({
  fetchLatestPrices: () => dispatch(fetchLatestPrices())
})

export default connect(msp, mdp)(Sidebar);