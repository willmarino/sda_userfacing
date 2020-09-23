import { combineReducers } from 'redux';
import PredictionsReducer from './predictions_reducer';

const RootReducer = combineReducers({
  predictions: PredictionsReducer
})

export default RootReducer;