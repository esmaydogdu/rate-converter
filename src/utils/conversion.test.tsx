import { changeAmountFrom, changeAmountTo, changeRateFrom, changeRateTo } from "./conversion";

test("changing the amount from input", () => {
  const response = {
    success: true,
    timestamp: 1234,
    date: "15/6/21",
    base: "EUR",
    rates: {
      USD: 1.2,
      TRY: 10,
    },
  };
  const state = {
    amountFrom: 10,
    amountTo: 100,
    rateFrom: "EUR",
    rateTo: "TRY",
  };
  expect(changeAmountFrom(response, state, 20)).toEqual({
    amountFrom: 20,
    amountTo: 200,
    rateFrom: "EUR",
    rateTo: "TRY",
  });
});

test("changing the amount to input", () => {
  const response = {
    success: true,
    timestamp: 1234,
    date: "15/6/21",
    base: "EUR",
    rates: {
      USD: 1.2,
      TRY: 10,
    },
  };
  const state = {
    amountFrom: 10,
    amountTo: 100,
    rateFrom: "EUR",
    rateTo: "TRY",
  };
  expect(changeAmountTo(response, state, 20)).toEqual({
    amountFrom: 2,
    amountTo: 20,
    rateFrom: "EUR",
    rateTo: "TRY",
  });
});

test("changing the from rate", () => {
  // New response
  const response = {
    success: true,
    timestamp: 1234,
    date: "15/6/21",
    base: "USD",
    rates: {
      USD: 1,
      TRY: 8,
    },
  };
  const state = {
    amountFrom: 10,
    amountTo: 1,
    rateFrom: "EUR",
    rateTo: "TRY",
  };
  expect(changeRateFrom(response, state, "USD")).toEqual({
    amountFrom: 10,
    amountTo: 80,
    rateFrom: "USD",
    rateTo: "TRY",
  });
});

test("changing the to rate", () => {
  const response = {
    success: true,
    timestamp: 1234,
    date: "15/6/21",
    base: "EUR",
    rates: {
      USD: 1.2,
      TRY: 10,
    },
  };
  const state = {
    amountFrom: 10,
    amountTo: 1,
    rateFrom: "EUR",
    rateTo: "TRY",
  };
  expect(changeRateTo(response, state, "USD")).toEqual({
    amountFrom: 10,
    amountTo: 12,
    rateFrom: "EUR",
    rateTo: "USD",
  });
});
