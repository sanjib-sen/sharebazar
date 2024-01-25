"use client";
import useSWR from "swr";

class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const error = new FetchError(
      "An error occurred while fetching the data.",
      res.status,
    );
    error.message = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json() as Promise<{ company: string; price: number }>;
};

export function useFetchStock(company: string) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `/api/stock?company=${company}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  return {
    stockData: data,
    isLoading,
    isError: error,
    isValidating,
    update: mutate,
  };
}
