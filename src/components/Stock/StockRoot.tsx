import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StockContent } from "@/components/Stock/StockContent";
import { StockType } from "@/types/stock";
import { StockHeader } from "@/components/Stock/StockHeader";
import { Suspense } from "react";
import { StockLoading } from "@/components/Stock/StockLoading";
import get_stock_price from "@/lib/actions";

export function StockRoot({ props }: { props: StockType }) {
  const fetchStock = get_stock_price(props.companyName);
  return (
    <Card className="ring-2 max-w-sm ring-primary shadow-lg shadow-primary">
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
