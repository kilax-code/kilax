(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/reelplexi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReelplexiAppNotifications",
    ()=>getReelplexiAppNotifications,
    "getReelplexiEpisodeDownloadUrl",
    ()=>getReelplexiEpisodeDownloadUrl,
    "getReelplexiEpisodeStream",
    ()=>getReelplexiEpisodeStream,
    "getReelplexiEpisodes",
    ()=>getReelplexiEpisodes,
    "getReelplexiGenres",
    ()=>getReelplexiGenres,
    "getReelplexiMovieById",
    ()=>getReelplexiMovieById,
    "getReelplexiMovieDownloadUrl",
    ()=>getReelplexiMovieDownloadUrl,
    "getReelplexiMovieStream",
    ()=>getReelplexiMovieStream,
    "getReelplexiMovieTrailers",
    ()=>getReelplexiMovieTrailers,
    "getReelplexiMovies",
    ()=>getReelplexiMovies,
    "getReelplexiMoviesByGenre",
    ()=>getReelplexiMoviesByGenre,
    "getReelplexiRelatedMoviesByGenre",
    ()=>getReelplexiRelatedMoviesByGenre,
    "getReelplexiRelatedSeriesByGenre",
    ()=>getReelplexiRelatedSeriesByGenre,
    "getReelplexiSeries",
    ()=>getReelplexiSeries,
    "getReelplexiSeriesByGenre",
    ()=>getReelplexiSeriesByGenre,
    "getReelplexiSeriesById",
    ()=>getReelplexiSeriesById,
    "getReelplexiSeriesTrailers",
    ()=>getReelplexiSeriesTrailers,
    "getReelplexiTrendingAll",
    ()=>getReelplexiTrendingAll,
    "getReelplexiTrendingMovies",
    ()=>getReelplexiTrendingMovies,
    "getReelplexiTrendingSeries",
    ()=>getReelplexiTrendingSeries,
    "getReelplexiVJs",
    ()=>getReelplexiVJs,
    "normalizeReelplexiEpisode",
    ()=>normalizeReelplexiEpisode,
    "normalizeReelplexiMovie",
    ()=>normalizeReelplexiMovie,
    "normalizeReelplexiSeries",
    ()=>normalizeReelplexiSeries,
    "searchReelplexiAll",
    ()=>searchReelplexiAll,
    "searchReelplexiMovies",
    ()=>searchReelplexiMovies,
    "searchReelplexiSeries",
    ()=>searchReelplexiSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const REELPLEXI_API_KEY = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REELPLEXI_API_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REELPLEXI_API_KEY || '').replace(/[^\x20-\x7E]/g, '').trim();
