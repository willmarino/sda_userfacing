import axios from 'axios';

export const fetchLatestPrices = () => {
  return axios.get('/prices/');
}