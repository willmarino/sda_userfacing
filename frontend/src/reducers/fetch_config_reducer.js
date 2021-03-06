import {
  CHANGE_ALGORITHM,
  CHANGE_STOCK,
  CHANGE_TIMEFRAME
} from '../actions/fetch_config';


const status = () => {
  const curDate = new Date();
  const day = curDate.getDay();
  const hours = curDate.getHours();
  if(day >= 1 && day <= 5){
    if(hours >= 9 && hours <= 15){
      return 'Live';
    }else{
      return 'Current Day';
    }
  }else{
    return 'Current Week';
  }
}

const defaultState = {
  algorithm: 'Linear Regression',
  stock: 'GOOG',
  timeframe: status()
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