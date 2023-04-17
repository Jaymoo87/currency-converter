import { Avatar, Flex, Select } from "@chakra-ui/react";
import { useFlags } from "../../../common/hooks/useFlags";

const ConverterOption = ({ symbol, currencyList, onCurrencyChange, currency }: any) => {
  const { flagURL } = useFlags(currency);
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg" bgColor="#B5DDA4" margin="1rem">
      <Avatar src={flagURL} size="xs" />
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
