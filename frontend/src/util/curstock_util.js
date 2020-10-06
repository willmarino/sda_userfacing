import axios from 'axios';

export const fetchAvailableStocks = () => {
  return axios.get("/available_stocks");
}