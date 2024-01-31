import {  clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-US",{
  style:'currency',
  currency:'USD'
})


export function formatNumber(num) {
    let sign = num < 0 ? "-" : "";
    num = Math.abs(num);
    let suffixes = ["", "k", "M", "G", "T", "P", "E"];
    let index = Math.floor(Math.log10(num) / 3);
    return sign + (num / Math.pow(10, index * 3)).toFixed(1).replace(".", ",").concat(suffixes[index]);
}