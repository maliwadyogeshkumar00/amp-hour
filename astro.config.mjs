// @ts-check
import { defineConfig } from "astro/config";

// `base` comes from the Pages workflow (PUBLIC_BASE=/amp-hour) so the project
// site works at https://<user>.github.io/amp-hour/. Locally it stays "/".
// Set `site` to your real domain once it's chosen.
export default defineConfig({
  site: "https://amp-hour.de",
  base: process.env.PUBLIC_BASE || "/",
});
