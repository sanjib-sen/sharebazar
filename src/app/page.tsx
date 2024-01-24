import { StockRoot } from "../components/Stock/StockRoot";
import { Footer } from "@/components/Footer";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-6 pb-24">
        <StockRoot props={{ buyingPrice: 260.07, stockAmount: 200, companyName: "ARAMIT" }} />
        <StockRoot props={{ buyingPrice: 260.07, stockAmount: 200, companyName: "BATBC" }} />
      </div>
      <Footer />
    </main>
  );
}
