import { z } from "@hono/zod-openapi";
import { dateToString } from "../../utils/utils.js";
import { MAX_LIKES } from "../posts/posts.schema.js";

export const MerchSchema = z.object({
  id: z.uuid(),
  name: z.string().min(2).max(100),
  description: z.string().min(2).max(1000),
  price: z.number().nonnegative().max(10000).int(),
  inStock: z.boolean(),
  createdAt: z.date().transform(dateToString),
  updatedAt: z.date().transform(dateToString),
  likes: z.number().int().nonnegative().max(MAX_LIKES),
  media: z
    .object({
      url: z.url(),
      alt: z.string().min(1).max(500),
    })
    .optional(),
});
