import { z } from "@hono/zod-openapi";
import type { MetaSchema } from "./schema.js";

export type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

export type Meta = z.infer<typeof MetaSchema>;
