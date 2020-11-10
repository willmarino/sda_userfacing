import {
  RECEIVE_PRICE,
  RECEIVE_PRICES
} from '../actions/price_actions';


const PricesReducer = (state={}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_PRICE:
      newState[action.stock] = action.price;
    case RECEIVE_PRICES:
      return action.priceInfoObj;
    default:
      return state;
  }

}

export default PricesReducer;