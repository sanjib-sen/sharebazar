import { StockType } from "@/types/stock";
import { Footer } from "@/components/Footer";
import { StockRoot } from "@/components/Stock/StockRoot";
import { promises as fs } from "fs";

export async function Body() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const stocks = JSON.parse(file).stocks as StockType[];
  return (
    <>
      <div className="flex flex-col gap-6 pb-24">
        {stocks.map((stock: StockType, index: number) => (
          <StockRoot key={index} props={stock} />
        ))}
      </div>
      <Footer stocks={stocks} />
    </>
  );
}
