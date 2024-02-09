import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StockContent } from "./StockContent";
import { StockPropsType } from "@/types/stock";
import { StockHeader } from "./StockHeader";
import { Suspense } from "react";
import { StockLoading } from "./StockLoading";
import get_stock_price from "@/lib/actions";

export function StockRoot({ props }: { props: StockPropsType }) {
  const fetchStock = get_stock_price(props.companyName);
  return (
    <Card className="ring-2 max-w-sm ring-primary shadow-lg shadow-primary">
      <CardHeader className="pb-2">
        <StockHeader props={props} />
      </CardHeader>
      <Separator />
      <CardContent className="p-4 pb-0">
        <Suspense fallback={<StockLoading />}>
          <StockContent
            props={props}
            fetchStock={fetchStock}
          />
        </Suspense>
      </CardContent>
    </Card>
  );
}
