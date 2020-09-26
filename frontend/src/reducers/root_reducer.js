import { combineReducers } from 'redux';
import PredictionsReducer from './predictions_reducer';
import ConfigReducer from './config_reducer';

const RootReducer = combineReducers({
  predictions: PredictionsReducer,
  config: ConfigReducer
})

export default RootReducer;