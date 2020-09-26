

export const CHANGE_ALGORITHM = "CHANGE_ALGORITHM";
export const CHANGE_STOCK = "CHANGE_STOCK";
export const CHANGE_TIMEFRAME = "CHANGE_TIMEFRAME";

export const changeAlgorithm = (algo) => ({
  type: CHANGE_ALGORITHM,
  algo
});

export const changeStock = (stock) => ({
  type: CHANGE_STOCK,
  stock
});

export const changeTimeframe = (timeframe) => ({
  type: CHANGE_TIMEFRAME,
  timeframe
});
