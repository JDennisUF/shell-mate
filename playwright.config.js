import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  workers: 2,
  use: { baseURL: "http://127.0.0.1:8765/shell-mate/", browserName: "chromium" },
  webServer: {
    command: "node tests/serve.js",
    url: "http://127.0.0.1:8765/shell-mate/",
    reuseExistingServer: false
  }
});