const isServer = ("TURBOPACK compile-time value", "object") === 'undefined';
const REELPLEXI_BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '/api/reelplexi';
class ReelplexiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
        this.name = 'ReelplexiError';
    }
}
async function fetchReelplexi(endpoint, params = {}) {
    let origin = '';
    if ("TURBOPACK compile-time truthy", 1) {
        origin = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    const urlString = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${origin}${REELPLEXI_BASE_URL}${endpoint}`;
    let queryString = '';
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
        queryString = '?' + paramKeys.map((k)=>`${encodeURIComponent(k)}=${encodeURIComponent(String(params[k]))}`).join('&');
    }
    const fullUrl = `${urlString}${queryString}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let res;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Client-side: use XMLHttpRequest to bypass Next.js buggy fetch polyfills on old TVs
        res = await new Promise((resolve, reject)=>{
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', fullUrl, true);
                for(const k in headers){
                    if (Object.prototype.hasOwnProperty.call(headers, k)) {
                        xhr.setRequestHeader(k, headers[k]);
                    }
                }
                xhr.onload = function() {
                    resolve({
                        ok: xhr.status >= 200 && xhr.status < 300,
                        status: xhr.status,
                        text: async ()=>xhr.responseText,
                        json: async ()=>{
                            try {
                                return JSON.parse(xhr.responseText);
                            } catch (e) {
                                return {};
                            }
                        }
                    });
                };
                xhr.onerror = function() {
                    reject(new Error('Network request failed'));
                };
                xhr.send();
            } catch (e) {
                reject(e);
            }
        });
    }
    if (!res.ok) {
        let message = 'Unknown API error';
        const text = await res.text();
        try {
            const body = JSON.parse(text);
            if (body.detail) {
                const detailMsg = typeof body.detail === 'string' ? body.detail : body.detail.error?.message || JSON.stringify(body.detail);
                throw new ReelplexiError(res.status, `Reelplexi API error (HTTP ${res.status}): ${detailMsg}`);
            }
            if (body.error) {
                message = typeof body.error === 'string' ? body.error : body.error.message || JSON.stringify(body.error);
            }
        } catch (e) {
            if (e instanceof ReelplexiError) throw e;
            throw new ReelplexiError(res.status, `HTTP error ${res.status}: ${text.substring(0, 150)}`);
        }
        throw new ReelplexiError(res.status, `Reelplexi API error: ${message}`);
    }
    const body = await res.json();
    return body;
}
// Helpers
const asString = (val)=>val ? String(val).trim() : undefined;
const yearToDate = (year)=>year ? `${year}-01-01` : undefined;
function extractVjName(raw) {
    const direct = asString(raw.vj_name) || asString(raw.vj) || asString(raw.translator);
    if (direct) return direct;
    const versions = raw.available_vj_versions;
    if (Array.isArray(versions) && versions.length > 0 && typeof versions[0] === 'object') {
        return asString(versions[0].vj_name) || asString(versions[0].name) || null;
    }
    return null;
}
function normalizeGenres(genres) {
    if (!Array.isArray(genres)) return [];
    return genres.map((g)=>asString(g)).filter(Boolean);
}
function normalizeReelplexiMovie(raw) {
    if (!raw) return null;
    const genres = normalizeGenres(raw.genres);
    const vjName = extractVjName(raw);
    const posterUrl = asString(raw.poster_url) || asString(raw.thumbnail_url) || '';
    const backdropUrl = asString(raw.backdrop_url) || posterUrl;
    return {
        id: asString(raw.id) || '',
        title: asString(raw.title) || asString(raw.name) || 'Untitled',
        description: asString(raw.description) || asString(raw.overview) || asString(raw.plot) || asString(raw.synopsis) || asString(raw.storyline) || '',
        release_date: asString(raw.release_date) || asString(raw.released_at) || yearToDate(raw.year) || new Date().toISOString(),
        thumbnail_url: posterUrl,
        cover_image_url: backdropUrl,
        trailer_url: asString(raw.trailer_url),
        genre_ids: genres.map((g)=>g.toLowerCase()),
        duration: raw.duration_mins || raw.runtime || 120,
        published: true,
        premium: raw.premium !== false,
        recommend: raw.recommend === true,
        popular: raw.popular === true,
        latest: raw.latest === true,
        vj_id: vjName ? vjName.toLowerCase() : undefined,
        video_url: asString(raw.stream_url) || asString(raw.proxy_url),
        embed_url: asString(raw.embed_url) || `https://embed.reelplexi.com/movie/${raw.id}?key=${REELPLEXI_API_KEY}`,
        tmdb_id: raw.tmdb_id || undefined,
        vjs: vjName ? {
            id: vjName.toLowerCase(),
            name: vjName
        } : null,
        type: 'movie'
    };
}
function normalizeReelplexiSeries(raw) {
    if (!raw) return null;
    const genres = normalizeGenres(raw.genres);
    const vjName = extractVjName(raw);
    const posterUrl = asString(raw.poster_url) || asString(raw.thumbnail_url) || '';
    const backdropUrl = asString(raw.backdrop_url) || posterUrl;
    const seriesId = asString(raw.id) || '';
    // Preserve embedded seasons and their episodes — the dedicated episodes
    // endpoint is unreliable; this embedded data is the source of truth.
    const rawSeasons = Array.isArray(raw.seasons) ? raw.seasons : [];
    const seasons = rawSeasons.map((s)=>({
            season_number: s.season_number || 1,
            name: s.name || `Season ${s.season_number || 1}`,
            overview: s.overview || '',
            episode_count: s.episode_count || (Array.isArray(s.episodes) ? s.episodes.length : 0),
            poster_path: s.poster_path || s.poster_url || '',
            episodes: Array.isArray(s.episodes) ? s.episodes.map((ep)=>normalizeReelplexiEpisode(seriesId, s.season_number || 1, ep)) : []
        }));
    return {
        id: seriesId,
        title: asString(raw.title) || asString(raw.name) || 'Untitled',
        description: asString(raw.description) || asString(raw.overview) || asString(raw.plot) || asString(raw.synopsis) || asString(raw.storyline) || '',
        release_date: asString(raw.first_air_date) || yearToDate(raw.year) || asString(raw.release_date) || new Date().toISOString(),
        thumbnail_url: posterUrl,
        cover_image_url: backdropUrl,
        trailer_url: asString(raw.trailer_url),
        genre_ids: genres.map((g)=>g.toLowerCase()),
        published: true,
        premium: raw.premium !== false,
        created_at: raw.created_at || new Date().toISOString(),
        vj_id: vjName ? vjName.toLowerCase() : undefined,
        tmdb_id: raw.tmdb_id || undefined,
        vjs: vjName ? {
            id: vjName.toLowerCase(),
            name: vjName
        } : null,
        type: 'series',
        season_count: raw.no_of_seasons || seasons.length || 0,
        seasons
    };
}
function normalizeReelplexiEpisode(seriesId, seasonNumber, raw) {
    if (!raw) return null;
    const episodeNumber = parseInt(raw.episode_number || 0, 10);
    // Support both dedicated endpoint format (poster_url/thumbnail_url) and embedded format (still_path)
    const posterUrl = asString(raw.poster_url) || asString(raw.thumbnail_url) || asString(raw.still_path) || '';
    const backdropUrl = asString(raw.backdrop_url) || posterUrl;
    const syntheticId = `${seriesId}:season:${seasonNumber}:episode:${episodeNumber}`;
    return {
        id: syntheticId,
        season_id: `${seriesId}:season:${seasonNumber}`,
        title: asString(raw.title) || asString(raw.name) || `Episode ${episodeNumber}`,
        episode_number: episodeNumber,
        description: asString(raw.description) || asString(raw.overview) || '',
        // Support both dedicated endpoint (stream_url/proxy_url) and embedded format (video_url)
        video_url: asString(raw.stream_url) || asString(raw.proxy_url) || asString(raw.video_url),
        embed_url: asString(raw.embed_url) || `https://embed.reelplexi.com/tv/${seriesId}/${seasonNumber}/${episodeNumber}?key=${REELPLEXI_API_KEY}`,
        published: true,
        premium: raw.premium !== false,
        duration: raw.duration_mins || raw.runtime || 45,
        thumbnail_url: posterUrl,
        cover_image_url: backdropUrl,
        created_at: raw.created_at || new Date().toISOString()
    };
}
async function getReelplexiMovies(page = 1, perPage = 50, genre) {
    const params = {
        page,
        per_page: perPage
    };
    if (genre) params.genre = genre;
    const res = await fetchReelplexi('/v1/movies', params);
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function searchReelplexiMovies(query, page = 1, perPage = 50, vj, genre, year) {
    const params = {
        page,
        per_page: perPage
    };
    // Normalize VJ name to lowercase so ilike on the API side matches all casing variants
    const vjNorm = vj ? vj.toLowerCase() : undefined;
    if (genre) params.genre = genre;
    if (year) params.year = year;
    // /v1/movies/search requires q with min_length=1.
    // When there is no search text, use the list endpoint which accepts vj as an optional filter.
    if (!query.trim()) {
        if (vjNorm) params.vj = vjNorm;
        const res = await fetchReelplexi('/v1/movies', params);
        return (res.data || []).map(normalizeReelplexiMovie);
    }
    params.q = query.trim();
    if (vjNorm) params.vj = vjNorm;
    const res = await fetchReelplexi('/v1/movies/search', params);
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function searchReelplexiAll(query, page = 1, perPage = 50, vj, genre) {
    const vjNorm = vj ? vj.toLowerCase() : undefined;
    // /v1/search requires q with min_length=1.
    // When there is no search text, fetch movies and series list endpoints separately.
    if (!query.trim()) {
        const [moviesRes, seriesRes] = await Promise.all([
            searchReelplexiMovies('', page, Math.ceil(perPage / 2), vjNorm, genre),
            searchReelplexiSeries('', page, Math.ceil(perPage / 2), vjNorm, genre)
        ]);
        return [
            ...moviesRes.map((m)=>({
                    ...m,
                    type: 'movie'
                })),
            ...seriesRes.map((s)=>({
                    ...s,
                    type: 'series'
                }))
        ];
    }
    const params = {
        page,
        per_page: perPage,
        q: query.trim()
    };
    if (vjNorm) params.vj = vjNorm;
    if (genre) params.genre = genre;
    const res = await fetchReelplexi('/v1/search', params);
    // The search endpoint returns mixed content (movies and series)
    return (res.data || []).map((item)=>{
        if (item.type === 'movie' || item.type === undefined) {
            return {
                ...normalizeReelplexiMovie(item),
                type: 'movie'
            };
        } else {
            return {
                ...normalizeReelplexiSeries(item),
                type: 'series'
            };
        }
    });
}
async function getReelplexiVJs(page = 1, perPage = 100) {
    const params = {
        page,
        per_page: perPage
    };
    const res = await fetchReelplexi('/v1/vj', params);
    return res.data || [];
}
async function getReelplexiMovieById(id) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}`);
        return normalizeReelplexiMovie(res.data || res);
    } catch (e) {
        if (e instanceof ReelplexiError && e.status === 404) return null;
        throw e;
    }
}
async function getReelplexiSeries(page = 1, perPage = 50, genre) {
    const params = {
        page,
        per_page: perPage
    };
    if (genre) params.genre = genre;
    const res = await fetchReelplexi('/v1/series', params);
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function searchReelplexiSeries(query, page = 1, perPage = 50, vj, genre, year) {
    const params = {
        page,
        per_page: perPage
    };
    const vjNorm = vj ? vj.toLowerCase() : undefined;
    if (genre) params.genre = genre;
    if (year) params.year = year;
    // /v1/series/search requires q with min_length=1.
    // When there is no search text, use the list endpoint which accepts vj as an optional filter.
    if (!query.trim()) {
        if (vjNorm) params.vj = vjNorm;
        const res = await fetchReelplexi('/v1/series', params);
        return (res.data || []).map(normalizeReelplexiSeries);
    }
    params.q = query.trim();
    if (vjNorm) params.vj = vjNorm;
    const res = await fetchReelplexi('/v1/series/search', params);
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function getReelplexiSeriesById(id) {
    try {
        const res = await fetchReelplexi(`/v1/series/${id}`);
        return normalizeReelplexiSeries(res.data || res);
    } catch (e) {
        if (e instanceof ReelplexiError && e.status === 404) return null;
        throw e;
    }
}
async function getReelplexiEpisodes(seriesId, season) {
    // Try the dedicated endpoint first
    try {
        const res = await fetchReelplexi(`/v1/series/${seriesId}/seasons/${season}/episodes`);
        const episodes = (res.data || []).map((ep)=>normalizeReelplexiEpisode(seriesId, season, ep));
        if (episodes.length > 0) return episodes;
    // Empty result — fall through to embedded extraction below
    } catch (e) {
        if (!(e instanceof ReelplexiError && e.status === 404)) throw e;
    // 404 — fall through to embedded extraction below
    }
    // Fallback: the series endpoint already embeds seasons[].episodes[].
    // Extract from there instead of returning empty.
    try {
        const seriesRes = await fetchReelplexi(`/v1/series/${seriesId}`);
        const seriesRaw = seriesRes.data || seriesRes;
        const rawSeasons = Array.isArray(seriesRaw.seasons) ? seriesRaw.seasons : [];
        const target = rawSeasons.find((s)=>(s.season_number || 1) === season);
        if (target && Array.isArray(target.episodes) && target.episodes.length > 0) {
            return target.episodes.map((ep)=>normalizeReelplexiEpisode(seriesId, season, ep));
        }
    } catch  {
    // Ignore — return empty below
    }
    return [];
}
async function getReelplexiGenres() {
    const res = await fetchReelplexi('/v1/genres');
    if (!Array.isArray(res.data)) return [];
    return res.data.map((g)=>{
        const name = asString(g) || '';
        return {
            id: name.toLowerCase(),
            name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        };
    });
}
async function getReelplexiTrendingAll(page = 1, perPage = 20, timeWindow = 'week') {
    const res = await fetchReelplexi(`/v1/trending/all`, {
        page,
        per_page: perPage,
        time_window: timeWindow
    });
    return (res.data || []).map((item)=>{
        if (item.type === 'series' || item.first_air_date != null) {
            return normalizeReelplexiSeries(item);
        }
        return normalizeReelplexiMovie(item);
    });
}
async function getReelplexiTrendingMovies(page = 1, perPage = 20) {
    const res = await fetchReelplexi('/v1/trending/movies', {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function getReelplexiTrendingSeries(page = 1, perPage = 20) {
    const res = await fetchReelplexi('/v1/trending/series', {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function getReelplexiMoviesByGenre(genre, page = 1, perPage = 20) {
    const res = await fetchReelplexi(`/v1/genres/${genre.toLowerCase()}/movies`, {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function getReelplexiSeriesByGenre(genre, page = 1, perPage = 20) {
    const res = await fetchReelplexi(`/v1/genres/${genre.toLowerCase()}/series`, {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function getReelplexiRelatedMoviesByGenre(id, page = 1, perPage = 20) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}/related/genre`, {
            page,
            per_page: perPage
        });
        return (res.data || []).map(normalizeReelplexiMovie);
    } catch  {
        return [];
    }
}
async function getReelplexiRelatedSeriesByGenre(id, page = 1, perPage = 20) {
    try {
        const res = await fetchReelplexi(`/v1/series/${id}/related/genre`, {
            page,
            per_page: perPage
        });
        return (res.data || []).map(normalizeReelplexiSeries);
    } catch  {
        return [];
    }
}
async function getReelplexiMovieTrailers(id) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}/trailers`);
        let trailers = res.trailers;
        if (trailers && !Array.isArray(trailers) && Array.isArray(trailers.trailers)) {
            trailers = trailers.trailers;
        }
        return Array.isArray(trailers) ? trailers : [];
    } catch  {
        return [];
    }
}
async function getReelplexiSeriesTrailers(id) {
    try {
        const res = await fetchReelplexi(`/v1/series/${id}/trailers`);
        let trailers = res.trailers;
        if (trailers && !Array.isArray(trailers) && Array.isArray(trailers.trailers)) {
            trailers = trailers.trailers;
        }
        return Array.isArray(trailers) ? trailers : [];
    } catch  {
        return [];
    }
}
async function getReelplexiMovieStream(id) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}/stream`);
        const streamData = res.data || res;
        const url = streamData.stream_url || streamData.video_url || streamData.proxy_url || streamData.url;
        return {
            stream_url: url,
            proxy_url: streamData.proxy_url || url,
            video_url: url
        };
    } catch  {
        return null;
    }
}
async function getReelplexiEpisodeStream(seriesId, season, episode) {
    try {
        const res = await fetchReelplexi(`/v1/series/${seriesId}/seasons/${season}/episodes/${episode}/stream`);
        const streamData = res.data || res;
        const url = streamData.stream_url || streamData.video_url || streamData.proxy_url || streamData.url;
        return {
            stream_url: url,
            proxy_url: streamData.proxy_url || url,
            video_url: url
        };
    } catch  {
        return null;
    }
}
async function getReelplexiMovieDownloadUrl(id) {
    try {
        const res = await fetchReelplexi(`/v1/download/movie/${id}`);
        return res.download_url;
    } catch (e) {
        console.error('Error fetching movie download URL:', e);
        throw e;
    }
}
async function getReelplexiEpisodeDownloadUrl(seriesId, season, episode) {
    try {
        const res = await fetchReelplexi(`/v1/download/tv/${seriesId}/${season}/${episode}`);
        return res.download_url;
    } catch (e) {
        console.error('Error fetching episode download URL:', e);
        throw e;
    }
}
async function getReelplexiAppNotifications() {
    try {
        const res = await fetchReelplexi('/v1/account/app-notifications');
        return res.notifications || [];
    } catch (e) {
        console.error('Error fetching app notifications:', e);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEpisodeDownload",
    ()=>getEpisodeDownload,
    "getEpisodeStream",
    ()=>getEpisodeStream,
    "getEpisodes",
    ()=>getEpisodes,
    "getFeaturedMovie",
    ()=>getFeaturedMovie,
    "getGenreRowsForHome",
    ()=>getGenreRowsForHome,
    "getGenres",
    ()=>getGenres,
    "getKilaxExclusiveContent",
    ()=>getKilaxExclusiveContent,
    "getKilaxExclusiveMovies",
    ()=>getKilaxExclusiveMovies,
    "getKilaxExclusiveSeries",
    ()=>getKilaxExclusiveSeries,
    "getMovieById",
    ()=>getMovieById,
    "getMovieDownload",
    ()=>getMovieDownload,
    "getMovieStream",
    ()=>getMovieStream,
    "getMovieTrailers",
    ()=>getMovieTrailers,
    "getMovies",
    ()=>getMovies,
    "getMoviesByCategory",
    ()=>getMoviesByCategory,
    "getPopularMovies",
    ()=>getPopularMovies,
    "getRelatedMoviesByGenre",
    ()=>getRelatedMoviesByGenre,
    "getRelatedSeriesByGenre",
    ()=>getRelatedSeriesByGenre,
    "getSeries",
    ()=>getSeries,
    "getSeriesByCategory",
    ()=>getSeriesByCategory,
    "getSeriesById",
    ()=>getSeriesById,
    "getSeriesTrailers",
    ()=>getSeriesTrailers,
    "getTranslatedContent",
    ()=>getTranslatedContent,
    "getTranslatedMovies",
    ()=>getTranslatedMovies,
    "getTranslatedSeries",
    ()=>getTranslatedSeries,
    "getVJContent",
    ()=>getVJContent,
    "getVJMovies",
    ()=>getVJMovies,
    "getVJSeries",
    ()=>getVJSeries,
    "getVJs",
    ()=>getVJs,
    "searchAllContent",
    ()=>searchAllContent,
    "searchMovies",
    ()=>searchMovies,
    "searchSeries",
    ()=>searchSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reelplexi.ts [app-client] (ecmascript)");
;
async function getMovies(limit = 20, page = 1, genre) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovies"](page, limit, genre);
        return movies;
    } catch (error) {
        console.error('Error fetching movies from Reelplexi:', error);
        return [];
    }
}
async function getMovieById(id) {
    try {
        const movie = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieById"](id);
        return movie;
    } catch (error) {
        console.error(`Error fetching movie ${id}:`, error);
        return null;
    }
}
async function getMovieTrailers(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieTrailers"](id);
    } catch (error) {
        console.error(`Error fetching movie trailers ${id}:`, error);
        return [];
    }
}
async function getMovieStream(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieStream"](id);
    } catch (error) {
        console.error(`Error fetching movie stream ${id}:`, error);
        return null;
    }
}
async function getFeaturedMovie() {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingMovies"](1, 1);
        return movies[0] || null;
    } catch (error) {
        console.error('Error fetching featured movie from Reelplexi:', error);
        return null;
    }
}
async function getPopularMovies(limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingMovies"](1, limit);
        return movies;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
}
async function getSeries(limit = 24, page = 1, genre) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeries"](page, limit, genre);
        return series;
    } catch (error) {
        console.error('Error fetching series from Reelplexi:', error);
        return [];
    }
}
async function getSeriesById(id) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesById"](id);
        return series;
    } catch (error) {
        console.error(`Error fetching series ${id}:`, error);
        return null;
    }
}
async function getSeriesTrailers(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesTrailers"](id);
    } catch (error) {
        console.error(`Error fetching series trailers ${id}:`, error);
        return [];
    }
}
async function getEpisodes(seriesId, season) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiEpisodes"](seriesId, season);
    } catch (error) {
        console.error(`Error fetching episodes for series ${seriesId} season ${season}:`, error);
        return [];
    }
}
async function getEpisodeStream(seriesId, season, episode) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiEpisodeStream"](seriesId, season, episode);
    } catch (error) {
        console.error(`Error fetching stream for series ${seriesId} season ${season} episode ${episode}:`, error);
        return null;
    }
}
async function getTranslatedMovies(limit = 6) {
    try {
        // Fetch a larger batch to filter
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovies"](1, 50);
        return movies.filter((m)=>!m.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching translated movies:', error);
        return [];
    }
}
async function getTranslatedSeries(limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeries"](1, 50);
        return series.filter((s)=>!s.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching translated series:', error);
        return [];
    }
}
async function getTranslatedContent(limit = 12) {
    const movies = await getTranslatedMovies(limit);
    const series = await getTranslatedSeries(limit);
    const combined = [];
    const maxLength = Math.max(movies.length, series.length);
    for(let i = 0; i < maxLength; i++){
        if (movies[i]) combined.push(movies[i]);
        if (series[i]) combined.push(series[i]);
    }
    return combined.slice(0, limit);
}
async function getVJMovies(limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovies"](1, 50);
        return movies.filter((m)=>!!m.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching VJ movies:', error);
        return [];
    }
}
async function getVJSeries(limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeries"](1, 50);
        return series.filter((s)=>!!s.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching VJ series:', error);
        return [];
    }
}
async function getVJContent(limit = 12) {
    const movies = await getVJMovies(limit);
    const series = await getVJSeries(limit);
    const combined = [];
    const maxLength = Math.max(movies.length, series.length);
    for(let i = 0; i < maxLength; i++){
        if (movies[i]) combined.push(movies[i]);
        if (series[i]) combined.push(series[i]);
    }
    return combined.slice(0, limit);
}
async function getGenres() {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiGenres"]();
    } catch (error) {
        console.error('Error fetching genres from Reelplexi:', error);
        return [];
    }
}
async function getGenreRowsForHome(limit = 12) {
    try {
        const genres = await getGenres();
        let genreRows = [];
        if (genres && genres.length > 0) {
            // Take top 3 genres
            const topGenres = genres.slice(0, 3);
            const fetchedRows = await Promise.all(topGenres.map(async (genre)=>{
                try {
                    const [movies, series] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMoviesByGenre"](genre.id, 1, limit),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesByGenre"](genre.id, 1, limit)
                    ]);
                    return {
                        name: genre.name,
                        movies: movies || [],
                        series: series || []
                    };
                } catch (error) {
                    console.error(`Error fetching content for genre ${genre.name}:`, error);
                    return {
                        name: genre.name,
                        movies: [],
                        series: []
                    };
                }
            }));
            genreRows = fetchedRows.filter((row)=>row.movies.length > 0 || row.series.length > 0);
        }
        // Fallback: If API returned no genres, build them from recent content
        if (!genreRows || genreRows.length === 0) {
            console.log('Using fallback genre row generation from recent content');
            const allMovies = await getMovies(limit * 2);
            const allSeries = await getSeries(limit * 2);
            const allContent = [
                ...allMovies,
                ...allSeries
            ];
            const genreMap = new Map();
            allContent.forEach((item)=>{
                if (item.genre_ids && Array.isArray(item.genre_ids)) {
                    item.genre_ids.forEach((g)=>{
                        const prettyName = g.charAt(0).toUpperCase() + g.slice(1);
                        if (!genreMap.has(prettyName)) genreMap.set(prettyName, []);
                        if (!genreMap.get(prettyName).find((existing)=>existing.id === item.id)) {
                            genreMap.get(prettyName).push(item);
                        }
                    });
                }
            });
            const extractedGenres = Array.from(genreMap.entries()).map(([name, content])=>({
                    name,
                    movies: content.filter((item)=>item.type === 'movie'),
                    series: content.filter((item)=>item.type === 'series')
                })).sort((a, b)=>b.movies.length + b.series.length - (a.movies.length + a.series.length)).slice(0, 3);
            genreRows = extractedGenres.filter((g)=>g.movies.length >= 2 || g.series.length >= 2);
        }
        return genreRows;
    } catch (error) {
        console.error('Error fetching genre rows for home:', error);
        return [];
    }
}
async function searchMovies(query, limit = 20, page = 1, vjName, genre) {
    try {
        if (!query.trim() && !vjName) {
            return await getMovies(limit, page, genre);
        }
        const q = query.trim();
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiMovies"](q, page, limit, vjName, genre);
        return movies;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}
async function searchSeries(query, limit = 20, page = 1, vjName, genre) {
    try {
        if (!query.trim() && !vjName) {
            return await getSeries(limit, page, genre);
        }
        const q = query.trim();
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiSeries"](q, page, limit, vjName, genre);
        return series;
    } catch (error) {
        console.error('Error searching series:', error);
        return [];
    }
}
async function searchAllContent(query, limit = 50, page = 1, vjName, genre) {
    try {
        if (!query.trim() && !vjName) {
            const [m, s] = await Promise.all([
                getMovies(limit, page, genre),
                getSeries(limit, page, genre)
            ]);
            const combined = [
                ...m,
                ...s
            ].sort((a, b)=>new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
            return combined.slice(0, limit);
        }
        const q = query.trim();
        const items = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiAll"](q, page, limit, vjName, genre);
        return items;
    } catch (error) {
        console.error('Error searching all content:', error);
        return [];
    }
}
async function getVJs() {
    try {
        const vjs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiVJs"](1, 100);
        // VJ ids must be case-insensitive to match correctly on the frontend filters
        return vjs.map((vj)=>({
                id: (vj.name || '').toLowerCase(),
                name: vj.name
            }));
    } catch (error) {
        console.error('Error fetching vjs:', error);
        return [];
    }
}
async function getRelatedMoviesByGenre(movieId, genreIds, limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiRelatedMoviesByGenre"](movieId, 1, limit);
        if (movies && movies.length > 0) {
            return movies;
        }
        // Fallback logic if API returns empty
        const allMovies = await getMovies(50, 1);
        const related = allMovies.filter((m)=>m.id !== movieId).sort(()=>Math.random() - 0.5).slice(0, limit);
        return related;
    } catch (error) {
        console.error('Error fetching related movies:', error);
        return [];
    }
}
async function getRelatedSeriesByGenre(seriesId, genreIds, limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiRelatedSeriesByGenre"](seriesId, 1, limit);
        if (series && series.length > 0) {
            return series;
        }
        // Fallback logic if API returns empty
        const allSeries = await getSeries(50, 1);
        const related = allSeries.filter((s)=>s.id !== seriesId).sort(()=>Math.random() - 0.5).slice(0, limit);
        return related;
    } catch (error) {
        console.error('Error fetching related series:', error);
        return [];
    }
}
async function getKilaxExclusiveMovies(limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingMovies"](1, limit);
        return movies;
    } catch (error) {
        console.error('Error fetching Kilax exclusive movies:', error);
        return [];
    }
}
async function getKilaxExclusiveSeries(limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingSeries"](1, limit);
        return series;
    } catch (error) {
        console.error('Error fetching Kilax exclusive series:', error);
        return [];
    }
}
async function getKilaxExclusiveContent(limit = 12, timeWindow = 'week', page = 1) {
    try {
        const all = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingAll"](page, limit, timeWindow);
        return all;
    } catch (error) {
        console.error('Error fetching Kilax exclusive content:', error);
        return [];
    }
}
async function getMoviesByCategory(category, limit = 20) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMoviesByGenre"](category.toLowerCase(), 1, limit);
        return movies;
    } catch (error) {
        console.error('Error fetching movies by category:', error);
        return [];
    }
}
async function getSeriesByCategory(category, limit = 20) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesByGenre"](category.toLowerCase(), 1, limit);
        return series;
    } catch (error) {
        console.error('Error fetching series by category:', error);
        return [];
    }
}
async function getMovieDownload(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieDownloadUrl"](id);
}
async function getEpisodeDownload(seriesId, season, episode) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiEpisodeDownloadUrl"](seriesId, season, episode);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGenreRowsClient",
    ()=>getGenreRowsClient,
    "getKilaxExclusiveContentClient",
    ()=>getKilaxExclusiveContentClient,
    "getMovieByIdClient",
    ()=>getMovieByIdClient,
    "getMoviesByVJClient",
    ()=>getMoviesByVJClient,
    "getMoviesClient",
    ()=>getMoviesClient,
    "getSeriesByIdClient",
    ()=>getSeriesByIdClient,
    "getSeriesByVJClient",
    ()=>getSeriesByVJClient,
    "getSeriesClient",
    ()=>getSeriesClient,
    "getStreamUrlClient",
    ()=>getStreamUrlClient,
    "getTrendingContentClient",
    ()=>getTrendingContentClient,
    "getTrendingContentClientMonthly",
    ()=>getTrendingContentClientMonthly,
    "getVJContentClient",
    ()=>getVJContentClient,
    "getVJsClient",
    ()=>getVJsClient,
    "searchMoviesClient",
    ()=>searchMoviesClient,
    "searchSeriesClient",
    ()=>searchSeriesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reelplexi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
