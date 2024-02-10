import { StockContent } from "@/components/Stock/StockContent";
import { StockHeader } from "@/components/Stock/StockHeader";
import { StockLoading } from "@/components/Stock/StockLoading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import get_stock_price from "@/lib/actions";
import { StockType } from "@/types/stock";
import { Suspense } from "react";

export function StockRoot({ props }: { props: StockType }) {
  const fetchStock = get_stock_price(props.companyName);
  return (
    <Card className="max-w-sm shadow-lg shadow-primary ring-2 ring-primary">
      <CardHeader className="pb-2">
        <StockHeader props={props} />
      </CardHeader>
      <Separator />
      <CardContent className="p-4">
        <Suspense fallback={<StockLoading />}>
          <StockContent props={fetchStock} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
