import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reboot — Piano di allenamento",
    short_name: "Reboot",
    description: "Il tuo piano di allenamento giornaliero per uno stile di vita attivo e sano.",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    orientation: "portrait",
    background_color: "#f0f8ff",
    theme_color: "#1B8EF0",
    categories: ["health", "fitness"],
    icons: [
      {
        src: `${basePath}/icon.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: `${basePath}/apple-icon.png`,
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${basePath}/apple-icon.png`,
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
