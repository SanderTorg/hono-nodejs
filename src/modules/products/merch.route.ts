import { Hono, type Context } from "hono";
import { getMerch } from "./merch.model.js";
import type { MerchResponse } from "./merch.js";

const app = new Hono().get("/", (c: Context) => {
  const merch = getMerch({});

  return c.json<MerchResponse>({
    data: merch,
    meta: {
      total: 200,
      limit: 30,
      count: 1,
    },
  });
});

export default app;
