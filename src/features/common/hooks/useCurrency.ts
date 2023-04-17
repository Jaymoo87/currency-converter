import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { fetchRates, fetchSymbols } from "../../converter/api/fetchData";

interface useCurrencyProps {
  amount: number;
  currencyOne: string;
  currencyTwo: string;
}

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState<string>("USD");
  const [currencyTwo, setCurrencyTwo] = useState<string>("EUR");

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ["rates", currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ rates, date, timestamp }: any) => {
          return { rates, date, timestamp };
        },
        keepPreviousData: true,
      },
      {
        queryKey: ["symbols"],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ symbols }: any) => symbols,
      },
    ],
  });

  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  const convertedAmount = (ratesData.data?.rates[currencyTwo] * amount).toFixed(2);

  const date = new Date(ratesData.data?.date).toLocaleDateString();
  const time = new Date(ratesData.data?.timestamp).toLocaleTimeString("en-US");

  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : [];

  // console.log(ratesData.data);

  return {
    amount,
    setAmount,
    setCurrencyOne,
    currencyOne,
    setCurrencyTwo,
    currencyTwo,
    ratesData,
    symbolsData,
    date,
    time,
    currencyList,
    convertedAmount,
    isError,
    isLoading,
  };
};
