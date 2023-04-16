import { Flex, Select, SelectField } from "@chakra-ui/react";

const ConverterOption = ({ symbol, currencyList, onCurrencyChange, currency }: any) => {
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg" bgColor="#B5DDA4" margin="1rem">
      <Select
        shadow={"xl"}
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        outlineColor="#754668"
        outlineOffset={".5rem"}
      >
        {currencyList?.map((currency: any) => (
          <option key={`key-${currency}`} value={currency}>
            {currency} - {symbol[currency]}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
