import React from "react";
import { Text, Spinner, Box, Grid, GridItem } from "@chakra-ui/react";
import { MdCurrencyExchange } from "react-icons/md";
import { GiLoveMystery } from "react-icons/gi";
import { SiReact, SiReactquery, SiAxios, SiChakraui } from "react-icons/si";

import { useCurrency } from "../common/hooks/useCurrency";
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
    <Spinner margin="auto" size="sl" thickness="4px" speed="0.65s" color="purple.500" emptyColor="#754668" />;
  }

  return (
    <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
      <ConverterHeader />
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        padding={{ base: "6", sm: "10" }}
        gap="1rem"
        backgroundColor="#F9ECCC"
        borderRadius="lg"
      >
        <GridItem colSpan={{ base: 5, sm: 2 }} justifySelf="center" alignSelf="center">
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </GridItem>
        <GridItem display={{ base: "none", sm: "block" }} colSpan={1} justifySelf="center" alignSelf="center">
          <MdCurrencyExchange style={{ fontSize: "32", color: "#4DAA57" }} />
        </GridItem>
        <GridItem colSpan={{ base: 5, sm: 2 }} justifySelf="center" alignSelf="center">
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <ConverterInput value={amount} onAmountChange={setAmount} />
        </GridItem>
        <GridItem colSpan={3} justifySelf="right" alignSelf="right">
          <ConverterDisplay
            amount={amount}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
          />
        </GridItem>
      </Grid>

      <Text textAlign="center" marginTop="1.5rem" color="#F9ECCC">
        Built with care by Justin Murrah using React, React Query, Axios and Chakra-UI{" "}
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" marginTop="2rem" color="#754668">
        <GridItem colSpan={1} alignSelf="center" justifySelf="center">
          {<SiReact style={{ fontSize: "32" }} />}
        </GridItem>
        <GridItem colSpan={1} alignSelf="center" justifySelf="center">
          {<SiReactquery style={{ fontSize: "32" }} />}
        </GridItem>
        <GridItem colSpan={1} alignSelf="center" justifySelf="center">
          {<SiAxios style={{ fontSize: "32" }} />}
        </GridItem>
        <GridItem colSpan={1} alignSelf="center" justifySelf="center">
          {<SiChakraui style={{ fontSize: "32" }} />}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Converter;
