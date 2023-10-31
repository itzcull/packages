import { HTTP_SCHEME_REGEX, HTTPS_SCHEME_REGEX, VALID_WEBSITE_URL_REGEX } from './regex'

export function isValidWebsiteUrl(url: string) {
  return VALID_WEBSITE_URL_REGEX.test(url)
}

/** @description Validates whether the provided URL has a secure protocol */
export function isSecureWebsiteUrl(url: string) {
  if (!isValidWebsiteUrl(url)) {
    throw new Error('Invalid URL')
  }

  return HTTPS_SCHEME_REGEX.test(url)
}

/** @description Takes a valid website URL and ensures it's prepended with HTTPS scheme */
export function ensureSecureWebsiteUrl(url: string): string {
  if (!isValidWebsiteUrl(url)) {
    throw new Error('Invalid URL')
  }

  if (HTTPS_SCHEME_REGEX.test(url)) {
    return url
  } else if (HTTP_SCHEME_REGEX.test(url)) {
    return url.replace(HTTP_SCHEME_REGEX, 'https://')
  } else {
    // It was a FQDN
    return `https://${url}`
  }
}
