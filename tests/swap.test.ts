import { describe, it, expect } from "vitest";
import { swapV1 } from "../src/primitives/swap/swap@1.js";

describe("swap@1 builder test", () => {
  it("creates a core object", () => {
    const core = swapV1.core({
      chainId: 1,
      tokenIn: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      tokenOut: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      amountIn: "100000000",
      minOut: "165000",
      recipient: "0x0000000000000000000000000000000000000001",
    });

    expect(core.kind).toBe("swap@1");
    expect(core.payload.chainId).toBe(1);
  });
});
