"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

import { NetflixCard } from "@/components/NetflixCard";
import { HeartbeatRowSkeleton, HeartbeatPageLoader } from "@/components/HeartbeatLoader";

import { useEffect, useState, useRef } from "react";
import { getVJContentClient, getMoviesClient, getSeriesClient, getGenreRowsClient, getTrendingContentClient, getTrendingContentClientMonthly } from "@/lib/api-client";

import { Movie, Series } from "@/lib/supabase";

import { useAuthCheck } from "@/components/AuthRequiredModal";
import AuthRequiredModal from "@/components/AuthRequiredModal";

export const dynamic = 'force-dynamic'

// FAQ data used in both the rendered FAQ section and JSON-LD schema
const FAQ_ITEMS = [
  {
    q: "What are Luganda Translated Movies (Katogo)?" ,
    a: "Luganda translated movies — also called 'katogo' movies — are international films that have been narrated and translated into Luganda, Uganda's most widely spoken local language, by a professional Video Jockey (VJ). VJs like VJ Junior, Omutaka Ice P, and VJ Jingo provide live or pre-recorded Luganda narration over the original audio, making Hollywood blockbusters and Asian action films accessible and entertaining for Ugandan audiences."
  },
  {
    q: "Where can I watch movies translated by VJ Junior, Omutaka Ice P, and VJ Jingo?",
    a: "Kilax Movies is the official home of Ugandan VJ-translated content. You can browse and stream the full catalogs of VJ Junior, Omutaka Ice P (Ice P), VJ Jingo (VJ Jjingo), VJ Emmy, VJ Moon, VJ KK, and many other top Ugandan VJs directly on kilaxmovies.com or by downloading the free Kilax Movies app for Android."
  },
  {
    q: "How do I download Luganda translated movies on Kilax Movies?",
    a: "Premium subscribers on Kilax Movies can download movies and series for offline viewing. Simply upgrade to a Kilax Premium subscription, find the movie or series you want, and tap the Download button. Downloads are available for all VJ-translated content including movies by VJ Junior, Omutaka Ice P, VJ Jingo, and more."
  },
  {
    q: "Is Kilax Movies the same as Kilax or KilaxMovies?",
    a: "Yes — Kilax Movies, Kilax, and KilaxMovies all refer to the same platform at kilaxmovies.com. We are Uganda's #1 dedicated streaming service for Luganda translated movies and series, featuring content from VJ Junior, Omutaka Ice P, VJ Jingo (VJ Jjingo), VJ Emmy, and other top Ugandan VJs."
  },
  {
    q: "Who are the best Ugandan VJs for translated movies?",
    a: "Uganda's most popular VJs include: VJ Junior (known for action and thriller translations), Omutaka Ice P/Ice P (legendary for Kung Fu and Sci-Fi movies), VJ Jingo/VJ Jjingo (famous for drama and series), VJ Emmy (comedy specialist), VJ Moon (horror and suspense), and VJ KK (action and Bollywood). All their translated content is available on Kilax Movies."
  },
  {
    q: "Can I watch Kilax Movies for free?",
    a: "Yes! Kilax Movies offers free access to a selection of Luganda translated movies and series. For the full library including downloads, HD streaming, and exclusive VJ content, upgrade to Kilax Premium — Uganda's most affordable movie subscription service."
  },
];

type VJContent = (Movie | Series) & {
  type: 'movie' | 'series';
  vjs: { id: string; name: string } | null;
  is_premium?: boolean;
};

// Module-level in-memory cache for blazing fast 0ms return navigation
let cachedHomeData: {
  featured?: VJContent[];
  movies?: any[];
  series?: any[];
  genres?: { name: string; movies: any[] }[];
  trending?: any[];
  trendingMonthly?: any[];
} | null = null;

