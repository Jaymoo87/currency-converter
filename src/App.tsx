import { useState } from "react";
import Converter from "./features/converter/Converter";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex bgGradient="linear(to-t,#587D71 ,#4DAA57 )" height="100vh" justifyContent="center">
        <Converter />
      </Flex>
    </>
  );
}

export default App;
