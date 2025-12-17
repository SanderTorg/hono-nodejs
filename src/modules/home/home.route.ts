import { Hono } from "hono";
import type { Context } from "hono";

const app = new Hono().get("/", (c: Context) => {
  return c.text("Testing home route!");
});

export default app;
