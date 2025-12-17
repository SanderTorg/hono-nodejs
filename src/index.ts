import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { products } from "./products.js";
import type { Product } from "./types.js";
import { API_VERSION, BASE_URL, DEFAULT_PORT } from "./utils/constants.js";

const app = new Hono().basePath(`${BASE_URL}/${API_VERSION}`);

app.get("/", (c) => {
  return c.json<Product[]>(products);
});

serve(
  {
    fetch: app.fetch,
    port: DEFAULT_PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
