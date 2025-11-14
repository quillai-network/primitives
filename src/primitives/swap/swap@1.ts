import type { PrimitiveCore } from "@quillai-network/mandates-core";

export interface SwapV1Payload {
  chainId: number;
  tokenIn: string;
  tokenOut: string;
  amountIn: string;  // wei (string)
  minOut: string;    // wei (string)
  recipient: string; // EVM address
}

export type SwapV1Core = PrimitiveCore<"swap@1", SwapV1Payload>;

/** Minimal builder (no runtime validation in v0.1.0) */
export const swapV1 = {
  kind: "swap@1" as const,
  core(payload: SwapV1Payload): SwapV1Core {
    return { kind: "swap@1", payload };
  }
};
