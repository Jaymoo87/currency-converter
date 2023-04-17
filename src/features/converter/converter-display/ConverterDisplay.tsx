import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ConverterDisplay = ({ amount, currencyOne, currencyTwo, convertedAmount, date, time }: any) => {
  return (
    <Box textAlign="right">
      <Text fontSize="lg" fontWeight="bold" color="#754668">
        {amount} {currencyOne}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="#754668">
        {convertedAmount} {currencyTwo}
      </Text>
      <Text fontSize="2xs" color="#4DAA57">
        Market rates collected @ {date} {time}
      </Text>
    </Box>
  );
};

export default ConverterDisplay;
