# Primitives


The repository defines reusable task templates (called *Primitives*) for building Mandates in the [ERC-8004 agent ecosystem](https://eips.ethereum.org/EIPS/eip-8004).
Each Primitive represents a structured task body (`core`) that can be embedded inside a Mandate.

---

## Purpose

* Provide common, shareable payload definitions for agent-to-agent tasks
* Keep Mandates lightweight while standardizing common types like `swap@1` or `bridge@1`
* Enable developers to create and extend primitives with minimal boilerplate

---

## Example Usage

```ts
import { swapV1 } from "@quillai/primitives";
import { Mandate } from "@quillai/mandates-core";

const primitive = swapV1.core({
  chainId: 1,
  tokenIn: "0xA0b8...6eB48",
  tokenOut: "0x2260...C599",
  amountIn: "100000000",
  minOut: "165000",
  recipient: "0x0000000000000000000000000000000000000001",
  deadline: "2025-12-31T00:00:00Z"
});

const mandate = new Mandate({
  client: "eip155:1:0xCLIENT...",
  server: "eip155:1:0xSERVER...",
  intent: "Swap 100 USDC for WBTC on mainnet",
  core: primitive
});
```

---

## Structure

```
primitives-registry/
├─ src/
│  ├─ primitives/
│  │  └─ swap/
│  │     └─ swap@1.ts
│  ├─ index.ts
│  └─ types.ts
├─ tests/
│  └─ swap.test.ts
├─ README.md
├─ LICENSE
└─ package.json
```

---

## License

Released under the **MIT License**.

---

Would you like me to extend this README with a short “Contributing” section (similar to your other repo) to make it consistent across both?
