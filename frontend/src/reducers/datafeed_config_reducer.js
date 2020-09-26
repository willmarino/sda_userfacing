import {
  START_DATAFEED,
  STOP_DATAFEED
} from '../actions/datafeed_config';

const defaultState = {
  live: false,

}

const DatafeedConfigReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case START_DATAFEED:
      return { live: true, interval: action.interval }
    case STOP_DATAFEED:
      clearInterval(state.interval);
      return { live: false, interval: null }
    default:
      return state;
  }
}

export default DatafeedConfigReducer;