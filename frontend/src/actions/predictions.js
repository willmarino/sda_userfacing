import * as PredictionsUtil from '../util/predictions';

export const RECEIVE_PREDICTIONS = "RECEIVE_PREDICTIONS";
export const RECEIVE_PREDICTION = "RECEIVE_PREDICTION";
export const REMOVE_PREDICTION = "REMOVE_PREDICTION";
export const REMOVE_OLDEST_PREDICTION = "REMOVE_OLDEST_PREDICTION";

const receivePredictions = (predictions) => ({
  type: RECEIVE_PREDICTIONS,
  predictions
})

const receivePrediction = (prediction) => ({
  type: RECEIVE_PREDICTION,
  prediction
})

const removeOldestPrediction = () => ({
  type: REMOVE_OLDEST_PREDICTION
})

export const fetchPredictions = (options) => (dispatch) => (
  PredictionsUtil.fetchPredictions(options)
    .then((res) => {
      dispatch(receivePredictions(res));
    })
    .catch((err) => console.log(err))
)

export const fetchMostRecentPrediction = (stock) => (dispatch) => (
  PredictionsUtil.fetchMostRecentPrediction(stock)
    .then((res) => {
      dispatch(receivePrediction(res));
    })
    .catch((err) => console.log(err))
)