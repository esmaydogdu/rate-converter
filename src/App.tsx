import React, { useState, useEffect } from "react";
import "./App.scss";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import {
  changeAmountFrom,
  changeAmountTo,
  changeRateFrom,
  changeRateTo,
  Response,
  State,
} from "./utils/conversion";
import { generateApiURL } from "./utils/api";
import { CurrencyRow } from "./components/CurrencyRow";

const App = () => {
  // All rates from API
  const [ratesResponse, setRatesResponse] = useState({} as Response);

  // Selected state
  const [selectedRates, setSelectedRates] = useState({
    amountFrom: 0,
    amountTo: 0,
    rateFrom: "EUR",
    rateTo: "TRY",
  } as State);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const getRates = async (base: string) => {
    setLoading(true);
    try {
      const response = await fetch(generateApiURL(base)).then((res) =>
        res.json()
      );
      if (!response.success) {
        setError(true);
        return;
      }
      setRatesResponse(response);
      setSelectedRates(changeRateFrom(response, selectedRates, base));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const handleAmountFromChange = (e: any) => {
    setSelectedRates(
      changeAmountFrom(ratesResponse, selectedRates, e.target.value)
    );
  };

  const handleAmountToChange = (e: any) => {
    setSelectedRates(
      changeAmountTo(ratesResponse, selectedRates, e.target.value)
    );
  };

  const handleRateFrom = (rate: string) => {
    // Do api call when the from rate changes.
    getRates(rate);
  };

  const handleRateTo = (rate: string) => {
    setSelectedRates(changeRateTo(ratesResponse, selectedRates, rate));
  };

  // Api call on the componentDidMount
  useEffect(() => {
    getRates(selectedRates.rateFrom);
  }, []);

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <CurrencyRow
        amount={selectedRates.amountFrom}
        handleAmountChange={handleAmountFromChange}
        rate={selectedRates.rateFrom}
        rates={ratesResponse.rates}
        distinctRate={selectedRates.rateTo}
        handleRateClick={handleRateFrom}
      />
      <CurrencyRow
        amount={selectedRates.amountTo}
        handleAmountChange={handleAmountToChange}
        rates={ratesResponse.rates}
        rate={selectedRates.rateTo}
        distinctRate={selectedRates.rateFrom}
        handleRateClick={handleRateTo}
      />
    </div>
  );
};

export default App;
