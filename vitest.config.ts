import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

const replacement = resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement },
      { find: "#", replacement },
    ],
  },
});
