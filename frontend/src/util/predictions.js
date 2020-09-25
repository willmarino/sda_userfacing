import axios from 'axios';

export const fetchPredictions = () => (
  axios.get("/predictions/")
)

export const fetchMostRecentPrediction = () => (
  axios.get("/predictions/most_recent")
)