import type { Metadata } from "next";
import { getSeriesById } from "@/lib/api";
import SeriesDetailsClient from "./SeriesDetailsClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const series = await getSeriesById(id);
    if (!series) {
      return {
        title: "Series Not Found",
        description:
          "The requested series could not be found on Kilax Movies.",
      };
    }

    const vjName =
      (series as any).vjs?.name || (series as any).vj_id || "";
    const genres: string[] = (series as any).genre_ids || [];
    const year =
      series.release_date ? new Date(series.release_date).getFullYear() : "";

    const titleSuffix = vjName
      ? `Translated by ${vjName} in Luganda`
      : "Luganda Translated Series";
    const title = `${series.title}${year ? ` (${year})` : ""} - ${titleSuffix} | Kilax Movies`;
    const description = [
      `Watch "${series.title}" series translated in Luganda${vjName ? ` by ${vjName}` : ""} on Kilax Movies.`,
      series.description
        ? series.description.slice(0, 120) +
          (series.description.length > 120 ? "..." : "")
        : "",
      "Stream all seasons and episodes on Uganda's #1 Luganda streaming platform.",
    ]
      .filter(Boolean)
      .join(" ");

    const keywords = [
      series.title,
      series.title + " luganda",
      series.title + " translated",
      series.title + " series",
      vjName ? `${series.title} ${vjName}` : null,
      vjName || null,
      "luganda series",
      "translated series",
      "kilax movies",
      ...genres.map((g) => `${g} luganda series`),
    ].filter(Boolean) as string[];

    const coverImage =
      (series as any).cover_image_url ||
      (series as any).thumbnail_url ||
      "/logo.png";

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://www.kilaxmovies.com/series/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.kilaxmovies.com/series/${id}`,
        type: "video.tv_show",
        images: [{ url: coverImage, alt: series.title }],
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
      title: "Series | Kilax Movies",
      description:
        "Watch Luganda translated series on Kilax Movies — Uganda's #1 streaming platform.",
    };
  }
}

export default async function SeriesDetailsPage({ params }: Props) {
  const { id } = await params;
  let initialSeries: any = null;
  try {
    initialSeries = await getSeriesById(id);
  } catch {
    // Client will handle fetch fallback
  }

  const tvSeriesSchema = initialSeries
    ? {
        "@context": "https://schema.org",
        "@type": "TVSeries",
        name: initialSeries.title,
        description: initialSeries.description || "",
        image:
          initialSeries.cover_image_url || initialSeries.thumbnail_url || "",
        datePublished: initialSeries.release_date || "",
        inLanguage: "lg",
        url: `https://www.kilaxmovies.com/series/${id}`,
        publisher: {
          "@type": "Organization",
          name: "Kilax Movies",
          url: "https://www.kilaxmovies.com",
        },
        genre: (initialSeries.genre_ids || []).map(
          (g: string) => g.charAt(0).toUpperCase() + g.slice(1)
        ),
        numberOfSeasons: initialSeries.season_count || 1,
        ...(initialSeries.vjs?.name && {
          creditText: `Translated into Luganda by ${initialSeries.vjs.name}`,
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
        name: "Series",
        item: "https://www.kilaxmovies.com/series",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: initialSeries?.title || "Series",
        item: `https://www.kilaxmovies.com/series/${id}`,
      },
    ],
  };

  return (
    <>
      {tvSeriesSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tvSeriesSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SeriesDetailsClient id={id} initialSeries={initialSeries} />
    </>
  );
}
