

export const RECEIVE_PRICE = 'RECEIVE_PRICE';
export const RECEIVE_PRICES = 'RECEIVE_PRICES';


export const receivePrice = (stock, price) => ({
  type: RECEIVE_PRICE,
  stock,
  price
});

export const receivePrices = (priceInfoObj) => ({
  type: RECEIVE_PRICES,
  priceInfoObj
});


