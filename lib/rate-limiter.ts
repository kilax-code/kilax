/**
 * In-memory sliding window rate limiter for API route protection.
 * No external dependencies required.
 *
 * Uses a Map of timestamps per key. On each check, timestamps older than
 * the window are pruned, and the request is allowed only if the remaining
 * count is below the limit.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Periodic cleanup interval (every 10 minutes) to prevent memory leaks
// from keys that are no longer active.
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function startCleanupIfNeeded() {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store.entries()) {
      // Remove entries where all timestamps are older than 15 minutes
      // (covers the longest window we use)
      const fresh = entry.timestamps.filter((t) => now - t < 15 * 60 * 1000);
      if (fresh.length === 0) {
        store.delete(key);
      } else {
        entry.timestamps = fresh;
      }
    }
    // If the store is empty, stop the timer to avoid unnecessary work
    if (store.size === 0 && cleanupTimer) {
      clearInterval(cleanupTimer);
      cleanupTimer = null;
    }
  }, CLEANUP_INTERVAL_MS);
  // Allow the Node.js process to exit even if the timer is running
  if (cleanupTimer && typeof cleanupTimer === 'object' && 'unref' in cleanupTimer) {
    cleanupTimer.unref();
  }
}

export interface RateLimitResult {
  allowed: boolean;
  /** How many seconds until the oldest request in the window expires. */
  retryAfterSeconds?: number;
}

/**
 * Check whether a request identified by `key` is within rate limits.
 *
 * @param key    Unique identifier (e.g., IP address or userId).
 * @param limit  Maximum number of requests allowed in the window.
 * @param windowMs  Window duration in milliseconds.
 * @returns Whether the request is allowed, and a retry-after hint if not.
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  startCleanupIfNeeded();

  const now = Date.now();
  let entry = store.get(key);

  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Prune timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

  if (entry.timestamps.length >= limit) {
    // Calculate when the oldest request in the window will expire
    const oldestInWindow = entry.timestamps[0];
    const retryAfterMs = windowMs - (now - oldestInWindow);
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(retryAfterMs / 1000),
    };
  }

  // Record this request
  entry.timestamps.push(now);
  return { allowed: true };
}
