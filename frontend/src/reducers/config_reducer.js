import { combineReducers } from 'redux';
import DatafeedConfigReducer from './datafeed_config_reducer';
import FetchConfigReducer from './fetch_config_reducer';

const ConfigReducer = combineReducers({
  datafeedConfig: DatafeedConfigReducer,
  fetchConfig: FetchConfigReducer
})

export default ConfigReducer;