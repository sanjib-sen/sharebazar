"use client";
import { useQuery } from "@tanstack/react-query";

class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const fetchStock = async (url: string) => {
  const res = await fetch(url);
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

export const useStockFetch = (company: string) => {
  const { ...queryResult } = useQuery({
    queryKey: ["stock", company],
    queryFn: async () => await fetchStock(`/api/stock?company=${company}`),
  });
  return queryResult;
};
