import axios from 'axios';

export const fetchPredictions = () => (
  axios.get("/predictions/")
)