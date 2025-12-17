import { Hono } from "hono";
import type { Context } from "hono";
import type { PostsResponse } from "./posts.js";
import { getPosts } from "./posts.model.js";

const app = new Hono().get(`/`, (c: Context) => {
  const posts = getPosts({});

  return c.json<PostsResponse>({
    data: posts,
    meta: {
      total: 200,
      limit: 30,
      count: 1,
    },
  });
});

export default app;
