import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import nesting from "tailwindcss/nesting";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  style: {
    postcss: {
      plugins: [nesting()],
    },
  },
});