import {
  RECEIVE_PREDICTIONS,
  RECEIVE_PREDICTION,
} from '../actions/predictions'

const PredictionsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PREDICTIONS:
      return action.predictions.data;
    case RECEIVE_PREDICTION:
      let newState = state.concat(action.prediction.data);
      newState.shift();
      return newState;
    default:
      return state;
  }
}

export default PredictionsReducer;