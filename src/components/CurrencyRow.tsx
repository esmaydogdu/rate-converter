import React, { useState, useEffect } from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
export const CurrencyRow = (props: any) => {
  return (
    <InputGroup data-testid='currency-row'>
      <FormControl
        data-testid="currency-row-input"
        value={props.amount}
        type="number"
        onChange={props.handleAmountChange}
      />
      <DropdownButton
        data-testid="currency-row-dropdown"
        as={InputGroup.Append}
        variant="outline-secondary"
        title={props.rate}
      >
        {Object.keys(props.rates).map((rate) => {
          if (rate === props.distinctRate) return null;
          return (
            <Dropdown.Item
              data-testid="currency-row-dropdown-item"
              onClick={() => props.handleRateClick(rate)}
              active={props.rate === rate}
              key={rate}
            >
              {rate}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </InputGroup>
  );
};
