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

function App() {
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
      <InputGroup>
        <FormControl
          value={selectedRates.amountFrom}
          type="number"
          onChange={handleAmountFromChange}
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title={selectedRates.rateFrom}
          id="input-group-dropdown-2"
        >
          {Object.keys(ratesResponse.rates).map((rate) => {
            if (rate === selectedRates.rateTo) return null;
            return (
              <Dropdown.Item
                onClick={() => handleRateFrom(rate)}
                active={selectedRates.rateFrom === rate}
                key={rate}
              >
                {rate}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </InputGroup>
      <InputGroup>
        <FormControl
          value={selectedRates.amountTo}
          type="number"
          onChange={handleAmountToChange}
          aria-describedby="basic-addon2"
        />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title={selectedRates.rateTo}
          id="input-group-dropdown-2"
        >
          {Object.keys(ratesResponse.rates).map((rate) => {
            if (rate === selectedRates.rateFrom) return null;
            return (
              <Dropdown.Item
                onClick={() => handleRateTo(rate)}
                active={selectedRates.rateTo === rate}
                key={rate}
              >
                {rate}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </InputGroup>
    </div>
  );
}

export default App;
