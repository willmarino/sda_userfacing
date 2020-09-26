import axios from 'axios';
import querystring from 'querystring';

export const fetchPredictions = (options) => {
  const qsOptions = querystring.stringify(options);
  return axios.get("/predictions/", qsOptions);
}

export const fetchMostRecentPrediction = () => (
  axios.get("/predictions/most_recent")
)