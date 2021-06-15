type Response = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
};

type Rates = {
  [key: string]: number;
};

type State = {
  amountFrom: number;
  amountTo: number;
  rateFrom: string;
  rateTo: string;
};

// Changes amount from(from input) and amount to(calculation).
export const changeAmountFrom = (
  response: Response,
  state: State,
  value: number
) => {
  return {
    ...state,
    amountFrom: value,
    amountTo: value * response.rates[state.rateTo],
  };
};

// Changes amount from(calculation) and amount to(from input).
export const changeAmountTo = (
  response: Response,
  state: State,
  value: number
) => {
  return {
    ...state,
    amountFrom: value / response.rates[state.rateTo],
    amountTo: value,
  };
};

// Takes a new response according to the rate from, changes rate from(with dropdown select) and amount to(calculation)
export const changeRateFrom = (
  response: Response,
  state: State,
  target: string
) => {
  return {
    ...state,
    rateFrom: target,
    amountTo: state.amountFrom * response.rates[state.rateTo],
  };
};

// Changes rate to(with dropdown select) and amount to(calculation).
export const changeRateTo = (
  response: Response,
  state: State,
  target: string
) => {
  return {
    ...state,
    rateTo: target,
    amountTo: state.amountFrom * response.rates[target],
  };
};
