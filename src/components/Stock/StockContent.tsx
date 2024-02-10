"use client";

import { StockPropsType } from "@/types/stock";
import { use } from "react";

export function StockContent({ props }: { props: Promise<StockPropsType> }) {
  const {
    stockPrice,
    stockPriceInBd,
    totalProfit,
    totalStockPriceInBd,
    totalProfitInBd,
  } = use(props);
  if (stockPrice === -1) {
    return (
      <div className="flex flex-row items-center justify-center text-balance px-4 text-4xl font-bold tracking-tighter text-red-500">
        বন্ধ আছে
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="flex-1 text-center">
        <div
          className={`text-balance px-4 text-4xl font-bold tracking-tighter ${totalProfit > 0 ? "text-green-800 dark:text-green-600" : "text-red-800 dark:text-red-600"}`}
        >
          {totalProfitInBd} টাকা {totalProfit > 0 ? "লাভ" : "লস"}
        </div>
        <div className="flex flex-row justify-between gap-4 text-balance px-2 pt-2 text-sm">
          <span>এখন প্রতি স্টক: {stockPriceInBd} টাকা </span>
          <span>পাওয়া যাবে: {totalStockPriceInBd} টাকা</span>
        </div>
      </div>
    </div>
  );
}
