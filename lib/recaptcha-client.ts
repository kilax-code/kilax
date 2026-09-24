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
    console.warn('reCAPTCHA site key is not defined in client environment. Skipping token generation.');
    return '';
  }

  try {
    await loadRecaptchaScript();
  } catch (loadErr) {
    console.warn('Could not load reCAPTCHA script (may be blocked by adblocker):', loadErr);
    return '';
  }

  return new Promise((resolve) => {
    if (!window.grecaptcha) {
      console.warn('reCAPTCHA object not available on window. Skipping token generation.');
      return resolve('');
    }

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(siteKey, { action });
        resolve(token || '');
      } catch (err: any) {
        console.warn('Error executing reCAPTCHA verification:', err);
        resolve('');
      }
    });
  });
}
