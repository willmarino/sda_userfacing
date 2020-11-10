import axios from 'axios';

export const fetchPrices = () => {
  return axios.get('/prices');
}