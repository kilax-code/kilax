import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/movies",
          "/movies/",
          "/series",
          "/series/",
          "/categories",
          "/non-translated",
          "/non-translated/",
          "/about",
          "/contact",
          "/download",
          "/search",
          "/signin",
          "/signup",
          "/subscribe",
        ],
        disallow: [
          "/player",
          "/player/",
          "/profile",
          "/profile/",
          "/api/",
          "/reset-password",
          "/reset-password/",
          "/auth/",
          "/payment",
          "/payment/",
        ],
      },
      {
        // Allow Google to crawl images and media for rich snippets
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://www.kilaxmovies.com/sitemap.xml",
    host: "https://www.kilaxmovies.com",
  };
}
