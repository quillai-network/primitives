# @quillai-network/primitives

[![npm version](https://badge.fury.io/js/@quillai-network%2Fprimitives.svg)](https://badge.fury.io/js/@quillai-network%2Fprimitives)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight registry of reusable task templates (called **Primitives**) for constructing `core` payloads inside Mandates.
These Primitives define the structured task body that agents use in the ERC-8004 agent ecosystem.

Each Primitive provides:

* A unique `kind` identifier
* A well-defined `payload` schema
* A helper function to build valid `core` objects

This package is designed to work seamlessly with the [`@quillai-network/mandates-core`](https://www.npmjs.com/package/@quillai-network/mandates-core) SDK.

---

## Purpose

Primitives enable developers to:

* Use standardized, shareable structures for common agent tasks
* Keep Mandate creation simple while preserving strict structure for verification
* Build new primitives with minimal boilerplate
* Ensure agents speak a consistent “task language” (e.g., `swap@1`, `bridge@1`)

---

## Installation

```bash
npm install @quillai-network/primitives
```

---

## Quickstart

Below is a minimal example showing how to generate a `swap@1` core payload and embed it into a Mandate:

```ts
import { swapV1 } from "@quillai-network/primitives";
import { Mandate } from "@quillai-network/mandates-core";

// Build a primitive core payload
const core = swapV1.core({
  chainId: 1,
  tokenIn: "0xA0b8...6eB48",
  tokenOut: "0x2260...c599",
  amountIn: "100000000",   // 100 USDC (6 decimals)
  minOut: "165000",
  recipient: "0xeip155:1:0xRecipient...",
  deadline: "2025-12-31T00:00:00Z"
});

// Build a Mandate using the primitive core payload
const mandate = new Mandate({
  version: "0.1.0",
  client: "eip155:1:0xClient...",
  server: "eip155:1:0xServer...",
  intent: "Swap 100 USDC for WBTC",
  deadline: new Date(Date.now() + 600000).toISOString(),
  core,
  signatures: {}
});
```

---

## Available Primitives

Currently supported:

* **`swap@1`** — A minimal, chain-agnostic token swap primitive

More primitives will be added over time as the ERC-8004 agent ecosystem evolves.

---

## Project Structure

```
primitives/
├─ src/
│  ├─ primitives/
│  │  ├─ swap/
│  │  │  └─ swap@1.ts
│  ├─ index.ts
│  ├─ types.ts
├─ tests/
│  └─ swap.test.ts
├─ README.md
├─ LICENSE
└─ package.json
```

---

## License

Released under the MIT License.
