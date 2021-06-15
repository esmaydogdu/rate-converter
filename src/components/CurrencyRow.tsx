import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

export const CurrencyRow = (props: any) => {
  return (
    <InputGroup
      className="p-2"
      data-testid={`${props.testidPrefix}-currency-row`}
    >
      <FormControl
        className="text-light bg-dark"
        data-testid={`${props.testidPrefix}-currency-row-input`}
        value={props.amount}
        type="number"
        min='0'
        onChange={props.handleAmountChange}
      />
      <DropdownButton
        data-testid={`${props.testidPrefix}-currency-row-dropdown`}
        as={InputGroup.Append}
        variant="secondary"
        title={props.rate}
      >
        {Object.keys(props.rates).map((rate) => {
          if (rate === props.distinctRate) return null;
          return (
            <Dropdown.Item
              data-testid={`${props.testidPrefix}-currency-row-dropdown-item`}
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
