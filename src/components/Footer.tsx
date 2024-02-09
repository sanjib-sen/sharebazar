"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { StockType } from "@/types/stock";

export function Footer({ stocks }: { stocks: StockType[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <DarkModeToggle />
    </div>
  );
}
