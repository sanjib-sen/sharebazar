import { Footer } from "@/components/Footer";
import { StockRoot } from "@/components/Stock/StockRoot";
import { stocks } from "@/config/stocks";

export async function Body() {
  return (
    <>
      <div className="flex flex-col gap-6">
        {stocks.map((stock, index) => (
          <StockRoot key={index} props={stock} />
        ))}
      </div>
      <Footer />
    </>
  );
}
