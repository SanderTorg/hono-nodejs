import { z } from "@hono/zod-openapi";
import { PostSchema } from "./posts.schema.js";

import type { Meta } from "../../types.js";

export type Post = z.infer<typeof PostSchema>;

export interface PostsResponse {
  data: Post[];
  meta: Meta;
}
