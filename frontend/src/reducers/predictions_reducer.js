import {
  RECEIVE_PREDICTIONS,
  RECEIVE_PREDICTION,
  REMOVE_PREDICTION
} from '../actions/predictions'

const PredictionsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PREDICTIONS:
      return action.predictions.data;
    case RECEIVE_PREDICTION:
    case REMOVE_PREDICTION:
    default:
      return state;
  }
}

export default PredictionsReducer;