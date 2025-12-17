import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    api: {
      port: 5000,
    },
  },
});
