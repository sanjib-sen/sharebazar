import { load } from "cheerio";
import { convertToBangla } from "@/lib/utils";
import { promises as fs } from "fs";
import { StockType } from "@/types/stock";
import { join } from "path";

export default async function get_stock_price(company: string) {
  const url = `https://dsebd.org/displayCompany.php?name=${company}`;
  const stockPrice = await fetch(url, {
    cache: "no-store",
  }).then(async (response) => {
    const html = await response.text();
    const $ = load(html, { decodeEntities: false, scriptingEnabled: false });
    const data = $("td[width=25%]").first().html() as string;
    if (data === "-") {
      return -1;
    }
    return +data;
  });

  const file = await fs.readFile(join(process.cwd(), "/data.json"), "utf8");
  const stocks = JSON.parse(file).stocks as StockType[];
  const stock = stocks.find((stock) => stock.companyName === company);
  if (!stock) {
    throw new Error("Stock not found");
  }
  const stockPriceInBd = convertToBangla(stockPrice);
  const totalStockPrice = stockPrice * stock.stockAmount;
  const totalStockPriceInBd = convertToBangla(totalStockPrice);
  const totalProfit = totalStockPrice - stock.buyingPrice * stock.stockAmount;
  const totalProfitInBd = new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 0,
    signDisplay: "never",
  }).format(totalProfit);
  return {
    stockPrice,
    company,
    stockPriceInBd,
    totalStockPriceInBd,
    totalProfitInBd,
    totalProfit,
  };
}
