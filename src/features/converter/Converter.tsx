import React from "react";
import { Text, Spinner, Box } from "@chakra-ui/react";

import { useCurrency } from "../common/useCurrency";
import ConverterHeader from "./components/converter-header";
import ConverterOption from "./components/converter-option";
import ConverterInput from "./components/converter-input";
import ConverterDisplay from "./converter-display";

const Converter = () => {
  const {
    amount,
    setAmount,
    currencyOne,
    currencyTwo,
    setCurrencyOne,
    setCurrencyTwo,
    ratesData,
    symbolsData,
    date,
    time,
    currencyList,
    convertedAmount,
    isError,
    isLoading,
  } = useCurrency();

  if (isError) {
    return (
      <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
        Something is Wrong... It's probably your fault
      </Text>
    );
  }

  if (isLoading) {
    <Spinner margin="auto" size="sl" thickness="4px" speed="0.65s" color="purple.500" emptyColor="purple.200" />;
  }

  return (
    <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
      <ConverterHeader />
      <ConverterOption
        symbol={symbolsData.data}
        currencyList={currencyList}
        onCurrencyChange={setCurrencyOne}
        currency={currencyOne}
      />
      <ConverterOption
        symbol={symbolsData.data}
        currencyList={currencyList}
        onCurrencyChange={setCurrencyTwo}
        currency={currencyTwo}
      />
      <ConverterInput value={amount} onAmountChange={setAmount} />
      <ConverterDisplay />
    </Box>
  );
};

export default Converter;
