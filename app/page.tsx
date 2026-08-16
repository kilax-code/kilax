"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

import { NetflixCard } from "@/components/NetflixCard";
import { InlineSpinner, FullPageSpinner } from "@/components/LoadingSpinner";

import { useEffect, useState } from "react";
import { getVJContentClient, getKilaxExclusiveContentClient, getMoviesClient, getSeriesClient, getGenreRowsClient } from "@/lib/api-client";

import { Movie, Series } from "@/lib/supabase";

import { useAuthCheck } from "@/components/AuthRequiredModal";
import AuthRequiredModal from "@/components/AuthRequiredModal";

export const dynamic = 'force-dynamic'

type VJContent = (Movie | Series) & {
  type: 'movie' | 'series';
  vjs: { id: string; name: string } | null;
  is_premium?: boolean;
};





export default function HomePage() {
  const [featuredContent, setFeaturedContent] = useState<VJContent[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestMovies, setLatestMovies] = useState<any[]>([]);
  const [latestSeries, setLatestSeries] = useState<any[]>([]);
  const [genreRows, setGenreRows] = useState<{ name: string; movies: any[] }[]>([]);
  const [vjContent, setVJContent] = useState<VJContent[]>([]);
  const [kilaxExclusive, setKilaxExclusive] = useState<VJContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [genresLoaded, setGenresLoaded] = useState(false);
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    action: 'play' | 'download';
    requirePremium?: boolean;
  }>({ isOpen: false, action: 'play' });

  // Auth hook
  const { checkAuth } = useAuthCheck();

  useEffect(() => {
    async function fetchCriticalData() {
      try {
        // First, load only the essential data for above-the-fold content
        const vjData = await getVJContentClient(8);
        setFeaturedContent((vjData as any[]).map((item: any) => ({ ...item, type: item.type || 'movie' })) as VJContent[]);
        setVJContent((vjData as any[]).map((item: any) => ({ ...item, type: item.type || 'movie' })) as VJContent[]);
        setLoading(false); // Hide skeleton as soon as hero content is ready

        // Then load the rest of the content progressively
        const [latestMoviesResult, latestSeriesResult, kilaxExclusiveData, genreRows] = await Promise.all([
          getMoviesClient(1, 12),
          getSeriesClient(1, 12),
          getKilaxExclusiveContentClient(8),
          getGenreRowsClient(12),
        ]);

        setLatestMovies(latestMoviesResult.data);
        setLatestSeries(latestSeriesResult.data);
        setKilaxExclusive(kilaxExclusiveData);

        let finalGenreRows = genreRows;
        // If API returned no genres, try to build some from the content we just fetched
        if (!finalGenreRows || finalGenreRows.length === 0) {
          const allContent = [...latestMoviesResult.data, ...latestSeriesResult.data, ...kilaxExclusiveData];
          const genreMap = new Map<string, any[]>();
          allContent.forEach(item => {
            if (item.genres && Array.isArray(item.genres)) {
              item.genres.forEach((g: string) => {
                if (!genreMap.has(g)) genreMap.set(g, []);
                if (!genreMap.get(g)!.find(existing => existing.id === item.id)) {
                  genreMap.get(g)!.push(item);
                }
              });
            }
          });

          // Convert map to array and sort by number of items
          const extractedGenres = Array.from(genreMap.entries())
            .map(([name, movies]) => ({ name, movies }))
            .sort((a, b) => b.movies.length - a.movies.length)
            .slice(0, 3); // Take top 3

          // Only keep genres with at least 2 items to make it look like a row
          finalGenreRows = extractedGenres.filter(g => g.movies.length >= 2);
        }

        setGenreRows(finalGenreRows);
        setGenresLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Still hide skeleton even on error
        setGenresLoaded(true);
      }
    }
    fetchCriticalData();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (featuredContent.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [featuredContent.length]);

  if (loading) {
    return <FullPageSpinner text="Loading home..." />;
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Netflix-style Hero Banner */}
        <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-full overflow-hidden">
          {featuredContent.length > 0 && (
            <>
              {/* Hero Background */}
              <div className="absolute inset-0">
                {featuredContent.map((content, index) => (
                  <div
                    key={content.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <Image
                      src={content.cover_image_url || `https://via.placeholder.com/1920x1080/1f2937/f97316?text=${encodeURIComponent(content.title)}`}
                      alt={content.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/1920x1080/1f2937/f97316?text=${encodeURIComponent(content.title)}`;
                      }}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              {/* Hero Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-4 md:px-12">
                  <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3 text-orange-500 leading-tight">
                      {featuredContent[currentSlide]?.title || "Featured Content"}
                    </h1>

                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 text-xs">
                      {featuredContent[currentSlide]?.vjs && (
                        <span className="border border-orange-400 text-orange-400 px-1.5 py-0.5 md:px-2 md:py-1 text-xs font-bold">
                          {featuredContent[currentSlide].vjs.name}
                        </span>
                      )}
                      {featuredContent[currentSlide]?.release_date && (
                        <span className="text-gray-300">{new Date(featuredContent[currentSlide].release_date).getFullYear()}</span>
                      )}
                      {featuredContent[currentSlide] && 'duration' in featuredContent[currentSlide] && (featuredContent[currentSlide] as any).duration && (
                        <span className="text-gray-300">{(featuredContent[currentSlide] as any).duration}m</span>
                      )}
                    </div>

                    <p className="text-sm md:text-lg mb-4 md:mb-6 text-gray-100 leading-relaxed max-w-xs md:max-w-lg font-medium">
                      {featuredContent[currentSlide]?.description?.slice(0, 120) || "Experience the best in entertainment with stunning visuals and captivating storytelling."}
                      {featuredContent[currentSlide]?.description && featuredContent[currentSlide].description!.length > 120 && "..."}
                    </p>

                    <div className="flex gap-3 md:gap-4">
                      <Button
                        size="lg"
                        className="font-bold px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base transition-all duration-200 hover:scale-105 bg-white text-black hover:bg-gray-200"
                        onClick={() => {
                          const authCheck = checkAuth(featuredContent[currentSlide]?.is_premium || false);
                          if (!authCheck.allowed) {
                            setAuthModal({
                              isOpen: true,
                              action: 'play',
                              requirePremium: authCheck.reason === 'premium_required'
                            });
                          } else {
                            window.location.href = `/${featuredContent[currentSlide]?.type === 'movie' ? 'movies' : 'series'}/${featuredContent[currentSlide]?.id}`;
                          }
                        }}
                      >
                        <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 fill-current" />
                        Play
                      </Button>
                      <Link href={`/${featuredContent[currentSlide]?.type === 'movie' ? 'movies' : 'series'}/${featuredContent[currentSlide]?.id}`}>
                        <Button size="lg" variant="outline" className="border-2 border-gray-400 text-white hover:border-white hover:bg-white/10 bg-gray-600/50 font-bold px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base transition-all duration-200 hover:scale-105">
                          <Info className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                          More Info
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal indicators */}
              <div className="absolute bottom-8 right-8 flex gap-1 z-20">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1 h-8 transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        {/* Netflix-style Content Rows */}
        <div className="relative z-10 -mt-8 md:-mt-12 lg:-mt-16 pb-8">


          {/* Latest Movies */}
          <section className="mb-12">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">Latest Movies</h2>
                <Link href="/movies" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">See All</Link>
              </div>
              <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                {latestMovies.length > 0 ? (
                  latestMovies.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                      <NetflixCard content={movie} type="movie" />
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center w-full py-8">
                    <InlineSpinner text="Loading latest movies..." />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Latest Series */}
          <section className="mb-12">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">Latest Series</h2>
                <Link href="/series" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">See All</Link>
              </div>
              <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                {latestSeries.length > 0 ? (
                  latestSeries.map((show) => (
                    <div key={show.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                      <NetflixCard content={show} type="series" />
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center w-full py-8">
                    <InlineSpinner text="Loading latest series..." />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Genre Rows */}
          {genreRows.length > 0 ? (
            genreRows.map((genre) => (
              <section className="mb-12" key={genre.name}>
                <div className="container mx-auto px-4 md:px-12">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">{genre.name} Movies</h2>
                    <Link href="/movies" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">See All</Link>
                  </div>
                  <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                    {genre.movies.map((item) => (
                      <div key={item.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                        <NetflixCard content={item} type={item.type || 'movie'} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))
          ) : !genresLoaded ? (
            <div className="flex justify-center w-full py-12">
              <InlineSpinner text="Loading genre collections..." />
            </div>
          ) : null}
        </div>
      </div>

      {/* Auth Required Modal */}
      <AuthRequiredModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        action={authModal.action}
        requirePremium={authModal.requirePremium}
      />
    </>
  );
}