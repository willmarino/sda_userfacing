
export const START_DATAFEED = "START_DATAFEED";
export const STOP_DATAFEED = "STOP_DATAFEED";

export const startDatafeed = (interval) => ({
  type: START_DATAFEED,
  interval
})

export const stopDatafeed = () => ({
  type: STOP_DATAFEED
})