import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertToBangla = (number: number) => {
  return new Intl.NumberFormat('bn-BD', {maximumFractionDigits:0}).format(number);
}