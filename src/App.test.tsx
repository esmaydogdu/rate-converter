import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("[App.tsx]", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render the loaders", () => {
    const loaderText = screen.getByTestId("loader-text");
    expect(loaderText).toBeInTheDocument();
  });

  it("should work when from input is changed", async () => {
    await waitFor(() => screen.getByTestId("app-container"));
    const amountFromInput = screen.getByTestId("from-currency-row-input");

    // Writing 10 euro in from input expecting try conversion.
    fireEvent.change(amountFromInput, { target: { value: "10" } });
    const amountToInput = screen.getByTestId("to-currency-row-input");
    expect(amountToInput.value).toBe("101.87943000000001");
  });

  it("should work when the from dropdown changes also from input receives amount", async () => {
    await waitFor(() => screen.getByTestId("app-container"));
    let rateFromDropdown = screen
      .getByTestId("from-currency-row-dropdown")
      .querySelector("button");

    // Clicking the from rate dropdown to see the list.
    fireEvent.click(rateFromDropdown as any);
    await waitFor(() =>
      screen.getAllByTestId("from-currency-row-dropdown-item")
    );
    const rateFromUSD = screen.getAllByTestId(
      "from-currency-row-dropdown-item"
    )[2];
    expect(rateFromUSD.textContent).toBe("USD");

    // Changing the from rate to USD.
    fireEvent.click(rateFromUSD);
    await waitFor(() => screen.getByTestId("app-container"));
    rateFromDropdown = screen
      .getByTestId("from-currency-row-dropdown")
      .querySelector("button");
    expect((rateFromDropdown as any).textContent).toBe("USD");
    const amountFromInput = screen.getByTestId("from-currency-row-input");
    // Entering 10 as USD.
    fireEvent.change(amountFromInput, { target: { value: "10" } });
    const amountToInput = screen.getByTestId("to-currency-row-input");
    // Expecting 83.99 TRY.
    expect(amountToInput.value).toBe("83.99749999999999");
  });

  it("should work when the to input amount changes", async () => {
    await waitFor(() => screen.getByTestId("app-container"));
    const amountToInput = screen.getByTestId("to-currency-row-input");
    const amountFromInput = screen.getByTestId("from-currency-row-input");

    fireEvent.change(amountToInput, { target: { value: "10" } });
    expect(amountFromInput.value).toBe("0.9815524095492092");

    // Changing to rate dropdown to USD
    let rateToDropdown = screen
      .getByTestId("to-currency-row-dropdown")
      .querySelector("button");
    expect(rateToDropdown).toBeInTheDocument();

    // Clicking the from rate dropdown to see the list.
    fireEvent.click(rateToDropdown as any);
    await waitFor(() => screen.getAllByTestId("to-currency-row-dropdown-item"));
    const rateToUSD = screen.getByText("USD");

    fireEvent.click(rateToUSD);
    await waitFor(() => screen.getByTestId("app-container"));
    expect(amountToInput.value).toBe("1.1897357494049583");
  });

  it("should render the error page", async () => {
    await waitFor(() => screen.getByTestId("app-container"));
    let rateFromDropdown = screen
      .getByTestId("from-currency-row-dropdown")
      .querySelector("button");

    // Clicking the from rate dropdown to see the list.
    fireEvent.click(rateFromDropdown as any);
    await waitFor(() =>
      screen.getAllByTestId("from-currency-row-dropdown-item")
    );
    const rateFromError = screen.getAllByTestId(
      "from-currency-row-dropdown-item"
    )[1];
    fireEvent.click(rateFromError);
    await waitFor(() => screen.getByTestId("error-text"));
  });

  it("should render the error 404 page", async () => {
    await waitFor(() => screen.getByTestId("app-container"));
    let rateFromDropdown = screen
      .getByTestId("from-currency-row-dropdown")
      .querySelector("button");

    // Clicking the from rate dropdown to see the list.
    fireEvent.click(rateFromDropdown as any);
    await waitFor(() =>
      screen.getAllByTestId("from-currency-row-dropdown-item")
    );
    const rateFromError = screen.getAllByTestId(
      "from-currency-row-dropdown-item"
    )[0];
    fireEvent.click(rateFromError);
    await waitFor(() => screen.getByTestId("error-text"));
  });
});
