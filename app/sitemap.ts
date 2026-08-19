import type { MetadataRoute } from "next";
import { getMovies, getSeries } from "@/lib/api";

const BASE_URL = "https://www.kilaxmovies.com";

// Removed VJ routes

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static high-priority pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/movies`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/series`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/non-translated`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/download`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Dynamic movie pages
  let moviePages: MetadataRoute.Sitemap = [];
  try {
    const movies = await getMovies(200, 1);
    moviePages = movies.map((movie: any) => ({
      url: `${BASE_URL}/movies/${movie.id}`,
      lastModified: movie.release_date ? new Date(movie.release_date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));
  } catch {
    // Fail silently — don't break build if API is unavailable
  }

  // Dynamic series pages
  let seriesPages: MetadataRoute.Sitemap = [];
  try {
    const seriesList = await getSeries(200, 1);
    seriesPages = seriesList.map((s: any) => ({
      url: `${BASE_URL}/series/${s.id}`,
      lastModified: s.release_date ? new Date(s.release_date) : now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));
  } catch {
    // Fail silently
  }

  return [...staticPages, ...moviePages, ...seriesPages];
}