;
async function getMoviesClient(page = 1, limit = 50) {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovies"])(limit, page);
        return {
            data,
            hasMore: data.length >= limit
        };
    } catch (error) {
        console.error('Error fetching movies:', error);
        return {
            data: [],
            hasMore: false
        };
    }
}
async function getSeriesClient(page = 1, limit = 50) {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeries"])(limit, page);
        return {
            data,
            hasMore: data.length >= limit
        };
    } catch (error) {
        console.error('Error fetching series:', error);
        return {
            data: [],
            hasMore: false
        };
    }
}
async function getVJContentClient(limit = 12) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVJContent"])(limit);
    } catch (error) {
        console.error('Error fetching VJ content:', error);
        return [];
    }
}
async function getKilaxExclusiveContentClient(limit = 12) {
    try {
        const movies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovies"])(limit / 2);
        const series = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeries"])(limit / 2);
        const combined = [
            ...movies.map((item)=>({
                    ...item,
                    type: 'movie'
                })),
            ...series.map((item)=>({
                    ...item,
                    type: 'series'
                }))
        ];
        return combined.sort((a, b)=>new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()).slice(0, limit);
    } catch (error) {
        console.error('Error fetching exclusive content:', error);
        return [];
    }
}
async function getGenreRowsClient(limit = 12) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenreRowsForHome"])(limit);
    } catch (error) {
        console.error('Error fetching genre rows:', error);
        return [];
    }
}
async function getTrendingContentClient(limit = 16) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKilaxExclusiveContent"])(limit, 'day', 1);
    } catch (error) {
        console.error('Error fetching weekly trending content:', error);
        return [];
    }
}
async function getTrendingContentClientMonthly(limit = 16) {
    try {
        // Fetch page 2 to ensure we get a different set of trending items
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKilaxExclusiveContent"])(limit, 'week', 2);
    } catch (error) {
        console.error('Error fetching monthly trending content:', error);
        return [];
    }
}
async function searchMoviesClient(query) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchMovies"])(query);
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}
async function searchSeriesClient(query) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSeries"])(query);
    } catch (error) {
        console.error('Error searching series:', error);
        return [];
    }
}
async function getVJsClient() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVJs"])();
    } catch (error) {
        console.error('Error fetching VJs:', error);
        return [];
    }
}
async function getMoviesByVJClient(vjId, vjName) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiMovies"]('', 1, 50, vjName);
    } catch (error) {
        console.error('Error fetching movies by VJ:', error);
        return [];
    }
}
async function getSeriesByVJClient(vjId, vjName) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiSeries"]('', 1, 50, vjName);
    } catch (error) {
        console.error('Error fetching series by VJ:', error);
        return [];
    }
}
async function getMovieByIdClient(id) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovieById"])(id);
    } catch (error) {
        console.error('Error fetching movie:', error);
        return null;
    }
}
async function getSeriesByIdClient(id, season) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesById"])(id);
    } catch (error) {
        console.error('Error fetching series:', error);
        return null;
    }
}
async function getStreamUrlClient(id, type, season, episode) {
    try {
        if (type === 'movie') {
            const stream = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovieStream"])(id);
            return stream?.video_url || null;
        } else if (season !== undefined && episode !== undefined) {
            const stream = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEpisodeStream"])(id, season, episode);
            return stream?.video_url || null;
        }
        return null;
    } catch (error) {
        console.error('Error fetching stream URL:', error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NetflixCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetflixCard",
    ()=>NetflixCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const NetflixCard = ({ content, type, isNonTranslated = false })=>{
    const getHref = ()=>{
        if (isNonTranslated) {
            return `/non-translated/${type === "movie" ? "movies" : "series"}/${content.id}`;
        }
        return `/${type === "movie" ? "movies" : "series"}/${content.id}`;
    };
    // Extract VJ Name comprehensively across all possible object shapes
    const getVjName = ()=>{
        if (!content) return null;
        if ('vjs' in content && content.vjs) {
            if (typeof content.vjs === 'string' && content.vjs) return content.vjs;
            if (typeof content.vjs.name === 'string' && content.vjs.name) return content.vjs.name;
        }
        if ('vj_name' in content && typeof content.vj_name === 'string' && content.vj_name) {
            return content.vj_name;
        }
        if ('vj' in content && content.vj) {
            if (typeof content.vj === 'string' && content.vj) return content.vj;
            if (typeof content.vj.name === 'string' && content.vj.name) return content.vj.name;
        }
        if ('translator' in content && typeof content.translator === 'string' && content.translator) {
            return content.translator;
        }
        return null;
    };
    const vjName = getVjName();
    // Get the best available image URL with type safety
    const getImageUrl = ()=>{
        return content.thumbnail_url || content.cover_image_url || ('poster_url' in content && content.poster_url ? content.poster_url : '') || ('poster_path' in content && content.poster_path ? content.poster_path : '') || ('backdrop_path' in content && content.backdrop_path ? content.backdrop_path : '') || `https://via.placeholder.com/240x360/1f2937/f97316?text=${encodeURIComponent(content.title || '')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: getHref(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer transition-transform duration-200 hover:scale-105",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-[2/3] relative rounded-lg overflow-hidden bg-gray-800 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: getImageUrl(),
                                alt: content.title || `Poster for ${type}`,
                                fill: true,
                                className: "object-cover transition-opacity duration-300",
                                unoptimized: true,
                                onError: (e)=>{
                                    const target = e.target;
                                    target.src = `https://via.placeholder.com/240x360/1f2937/f97316?text=${encodeURIComponent(content.title || '')}`;
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${type === "movie" ? "bg-[#FF7F50]" : "bg-[#1ABC9C]"}`,
                                children: type === "movie" ? "Movie" : "Series"
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            vjName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1 right-1 bg-black/85 backdrop-blur-md border border-orange-500/60 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(249,115,22,0.35)] flex items-center z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-400 font-bold text-[10px] sm:text-[11px] truncate max-w-[85px] md:max-w-[110px] tracking-wide",
                                    children: vjName
                                }, void 0, false, {
                                    fileName: "[project]/components/NetflixCard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-gray-300 line-clamp-2 leading-tight",
                                    children: (typeof content.overview === 'string' && content.overview ? content.overview.slice(0, 40) : content.description?.slice(0, 40)) + '...' || 'Tap to view details'
                                }, void 0, false, {
                                    fileName: "[project]/components/NetflixCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NetflixCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/NetflixCard.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/NetflixCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-white text-xs truncate leading-tight",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/components/NetflixCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 text-[10px] text-gray-400 mt-0.5",
                        children: [
                            content.release_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: new Date(content.release_date).getFullYear()
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            'genre_ids' in content && Array.isArray(content.genre_ids) && content.genre_ids.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NetflixCard.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-400 font-medium capitalize truncate max-w-[90px]",
                                        children: content.genre_ids.slice(0, 2).join(', ')
                                    }, void 0, false, {
                                        fileName: "[project]/components/NetflixCard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NetflixCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NetflixCard.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NetflixCard.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NetflixCard;
var _c;
__turbopack_context__.k.register(_c, "NetflixCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/series/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NetflixCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SeriesPage() {
    _s();
    const [series, setSeries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedVJ, setSelectedVJ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedVJName, setSelectedVJName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [availableVJs, setAvailableVJs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showVJDropdown, setShowVJDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchAvailableVJs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeriesPage.useCallback[fetchAvailableVJs]": async ()=>{
            try {
                const vjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVJsClient"])();
                setAvailableVJs(vjs);
            } catch (error) {
                console.error('Error fetching VJs:', error);
            }
        }
    }["SeriesPage.useCallback[fetchAvailableVJs]"], []);
    const loadMoreSeries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeriesPage.useCallback[loadMoreSeries]": async ()=>{
            if (loading || !hasMore || searchQuery || selectedVJ) return;
            setLoading(true);
            try {
                const { data: seriesData, hasMore: more } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesClient"])(page, 50);
                setSeries({
                    "SeriesPage.useCallback[loadMoreSeries]": (prev)=>[
                            ...prev,
                            ...seriesData
                        ]
                }["SeriesPage.useCallback[loadMoreSeries]"]);
                setHasMore(more);
                setPage({
                    "SeriesPage.useCallback[loadMoreSeries]": (prev)=>prev + 1
                }["SeriesPage.useCallback[loadMoreSeries]"]);
            } catch (error) {
                console.error('Error fetching series:', error);
            } finally{
                setLoading(false);
            }
        }
    }["SeriesPage.useCallback[loadMoreSeries]"], [
        loading,
        hasMore,
        page,
        searchQuery,
        selectedVJ
    ]);
    const handleVJFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeriesPage.useCallback[handleVJFilter]": async (vjId, vjName)=>{
            setLoading(true);
            try {
                const filteredSeries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesByVJClient"])(vjId, vjName);
                setSeries(filteredSeries);
                setHasMore(false);
            } catch (error) {
                console.error('Error filtering series by VJ:', error);
            } finally{
                setLoading(false);
            }
        }
    }["SeriesPage.useCallback[handleVJFilter]"], []);
    const performSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeriesPage.useCallback[performSearch]": async (query)=>{
            if (query.trim()) {
                setLoading(true);
                try {
                    const searchResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSeriesClient"])(query);
                    setSeries(searchResults);
                    setHasMore(false);
                } catch (error) {
                    console.error('Error searching series:', error);
                } finally{
                    setLoading(false);
                }
            } else {
                setSeries([]);
                setPage(1);
                setHasMore(true);
            }
        }
    }["SeriesPage.useCallback[performSearch]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeriesPage.useEffect": ()=>{
            fetchAvailableVJs();
        }
    }["SeriesPage.useEffect"], [
        fetchAvailableVJs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeriesPage.useEffect": ()=>{
            const handler = setTimeout({
                "SeriesPage.useEffect.handler": ()=>{
                    if (searchQuery.trim()) {
                        setSelectedVJ("");
                        setSelectedVJName("");
                        performSearch(searchQuery);
                    } else if (!selectedVJ) {
                        setSeries([]);
                        setPage(1);
                        setHasMore(true);
                    }
                }
            }["SeriesPage.useEffect.handler"], 400);
            return ({
                "SeriesPage.useEffect": ()=>clearTimeout(handler)
            })["SeriesPage.useEffect"];
        }
    }["SeriesPage.useEffect"], [
        searchQuery,
        selectedVJ,
        performSearch
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeriesPage.useEffect": ()=>{
            if (selectedVJ && selectedVJName) {
                handleVJFilter(selectedVJ, selectedVJName);
            } else if (!searchQuery) {
                setSeries([]);
                setPage(1);
                setHasMore(true);
            }
        }
    }["SeriesPage.useEffect"], [
        selectedVJ,
        selectedVJName,
        searchQuery,
        handleVJFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeriesPage.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "SeriesPage.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && hasMore && !loading) {
                        loadMoreSeries();
                    }
                }
            }["SeriesPage.useEffect"], {
                threshold: 0.1
            });
            const currentTarget = observerTarget.current;
            if (currentTarget) {
                observer.observe(currentTarget);
            }
            return ({
                "SeriesPage.useEffect": ()=>{
                    if (currentTarget) {
                        observer.unobserve(currentTarget);
                    }
                }
            })["SeriesPage.useEffect"];
        }
    }["SeriesPage.useEffect"], [
        loadMoreSeries,
        hasMore,
        loading
    ]);
    const clearFilters = ()=>{
        setSelectedVJ("");
        setSelectedVJName("");
        setSearchQuery("");
        setSeries([]);
        setPage(1);
        setHasMore(true);
    };
    const isFiltering = searchQuery.trim().length > 0 || selectedVJ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-4xl font-bold mb-8 flex items-center",
                    children: "Series"
                }, void 0, false, {
                    fileName: "[project]/app/series/page.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-col md:flex-row gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/series/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search series...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/series/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/series/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            className: `border-gray-600 text-gray-300 hover:bg-gray-800 ${selectedVJ ? 'bg-orange-500 border-orange-500 text-white hover:bg-orange-600' : ''}`,
                                            onClick: ()=>setShowVJDropdown(!showVJDropdown),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/series/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                selectedVJ ? availableVJs.find((vj)=>vj.id === selectedVJ)?.name : 'VJ Filter',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4 ml-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/series/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/series/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        showVJDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setSelectedVJ("");
                                                            setSelectedVJName("");
                                                            setShowVJDropdown(false);
                                                        },
                                                        className: "w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded",
                                                        children: "All VJs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/series/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    availableVJs.map((vj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedVJ(vj.id);
                                                                setSelectedVJName(vj.name);
                                                                setShowVJDropdown(false);
                                                            },
                                                            className: "w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded",
                                                            children: vj.name
                                                        }, vj.id, false, {
                                                            fileName: "[project]/app/series/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/series/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/series/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/series/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                (selectedVJ || searchQuery) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "border-red-600 text-red-400 hover:bg-red-600 hover:text-white",
                                    onClick: clearFilters,
                                    children: "Clear Filters"
                                }, void 0, false, {
                                    fileName: "[project]/app/series/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/series/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/series/page.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                series.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-x-3 gap-y-6",
                    children: series.map((show)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetflixCard"], {
                            content: show,
                            type: "series"
                        }, show.id, false, {
                            fileName: "[project]/app/series/page.tsx",
                            lineNumber: 233,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/series/page.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, this),
                hasMore && !isFiltering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: observerTarget,
                    className: "flex justify-center py-8",
                    children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/series/page.tsx",
                        lineNumber: 242,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/series/page.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, this),
                !loading && (searchQuery || selectedVJ) && series.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-16 h-16 text-gray-600 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/app/series/page.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-gray-400 mb-2",
                            children: "No series found"
                        }, void 0, false, {
                            fileName: "[project]/app/series/page.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Try adjusting your search terms or filters"
                        }, void 0, false, {
                            fileName: "[project]/app/series/page.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/series/page.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/series/page.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/series/page.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(SeriesPage, "VAsThWHiMbbZqz1t8pNu9/XYQ80=");
_c = SeriesPage;
var _c;
__turbopack_context__.k.register(_c, "SeriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Funnel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
            key: "sc7q7i"
        }
    ]
];
const Funnel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("funnel", __iconNode);
;
 //# sourceMappingURL=funnel.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0a08577a._.js.map