import * as PredictionsUtil from '../util/predictions';

export const RECEIVE_PREDICTIONS = "RECEIVE_PREDICTIONS";
export const RECEIVE_PREDICTION = "RECEIVE_PREDICTION";
export const REMOVE_PREDICTION = "REMOVE_PREDICTION";

const receivePredictions = (predictions) => ({
  type: RECEIVE_PREDICTIONS,
  predictions
})

const receivePrediction = (prediction) => ({
  type: RECEIVE_PREDICTION,
  prediction
})

const removePrediction = (predictionId) => ({
  type: REMOVE_PREDICTION,
  predictionId
})

export const fetchPredictions = () => (dispatch) => (
  PredictionsUtil.fetchPredictions()
    .then((res) => {
      dispatch(receivePredictions(res));
    })
    .catch((err) => console.log(err))
)