import { testClient } from "hono/testing";
import { describe, test, expect } from "vitest";
import { mockPosts as posts } from "./posts.factory.js";

import { app } from "../../index.js";

describe("# POSTS Endpoint -->", () => {
  const client = testClient(app);

  test("## GET /posts", async () => {
    expect.assertions(2);

    const res = await client.api.v1.posts.$get();

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      data: posts,
      meta: {
        count: 1,
        limit: 30,
        total: 200,
      },
    });
  });
});
