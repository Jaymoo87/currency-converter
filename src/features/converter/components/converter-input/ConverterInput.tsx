import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const ConverterInput = ({ value, onAmountChange }: any) => {
  return (
    <>
      <FormLabel htmlFor="amount" color="#754668">
        Amount
      </FormLabel>
      <Input
        shadow={"xl"}
        bgColor="#B5DDA4"
        borderColor="#754668"
        id="amount"
        size="lg"
        type="number"
        value={value}
        min={0}
        onChange={(e) => onAmountChange(e.target.value)}
        focusBorderColor="#F9ECCC"
      ></Input>
    </>
  );
};

export default ConverterInput;
