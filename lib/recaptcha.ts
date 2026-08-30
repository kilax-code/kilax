interface RecaptchaVerifyResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export interface RecaptchaVerificationResult {
  success: boolean;
  score?: number;
  error?: string;
}

/**
 * Verifies a Google reCAPTCHA token against Google's siteverify API.
 * @param token The reCAPTCHA response token from the client.
 * @param minScore Minimum required score (0.0 to 1.0) for v3 assessments. Default is 0.5.
 * @param remoteIp Optional IP address of the user.
 */
export async function verifyRecaptcha(
  token: string,
  minScore = 0.5,
  remoteIp?: string
): Promise<RecaptchaVerificationResult> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not defined in environment variables.');
    return {
      success: false,
      error: 'reCAPTCHA server configuration is missing.',
    };
  }

  if (!token) {
    return {
      success: false,
      error: 'Security verification token is missing.',
    };
  }

  try {
    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    if (remoteIp) {
      params.append('remoteip', remoteIp);
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `reCAPTCHA verification endpoint returned status ${response.status}`,
      };
    }

    const data: RecaptchaVerifyResponse = await response.json();

    if (!data.success) {
      const errorDetails = data['error-codes']?.join(', ') || 'Verification failed';
      console.warn('reCAPTCHA verification failed with error codes:', errorDetails);
      return {
        success: false,
        error: `Security verification failed (${errorDetails})`,
      };
    }

    // For reCAPTCHA v3, verify that the score is above threshold (0.0 is bot, 1.0 is human)
    if (typeof data.score === 'number' && data.score < minScore) {
      console.warn(`reCAPTCHA score too low: ${data.score} (threshold: ${minScore})`);
      return {
        success: false,
        score: data.score,
        error: 'Automated or suspicious activity detected. Please try again.',
      };
    }

    return {
      success: true,
      score: data.score,
    };
  } catch (error: any) {
    console.error('Error verifying reCAPTCHA token:', error);
    return {
      success: false,
      error: error.message || 'Error communicating with reCAPTCHA verification service',
    };
  }
}
