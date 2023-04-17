import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ConverterHeader = () => {
  return (
    <Box textAlign="center" color="white" marginTop="20" marginBottom="10">
      <Text fontWeight="bolder" fontSize="3xl" color="#F9ECCC">
        Currency Converter
      </Text>
      <Text fontWeight="bold" fontSize="2xl" color="#F9ECCC">
        Up to date FX rates
      </Text>
    </Box>
  );
};

export default ConverterHeader;
