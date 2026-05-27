import { defineConfig } from "mobilewright";

export default defineConfig({
  platform: "ios",
  bundleId: "com.example.app",
  deviceName: /iPhone/,
  timeout: 30000,
  actionTimeout: 10000,
  autoStart: true,
  url: "ws://localhost:12000/ws",
  use: {
    trace: "retain-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["list"], ["html", { open: "never" }], ["json", { outputFile: "logs/playwright-report.json" }]],
});
