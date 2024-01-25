"use client";
import { convertToBangla } from "@/lib/utils";
import { StockPropsType } from "@/types/stock";
import { StockLoading } from "./StockLoading";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

export function StockContent({ props }: { props: StockPropsType }) {
    const [stock, setStock] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        fetch(`/api/stock?company=${props.companyName}`, { cache: "no-store" }).then((res) => res.json()).then((stock) => {
            setStock(stock.price);
            setIsLoading(false);
        });
    }, [props.companyName]);

    function onRefreshHandler() {
        setIsLoading(true);
        fetch(`/api/stock?company=${props.companyName}`, { cache: "no-store" }).then((res) => res.json()).then((stock) => {
            setStock(stock.price);
            setIsLoading(false);
        });
    }

    function Content() {
        if (isLoading || !stock) return <StockLoading />
        const stockPriceInBd = convertToBangla(stock);
        const totalStockPrice = stock * props.stockAmount;
        const totalStockPriceInBd = convertToBangla(totalStockPrice);
        const totalProfit = totalStockPrice - props.buyingPrice * props.stockAmount;
        const totalProfitInBd = new Intl.NumberFormat('bn-BD', { maximumFractionDigits: 0, signDisplay: "never" }).format(totalProfit);
        return (<div className="flex items-center justify-center space-x-2">
            <div className="flex-1 text-center">
                <div className="text-4xl font-bold tracking-tighter px-4 text-balance">
                    {totalProfitInBd} টাকা {totalProfit > 0 ? "লাভ" : "লস"}
                </div>
                <div className="flex flex-row justify-between text-sm pt-2 gap-4 text-balance px-2">
                    <span>এখন প্রতি স্টক: {stockPriceInBd} টাকা </span>
                    <span>পাওয়া যাবে: {totalStockPriceInBd} টাকা</span>
                </div>
            </div>
        </div>)
    }

    return (
        <>
            <Content />
            <CardFooter className="flex items-center justify-center mt-6">
                <Button onClick={onRefreshHandler} className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2">আবার চেক করো</Button>
            </CardFooter>
        </>
    )
}