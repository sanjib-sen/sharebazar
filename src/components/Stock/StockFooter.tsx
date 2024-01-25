"use client";

import { StockPropsType } from "@/types/stock";
import { Button } from "@/components/ui/button";
import { useStockFetch } from "@/lib/fetchStock";

export function StockFooter({ props }: { props: StockPropsType }) {
  const { refetch, isFetching } = useStockFetch(props.companyName);
  function onRefreshHandler() {
    refetch();
  }
  return (
    <Button
      onClick={onRefreshHandler}
      disabled={isFetching}
      className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2"
    >
      আবার চেক করো
    </Button>
  );
}
