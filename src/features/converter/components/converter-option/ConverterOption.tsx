import { Flex, Select } from "@chakra-ui/react";

const ConverterOption = ({ symbol, currencyList, onCurrencyChange, currency }: any) => {
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Select
        bg="F9ECCC"
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyList?.map((currency: any) => {
          <option key={`key-${currency.data}`} value={currency}>
            {currency.data} - {symbol[currency]}
          </option>;
        })}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
