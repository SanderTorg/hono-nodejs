import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { BASE_URL, DEFAULT_PORT } from "./utils/constants.js";
import home from "./modules/home/home.route.js";
import posts from "./modules/posts/posts.route.js";

import merch from "./modules/products/merch.route.js";

export const app = new Hono()
  .route(`${BASE_URL}/home`, home)
  .route(`${BASE_URL}/posts`, posts)
  .route(`${BASE_URL}/merch`, merch);

serve(
  {
    fetch: app.fetch,
    port: DEFAULT_PORT,
  },
  (info) => {
    console.log(
      `Server is running on http://localhost:${info.port}${BASE_URL}/home`
    );
  }
);
