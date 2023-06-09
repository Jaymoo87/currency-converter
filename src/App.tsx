import { useState } from "react";
import Converter from "./features/converter/Converter";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex bgGradient="linear(to-t,#4DAA57 ,#587D71 )" height="100vh" justifyContent="center">
        <Converter />
      </Flex>
    </>
  );
}

export default App;
