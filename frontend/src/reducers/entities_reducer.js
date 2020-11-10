import { combineReducers } from 'redux';
import PricesReducer from './prices_reducer';

const EntitiesReducer = combineReducers({
  prices: PricesReducer
})

export default EntitiesReducer;