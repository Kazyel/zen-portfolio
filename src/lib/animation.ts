import type { CSSProperties } from "react";

export const rise = (i: number) => ({ "--rise-index": i }) as CSSProperties;
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
