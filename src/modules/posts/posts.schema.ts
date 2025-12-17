import { z } from "@hono/zod-openapi";
import { dateToString } from "../../utils/utils.js";

export const MAX_LIKES = 9999;
const MAX_COMMENTS = 9999;

export const PostSchema = z.object({
  id: z.uuid(),
  userId: z.uuid(),
  title: z.string().min(2).max(200),
  content: z.string().min(2).max(2000),
  createdAt: z.date().transform(dateToString),
  updatedAt: z.date().transform(dateToString),
  likes: z.number().int().nonnegative().max(MAX_LIKES),
  comments: z.number().int().nonnegative().max(MAX_COMMENTS),
  media: z
    .object({
      url: z.url(),
      alt: z.string().min(1).max(500),
    })
    .optional(),
});
