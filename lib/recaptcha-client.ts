declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Loads the Google reCAPTCHA v3 script dynamically if not already loaded.
 */
export function loadRecaptchaScript(): Promise<void> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) {
    console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined.');
    return Promise.resolve();
  }

  if (typeof window === 'undefined') return Promise.resolve();

  if (window.grecaptcha) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.getElementById('google-recaptcha-v3');
    if (existing) {
      if (window.grecaptcha) {
        resolve();
      } else {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('Failed to load reCAPTCHA script')));
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-recaptcha-v3';
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google reCAPTCHA script'));
    document.head.appendChild(script);
  });
}

/**
 * Executes reCAPTCHA v3 verification and returns the security token.
 */
export async function getRecaptchaToken(action = 'payment'): Promise<string> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) {
    throw new Error('reCAPTCHA site key is missing in client environment.');
  }

  await loadRecaptchaScript();

  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      return reject(new Error('reCAPTCHA script failed to initialize. Please check your internet connection or ad blocker.'));
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(siteKey, { action });
        if (!token) {
          return reject(new Error('Failed to retrieve reCAPTCHA token.'));
        }
        resolve(token);
      } catch (err: any) {
        reject(new Error(err.message || 'Error executing reCAPTCHA verification'));
      }
    });
  });
}
