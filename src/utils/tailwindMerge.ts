import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClass = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
