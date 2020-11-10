import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import PredictionsReducer from './predictions_reducer';
import ConfigReducer from './config_reducer';

const RootReducer = combineReducers({
  predictions: PredictionsReducer,
  config: ConfigReducer,
  entities: EntitiesReducer
})

export default RootReducer;