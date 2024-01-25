"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export function Footer() {
   const router = useRouter();
   return (<div className="flex flex-col items-center gap-4">
      <Button onClick={() => {
         router.refresh();
      }} className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2">সবগুলো চেক করো</Button>
      <DarkModeToggle />
   </div>
   )
}