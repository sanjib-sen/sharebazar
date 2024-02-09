"use client";

import { StockPropsType, StockType } from "@/types/stock";
import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

export function StockContent({
  props,
}: {
  props: Promise<StockPropsType>;
}) {
  const { stockPrice, stockPriceInBd, totalProfit, totalStockPriceInBd, totalProfitInBd } = use(props);
  if (stockPrice === -1) {
    return (
      <div className="flex flex-row items-center justify-center text-4xl font-bold tracking-tighter px-4 text-balance text-red-500">
        বন্ধ আছে
      </div>
    );
  }
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex-1 text-center">
          <div
            className={`text-4xl font-bold tracking-tighter px-4 text-balance ${totalProfit > 0 ? "dark:text-green-600 text-green-800" : "dark:text-red-600 text-red-800"}`}
          >
            {totalProfitInBd} টাকা {totalProfit > 0 ? "লাভ" : "লস"}
          </div>
          <div className="flex flex-row justify-between text-sm pt-2 gap-4 text-balance px-2">
            <span>এখন প্রতি স্টক: {stockPriceInBd} টাকা </span>
            <span>পাওয়া যাবে: {totalStockPriceInBd} টাকা</span>
          </div>
        </div>
      </div>
      <CardFooter className="flex items-center justify-center mt-6">
        <Button
          onClick={() => {
          }}
          // disabled={!data}
          className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2"
        >
          আবার চেক করো
        </Button>
      </CardFooter>
    </>
  );
}
