# @quillai/primitives-registry

**Day-1 builders** for Mandate primitives.  
No runtime validation yet — just ergonomic helpers to construct `{ kind, payload }` cores.

### Install
```bash
npm i @quillai/primitives-registry
Usage
ts
Copy code
import { swapV1 } from "@quillai/primitives-registry";
const core = swapV1.core({
  chainId: 1,
  tokenIn: "...",
  tokenOut: "...",
  amountIn: "100000000",
  minOut: "165000",
  recipient: "0x...",
  deadline: "2025-10-23T10:20:00Z"
});
```

Validation and a pluggable registry can be added in a future minor version.


## How they work together (example)

```ts
import { Mandate } from "@quillai/mandates-core";
import { swapV1 } from "@quillai/primitives-registry";
import { Wallet } from "ethers";

const client = Wallet.createRandom();
const server = Wallet.createRandom();

const m = new Mandate({
  version: "0.1.0",
  client: `eip155:1:${client.address}`,
  server: `eip155:1:${server.address}`,
  deadline: new Date(Date.now() + 600000).toISOString(),
  intent: "Swap 100 USDC for WBTC on Ethereum",
  core: swapV1.core({
    chainId: 1,
    tokenIn: "0xA0b8...eB48",
    tokenOut: "0x2260...C599",
    amountIn: "100000000",
    minOut: "165000",
    recipient: "0x0000000000000000000000000000000000000001",
    deadline: "2025-10-23T10:20:00Z"
  }),
  signatures: {}
});

await m.signAsServer(server, "eip191");
await m.signAsClient(client, "eip191");
console.log(m.verifyAll());
```