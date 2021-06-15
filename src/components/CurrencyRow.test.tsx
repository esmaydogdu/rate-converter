import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { CurrencyRow } from "./CurrencyRow";

const mockHandleAmountFromChange = jest.fn();
const mockHandleRateFrom = jest.fn();

describe("[CurrencyRow.tsx]", () => {
  beforeEach(() => {
    const selectedRates = {
      amountFrom: 0,
      amountTo: 0,
      rateFrom: "EUR",
      rateTo: "TRY",
    };
    const ratesResponse = {
      success: true,
      timestamp: 1623663843,
      base: "EUR",
      date: "2021-06-14",
      rates: { TRY: 10.187943, USD: 1.212096, EUR: 1, 404: 1, 500: 1 },
    };

    render(
      <CurrencyRow
        testidPrefix="from"
        amount={selectedRates.amountFrom}
        handleAmountChange={mockHandleAmountFromChange}
        rate={selectedRates.rateFrom}
        rates={ratesResponse.rates}
        distinctRate={selectedRates.rateTo}
        handleRateClick={mockHandleRateFrom}
      />
    );
  });

  it("should test the amount value on input", () => {
    const input = screen.getByTestId("from-currency-row-input");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("0");
  });

  it("should test if the dropdown rendered properly", async () => {
    const dropdown = screen.getByTestId("from-currency-row-dropdown");
    expect(dropdown).toBeInTheDocument();

    const dropdownButton = screen.getByText("EUR");
    fireEvent.click(dropdownButton);

    await waitFor(() => screen.getAllByTestId("from-currency-row-dropdown-item"));
    expect(screen.getAllByTestId("from-currency-row-dropdown-item")).toHaveLength(4);
    fireEvent.click(screen.getAllByTestId("from-currency-row-dropdown-item")[2]);
    expect(mockHandleRateFrom.mock.calls.length).toBe(1);
    expect(mockHandleRateFrom).toHaveBeenCalledWith("USD");
  });
});
