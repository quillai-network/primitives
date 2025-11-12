import type { PrimitiveCore } from "@quillai/mandates-core";

export interface PrimitiveDescriptor<T extends PrimitiveCore = PrimitiveCore> {
  /** e.g. "swap@1" */
  id: string;
  /** How to detect this primitive from core */
  match(core: PrimitiveCore): boolean; // usually c => c.kind === id
  /** Runtime validator (Zod or custom) that returns typed core */
  parse(core: PrimitiveCore): T;       // should throw on invalid
}

export type { PrimitiveCore }; // convenience re-export
