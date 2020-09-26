import { combineReducers } from 'redux';
import PredictionsReducer from './predictions_reducer';
import FetchConfigReducer from './fetch_config_reducer';

const RootReducer = combineReducers({
  predictions: PredictionsReducer,
  fetchConfig: FetchConfigReducer
})

export default RootReducer;