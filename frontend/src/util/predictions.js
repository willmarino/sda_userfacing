import axios from 'axios';

export const fetchPredictions = (options) => {
  return axios.get("/predictions/", { params: options });
}

export const fetchMostRecentPrediction = (stock) => (
  axios.get(`/predictions/most_recent?stock=${stock}`)
)