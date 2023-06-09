import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}></ReactQueryDevtools>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
