"use client";

import { convertToBangla } from "@/lib/utils";
import { StockPropsType } from "@/types/stock";
import { useStockFetch } from "@/lib/fetchStock";
import { StockLoading } from "@/components/Stock/StockLoading";

export function StockContent({ props }: { props: StockPropsType }) {
  const {
    data: stockData,
    isFetching,
    status,
  } = useStockFetch(props.companyName);
  if (isFetching) {
    return <StockLoading />;
  }
  if (status === "error") {
    return <div className="text-center text-6xl text-red-500">Error</div>;
  }
  if (stockData?.price === -1) {
    return (
      <div className="flex flex-row items-center justify-center text-4xl font-bold tracking-tighter px-4 text-balance text-red-500">
        বন্ধ আছে
      </div>
    );
  }

  if (stockData && status === "success") {
    const stockPriceInBd = convertToBangla(stockData.price);
    const totalStockPrice = stockData.price * props.stockAmount;
    const totalStockPriceInBd = convertToBangla(totalStockPrice);
    const totalProfit = totalStockPrice - props.buyingPrice * props.stockAmount;
    const totalProfitInBd = new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 0,
      signDisplay: "never",
    }).format(totalProfit);
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="flex-1 text-center">
          <div className={`text-4xl font-bold tracking-tighter px-4 text-balance ${totalProfit > 0 ? "dark:text-green-600 text-green-800" : "dark:text-red-600 text-red-800"}`}>
            {totalProfitInBd} টাকা {totalProfit > 0 ? "লাভ" : "লস"}
          </div>
          <div className="flex flex-row justify-between text-sm pt-2 gap-4 text-balance px-2">
            <span>এখন প্রতি স্টক: {stockPriceInBd} টাকা </span>
            <span>পাওয়া যাবে: {totalStockPriceInBd} টাকা</span>
          </div>
        </div>
      </div>
    );
  }
}
