"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { useSWRConfig } from "swr"

export function Footer() {
   const { mutate } = useSWRConfig()
   return (<div className="flex flex-col items-center gap-4">
      <Button onClick={() => {
         mutate(key => typeof key === 'string' && key.startsWith('/api/stock?company='),
            undefined,
            { revalidate: true })
      }} className="text-xl tracking-tight text-center font-bold shadow-lg shadow-secondary ring-2">সবগুলো চেক করো</Button>
      <DarkModeToggle />
   </div>
   )
}