"use client";

import { convertToBangla } from "@/lib/utils";
import { StockPropsType } from "@/types/stock";
import  {useFetchStock} from "../../lib/fetchStock";
import { StockLoading } from "./StockLoading";

export function StockContent({ props }: { props: StockPropsType }) {
    const { stockData, isLoading, isError, isValidating} = useFetchStock(props.companyName);
    if (isLoading || isValidating) {
        return <StockLoading />
    }
    if (isError || !stockData) {
        return <div className="text-center text-6xl text-red-500">Error</div>
    }
    const stockPriceInBd = convertToBangla(stockData.price);
    const totalStockPrice = stockData.price * props.stockAmount;
    const totalStockPriceInBd = convertToBangla(totalStockPrice);
    const totalProfit = totalStockPrice - props.buyingPrice * props.stockAmount;
    const totalProfitInBd = new Intl.NumberFormat('bn-BD', { maximumFractionDigits: 0, signDisplay: "never" }).format(totalProfit);
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 text-center">
                <div className="text-4xl font-bold tracking-tighter px-4 text-balance">
                    {totalProfitInBd} টাকা {totalProfit > 0 ? "লাভ" : "লস"}
                </div>
                <div className="flex flex-row justify-between text-sm pt-2 gap-4 text-balance px-2">
                    <span>এখন প্রতি স্টক: {stockPriceInBd} টাকা </span>
                    <span>পাওয়া যাবে: {totalStockPriceInBd} টাকা</span>
                </div>
            </div>
        </div>
    )
}