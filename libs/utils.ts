import clsx, { ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseCombinedMetricRange(metric: string): IRange {
  const numbers = metric.match(/\d+(?:\.\d+)?/g);

  if (!numbers || numbers.length === 0) {
    throw new Error("No numbers found in metric string");
  }

  const values = numbers.map(Number);

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
}
