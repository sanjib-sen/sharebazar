"use client";

import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2"
        onClick={() => document.location.reload()}
      >
        আবার চেক করো
      </Button>
      <DarkModeToggle />
    </div>
  );
}
