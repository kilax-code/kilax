import type { Metadata } from "next";
import { getMovieById } from "@/lib/api";
import MovieDetailsClient from "./MovieDetailsClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const movie = await getMovieById(id);
    if (!movie) {
      return {
        title: "Movie Not Found",
        description: "The requested movie could not be found on Kilax Movies.",
      };
    }

    const vjName = (movie as any).vjs?.name || (movie as any).vj_id || "";
    const genres: string[] = (movie as any).genre_ids || [];
    const year = movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "";

    const titleSuffix = vjName
      ? `Translated by ${vjName} in Luganda`
      : "Luganda Translated Movie";
    const title = `${movie.title} (${year}) - ${titleSuffix} | Kilax Movies`;
    const description = [
      `Watch "${movie.title}" translated in Luganda${vjName ? ` by ${vjName}` : ""} on Kilax Movies.`,
      movie.description
        ? movie.description.slice(0, 120) + (movie.description.length > 120 ? "..." : "")
        : "",
      `Stream or download HD on Uganda's #1 Luganda movies platform.`,
    ]
      .filter(Boolean)
      .join(" ");

    const keywords = [
      movie.title,
      movie.title + " luganda",
      movie.title + " translated",
      vjName ? `${movie.title} ${vjName}` : null,
      vjName || null,
      "luganda movies",
      "kilax movies",
      "translated movies",
      ...genres.map((g) => `${g} luganda movie`),
    ].filter(Boolean) as string[];

    const coverImage =
      (movie as any).cover_image_url ||
      (movie as any).thumbnail_url ||
      "/logo.png";

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://www.kilaxmovies.com/movies/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.kilaxmovies.com/movies/${id}`,
        type: "video.movie",
        images: [{ url: coverImage, alt: movie.title }],
        siteName: "Kilax Movies",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [coverImage],
      },
    };
  } catch {
    return {
      title: "Movie | Kilax Movies",
      description:
        "Watch Luganda translated movies on Kilax Movies — Uganda's #1 streaming platform.",
    };
  }
}

export default async function MovieDetailsPage({ params }: Props) {
  const { id } = await params;
  // Pre-fetch the movie server-side so data is available immediately
  let initialMovie: any = null;
  try {
    initialMovie = await getMovieById(id);
  } catch {
    // Client will handle fetch fallback
  }

  // Inject Movie schema JSON-LD
  const movieSchema = initialMovie
    ? {
        "@context": "https://schema.org",
        "@type": "Movie",
        name: initialMovie.title,
        description: initialMovie.description || "",
        image:
          initialMovie.cover_image_url || initialMovie.thumbnail_url || "",
        datePublished: initialMovie.release_date || "",
        inLanguage: "lg", // Luganda ISO 639-1
        url: `https://www.kilaxmovies.com/movies/${id}`,
        publisher: {
          "@type": "Organization",
          name: "Kilax Movies",
          url: "https://www.kilaxmovies.com",
        },
        genre: (initialMovie.genre_ids || []).map(
          (g: string) => g.charAt(0).toUpperCase() + g.slice(1)
        ),
        ...(initialMovie.vjs?.name && {
          creditText: `Translated into Luganda by ${initialMovie.vjs.name}`,
        }),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.kilaxmovies.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Movies",
        item: "https://www.kilaxmovies.com/movies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: initialMovie?.title || "Movie",
        item: `https://www.kilaxmovies.com/movies/${id}`,
      },
    ],
  };

  return (
    <>
      {movieSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MovieDetailsClient id={id} initialMovie={initialMovie} />
    </>
  );
}
