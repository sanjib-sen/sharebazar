import { Body } from "@/components/Body";
import { StockPropsType } from "@/types/stock";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const stocks = JSON.parse(file).stocks as StockPropsType[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 backdrop-blur-sm">
      <Body props={stocks} />
    </main>
  );
}
