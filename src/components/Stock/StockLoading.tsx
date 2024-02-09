import { Skeleton } from "@/components/ui/skeleton";

export function StockLoading() {
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center">
            <Skeleton className="sm:h-10 sm:w-64 h-10 w-64" />
          </div>
          <div className="flex flex-row justify-between text-sm pt-2 gap-2 text-balance px-4">
            <Skeleton className="sm:h-4 w-20 h-8" />
            <Skeleton className="sm:h-4 w-20 h-8" />
          </div>
        </div>
      </div>
    </>
  );
}
