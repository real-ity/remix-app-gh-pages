import { reactRouter } from "@react-router/dev/vite";
import { reactRouterDevTools } from "react-router-devtools";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  ssr: {
    noExternal: ["@mui/*"],
  },
  base: "/remix-app-gh-pages/",
  plugins: [
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
    // tsconfigPaths({ configNames: ["deno.json"] }),
  ],
});
