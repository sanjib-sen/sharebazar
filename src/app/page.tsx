import { StockRoot } from "../components/Stock/StockRoot";
import { Footer } from "@/components/Footer";
import { StockPropsType } from "@/types/stock";
import { promises as fs } from "fs";
export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const stocks = JSON.parse(file).stocks;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-6 pb-24">
        {stocks.map((stock: StockPropsType, index: number) => (
          <StockRoot key={index} props={stock} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
