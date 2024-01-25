"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { StockPropsType } from "@/types/stock";
import { useIsFetching, useQueries } from "@tanstack/react-query";
import { fetchStock } from "@/lib/fetchStock";

export function Footer({ stocks }: { stocks: StockPropsType[] }) {
  const isFetching = useIsFetching();
  const queries = useQueries({
    queries: stocks.map((company) => ({
      queryKey: ["stock", company.companyName],
      queryFn: () => fetchStock(`/api/stock?company=${company.companyName}`),
    })),
  });
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        disabled={isFetching ? true : false}
        onClick={() => {
          queries.forEach((query) => query.refetch());
        }}
        className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2"
      >
        সবগুলো চেক করো
      </Button>
      <DarkModeToggle />
    </div>
  );
}
