"use client";

import { StockPropsType } from "@/types/stock";
import { revalidateTag } from "next/cache";
import { Button } from "@/components/ui/button";
import { useFetchStock } from "../../lib/fetchStock";

export function StockFooter({ props }: { props: StockPropsType }) {
  const { update } = useFetchStock(props.companyName);
  function onRefreshHandler() {
    update();
  }
  return (
    <Button
      onClick={onRefreshHandler}
      className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2"
    >
      আবার চেক করো
    </Button>
  );
}
