import type z from "zod";
import type { MerchSchema } from "./merch.schema.ts";
import type { Meta } from "../../types.ts";

export type Merch = z.intefer<typeof MerchSchema>;

export interface MerchResponse {
  data: Merch[];
  meta: Meta;
}
