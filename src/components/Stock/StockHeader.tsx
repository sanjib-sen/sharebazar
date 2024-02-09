import { StockType } from "@/types/stock";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { convertToBangla } from "@/lib/utils";

export async function StockHeader({ props }: { props: StockType }) {
  const buyingPriceInBd = convertToBangla(props.buyingPrice);
  const stockAmountInBd = convertToBangla(props.stockAmount);
  const totalBuyingPrice = props.buyingPrice * props.stockAmount;
  const totalBuyingPriceInBd = convertToBangla(totalBuyingPrice);
  return (
    <>
      <CardTitle>{props.companyName}</CardTitle>
      <CardDescription className="flex flex-row justify-between gap-4 text-xs text-muted-foreground text-balance">
        <span className="text-left">
          কেনা {buyingPriceInBd} টাকা প্রতি স্টক
        </span>
        <span className="text-center">স্টক: {stockAmountInBd} টি</span>
        <span className="text-right">
          মোট ইনভেস্ট: {totalBuyingPriceInBd} টাকা
        </span>
      </CardDescription>
    </>
  );
}
