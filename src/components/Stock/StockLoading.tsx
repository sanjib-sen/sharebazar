import { Skeleton } from "@/components/ui/skeleton";

export function StockLoading() {
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center">
            <Skeleton className="h-10 w-64 sm:h-10 sm:w-64" />
          </div>
          <div className="flex flex-row justify-between gap-2 text-balance px-4 pt-2 text-sm">
            <Skeleton className="h-8 w-20 sm:h-4" />
            <Skeleton className="h-8 w-20 sm:h-4" />
          </div>
        </div>
      </div>
    </>
  );
}
