import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { StockContent } from "./StockContent";
import { StockPropsType } from "@/types/stock";
import { StockHeader } from "./StockHeader";

export async function StockRoot({ props }: { props: StockPropsType }) {
    return (<Card className="ring-2 max-w-sm ring-primary shadow-lg shadow-primary">
        <CardHeader className="pb-2">
            <StockHeader props={props} />
        </CardHeader>
        <Separator />
        <CardContent className="p-4 pb-0">
            <StockContent props={props} />
        </CardContent>
    </Card>)
}