"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { StockPropsType } from "@/types/stock";

export function Footer({ stocks }: { stocks: StockPropsType[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <DarkModeToggle />
    </div>
  );
}
