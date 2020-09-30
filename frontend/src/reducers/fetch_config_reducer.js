import {
  CHANGE_ALGORITHM,
  CHANGE_STOCK,
  CHANGE_TIMEFRAME
} from '../actions/fetch_config';


const defaultState = {
  algorithm: 'Linear Regression',
  stock: 'TSLA',
  timeframe: 'Live'
}

const FetchConfigReducer = (state=defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case CHANGE_ALGORITHM:
      newState.algorithm = action.algo;
      return newState;
    case CHANGE_STOCK:
      newState.stock = action.stock;
      return newState;
    case CHANGE_TIMEFRAME:
      newState.timeframe = action.timeframe;
      return newState;
    default:
      return state;
  }
}

export default FetchConfigReducer;