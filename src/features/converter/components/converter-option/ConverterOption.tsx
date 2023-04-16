import { Flex, Select } from "@chakra-ui/react";

const ConverterOption = ({ symbol, currencyList, onCurrencyChange, currency }: any) => {
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Select variant="unstyled" size="md" defaultValue={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencyList.map((currency: any) => {
          <option key={currency} value={currency}>
            {currency} - {symbol[currency]}
          </option>;
        })}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
