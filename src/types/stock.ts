import { stocks } from "@/config/stocks";

export type StockType = (typeof stocks)[0];

export type StockPropsType = {
  stockPrice: number;
  company: string;
  stockPriceInBd: string;
  totalStockPriceInBd: string;
  totalProfitInBd: string;
  totalProfit: number;
};
