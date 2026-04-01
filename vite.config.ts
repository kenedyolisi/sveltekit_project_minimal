import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
// import { FileSystemIconLoader } from "unplugin-icons/loaders";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [
    tailwindcss(),
    icons({
      compiler: "svelte",
      // customCollections: { local: FileSystemIconLoader("./src/static/icons") },
    }),
    sveltekit(),
    devtoolsJson(),
  ],
});
