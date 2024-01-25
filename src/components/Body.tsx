"use client";

import { StockPropsType } from "@/types/stock";
import { Footer } from "@/components/Footer";
import { StockRoot } from "@/components/Stock/StockRoot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export function Body({ props }: { props: StockPropsType[] }) {
  const stocks = props;
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-6 pb-24">
        {stocks.map((stock: StockPropsType, index: number) => (
          <StockRoot key={index} props={stock} />
        ))}
      </div>
      <Footer stocks={stocks} />
    </QueryClientProvider>
  );
}