export default function HomePage() {
  const [featuredContent, setFeaturedContent] = useState<VJContent[]>(() => cachedHomeData?.featured || []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestMovies, setLatestMovies] = useState<any[]>(() => cachedHomeData?.movies || []);
  const [latestSeries, setLatestSeries] = useState<any[]>(() => cachedHomeData?.series || []);
  const [genreRows, setGenreRows] = useState<{ name: string; movies: any[] }[]>(() => cachedHomeData?.genres || []);
  const [trendingContent, setTrendingContent] = useState<any[]>(() => cachedHomeData?.trending || []);
  const [trendingContentMonthly, setTrendingContentMonthly] = useState<any[]>(() => cachedHomeData?.trendingMonthly || []);
  
  const [loadingHero, setLoadingHero] = useState(() => !cachedHomeData?.featured?.length);
  const [loadingMovies, setLoadingMovies] = useState(() => !cachedHomeData?.movies?.length);
  const [loadingSeries, setLoadingSeries] = useState(() => !cachedHomeData?.series?.length);
  const [loadingGenres, setLoadingGenres] = useState(() => !cachedHomeData?.genres?.length);
  const [loadingTrending, setLoadingTrending] = useState(() => !cachedHomeData?.trending?.length);
  const [loadingTrendingMonthly, setLoadingTrendingMonthly] = useState(() => !cachedHomeData?.trendingMonthly?.length);

  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    action: 'play' | 'download';
    requirePremium?: boolean;
  }>({ isOpen: false, action: 'play' });

  // Auth hook
  const { checkAuth } = useAuthCheck();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    // Check sessionStorage fallback if module cache was empty
    if (!cachedHomeData) {
      try {
        const stored = sessionStorage.getItem('kilax_home_cache_v1');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.featured?.length) setFeaturedContent(parsed.featured);
          if (parsed.movies?.length) setLatestMovies(parsed.movies);
          if (parsed.series?.length) setLatestSeries(parsed.series);
          if (parsed.genres?.length) setGenreRows(parsed.genres);
          if (parsed.trending?.length) { setTrendingContent(parsed.trending); setLoadingTrending(false); }
          if (parsed.trendingMonthly?.length) { setTrendingContentMonthly(parsed.trendingMonthly); setLoadingTrendingMonthly(false); }
          setLoadingHero(false);
          setLoadingMovies(false);
          setLoadingSeries(false);
          setLoadingGenres(false);
          cachedHomeData = parsed;
        }
      } catch {}
    }

    // 1. FAST PARALLEL FETCH: Hero Content
    getVJContentClient(8).then((vjData) => {
      if (Array.isArray(vjData) && vjData.length > 0) {
        const formatted = (vjData as any[]).map((item: any) => ({ ...item, type: item.type || 'movie' })) as VJContent[];
        setFeaturedContent(formatted);
        cachedHomeData = { ...(cachedHomeData || {}), featured: formatted };
      }
      setLoadingHero(false);
    }).catch(() => {
      setLoadingHero(false);
    });

    // 2. FAST PARALLEL FETCH: Latest Movies (Updates row independently immediately)
    getMoviesClient(1, 12).then((moviesRes) => {
      if (moviesRes?.data?.length > 0) {
        setLatestMovies(moviesRes.data);
        cachedHomeData = { ...(cachedHomeData || {}), movies: moviesRes.data };
      }
      setLoadingMovies(false);
    }).catch(() => {
      setLoadingMovies(false);
    });

    // 3. FAST PARALLEL FETCH: Latest Series (Updates row independently immediately)
    getSeriesClient(1, 12).then((seriesRes) => {
      if (seriesRes?.data?.length > 0) {
        setLatestSeries(seriesRes.data);
        cachedHomeData = { ...(cachedHomeData || {}), series: seriesRes.data };
      }
      setLoadingSeries(false);
    }).catch(() => {
      setLoadingSeries(false);
    });

    // 4. FAST PARALLEL FETCH: Genre Collections
    getGenreRowsClient(12).then((genresRes) => {
      let finalGenres = genresRes;
      if (!finalGenres || finalGenres.length === 0) {
        // Fallback extract from existing items if needed
        finalGenres = [];
      }
      setGenreRows(finalGenres);
      cachedHomeData = { ...(cachedHomeData || {}), genres: finalGenres };
      setLoadingGenres(false);
      try {
        if (cachedHomeData) {
          sessionStorage.setItem('kilax_home_cache_v1', JSON.stringify(cachedHomeData));
        }
      } catch {}
    }).catch(() => {
      setLoadingGenres(false);
    });

    // 5. FAST PARALLEL FETCH: Trending Content (Week)
    getTrendingContentClient(16).then((trendingRes) => {
      if (Array.isArray(trendingRes) && trendingRes.length > 0) {
        setTrendingContent(trendingRes);
        cachedHomeData = { ...(cachedHomeData || {}), trending: trendingRes };
        try {
          if (cachedHomeData) {
            sessionStorage.setItem('kilax_home_cache_v1', JSON.stringify(cachedHomeData));
          }
        } catch {}
      }
      setLoadingTrending(false);
    }).catch(() => {
      setLoadingTrending(false);
    });

    // 6. FAST PARALLEL FETCH: Trending Content (Month)
    getTrendingContentClientMonthly(24).then((trendingRes) => {
      if (Array.isArray(trendingRes) && trendingRes.length > 0) {
        // Randomize the items to ensure the monthly trending section looks completely different
        const shuffled = [...trendingRes].sort(() => Math.random() - 0.5);
        setTrendingContentMonthly(shuffled);
        cachedHomeData = { ...(cachedHomeData || {}), trendingMonthly: shuffled };
        try {
          if (cachedHomeData) {
            sessionStorage.setItem('kilax_home_cache_v1', JSON.stringify(cachedHomeData));
          }
        } catch {}
      }
      setLoadingTrendingMonthly(false);
    }).catch(() => {
      setLoadingTrendingMonthly(false);
    });

  }, []);

  // Auto-slide functionality for Hero
  useEffect(() => {
    if (featuredContent.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredContent.length]);

  if (loadingHero && featuredContent.length === 0) {
    return <HeartbeatPageLoader text="Initializing Kilax Cinema..." />;
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
                      priority={index === 0}
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
                        <span className="border border-orange-400 text-orange-400 px-1.5 py-0.5 md:px-2 md:py-1 text-xs font-bold rounded">
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
        <div className="relative z-10 -mt-2 pb-8 pt-6 bg-gradient-to-t from-black via-black to-transparent trending-container">

          <style>{`
            @keyframes shimmer-purple {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
            /* Add intense purple glow to NetflixCard inside trending sections */
            .trending-section .group > a > div {
              transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s ease;
            }
            .trending-section .group:hover > a > div {
              box-shadow: 0 0 35px 8px rgba(168, 85, 247, 0.5), 0 0 0 2px rgba(168, 85, 247, 0.9);
              border-radius: 0.5rem;
            }
          `}</style>

          {/* ===== TRENDING ROW (THIS WEEK) ===== */}
          {(trendingContent.length > 0 || loadingTrending) && (
            <section className="mb-12 trending-section">
              <div className="container mx-auto px-4 md:px-12">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center">
                    <h2 className="text-xl md:text-2xl font-black tracking-tight"
                        style={{ background: 'linear-gradient(90deg, #d8b4fe, #9333ea, #d8b4fe)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundSize: '200% auto', animation: 'shimmer-purple 2s linear infinite' }}>
                      Trending
                    </h2>
                  </div>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.8), transparent)' }}></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500 text-purple-300 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    This Week
                  </span>
                </div>

                {loadingTrending && trendingContent.length === 0 ? (
                  <HeartbeatRowSkeleton title="" />
                ) : (
                  <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide pt-2 px-1 -mx-1">
                    {trendingContent.map((item: any) => (
                      <div key={item.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                        <NetflixCard content={item} type={item.type || 'movie'} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ===== TRENDING ROW (THIS MONTH) ===== */}
          {(trendingContentMonthly.length > 0 || loadingTrendingMonthly) && (
            <section className="mb-12 trending-section">
              <div className="container mx-auto px-4 md:px-12">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center">
                    <h2 className="text-xl md:text-2xl font-black tracking-tight"
                        style={{ background: 'linear-gradient(90deg, #d8b4fe, #9333ea, #d8b4fe)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundSize: '200% auto', animation: 'shimmer-purple 2s linear infinite' }}>
                      Trending
                    </h2>
                  </div>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.8), transparent)' }}></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500 text-purple-300 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    This Month
                  </span>
                </div>

                {loadingTrendingMonthly && trendingContentMonthly.length === 0 ? (
                  <HeartbeatRowSkeleton title="" />
                ) : (
                  <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide pt-2 px-1 -mx-1">
                    {trendingContentMonthly.map((item: any) => (
                      <div key={item.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                        <NetflixCard content={item} type={item.type || 'movie'} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
          {/* ===== END TRENDING SECTIONS ===== */}

          {/* Latest Movies Row with Heartbeat Life-Support Loader */}
          <section className="mb-12">
            <div className="container mx-auto px-4 md:px-12">
              {loadingMovies && latestMovies.length === 0 ? (
                <HeartbeatRowSkeleton title="Latest Movies" />
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">Latest Movies</h2>
                    <Link href="/movies" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">See All</Link>
                  </div>
                  <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                    {latestMovies.map((movie) => (
                      <div key={movie.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                        <NetflixCard content={movie} type="movie" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Latest Series Row with Heartbeat Life-Support Loader */}
          <section className="mb-12">
            <div className="container mx-auto px-4 md:px-12">
              {loadingSeries && latestSeries.length === 0 ? (
                <HeartbeatRowSkeleton title="Latest Series" />
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">Latest Series</h2>
                    <Link href="/series" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">See All</Link>
                  </div>
                  <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                    {latestSeries.map((show) => (
                      <div key={show.id} className="flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]">
                        <NetflixCard content={show} type="series" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Genre Rows with Heartbeat Life-Support Loader */}
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
          ) : loadingGenres ? (
            <div className="container mx-auto px-4 md:px-12 mb-12">
              <HeartbeatRowSkeleton title="Genre Collections" />
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