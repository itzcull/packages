import { ensureSecureWebsiteUrl, isSecureWebsiteUrl, isValidWebsiteUrl } from './url'

describe('isSecureWebsiteUrl', () => {
  it('should return true when the URL has a secure protocol', () => {
    const url = 'https://www.example.com'
    const result = isSecureWebsiteUrl(url)
    expect(result).toBe(true)
  })

  it('should return false when the URL has an insecure protocol', () => {
    const url = 'http://www.example.com'
    const result = isSecureWebsiteUrl(url)
    expect(result).toBe(false)
  })

  it('should return false when the URL does not have a protocol', () => {
    const url = 'www.example.com'
    const result = isSecureWebsiteUrl(url)
    expect(result).toBe(false)
  })

  it('should throw when the URL is invalid', () => {
    const url1 = 'https://.com'
    expect(() => isSecureWebsiteUrl(url1)).toThrow()

    const url2 = 'https://www.example.'
    expect(() => isSecureWebsiteUrl(url2)).toThrow()
  })

  it('should throw when the scheme is invalid', () => {
    const url1 = 'ftp:/google.com'
    expect(() => isSecureWebsiteUrl(url1)).toThrow()

    const url2 = 'ftp://google.com'
    expect(() => isSecureWebsiteUrl(url2)).toThrow()
  })
})

describe('ensureSecureWebsiteUrl', () => {
  it('should return the same URL when it is already secure', () => {
    const url = 'https://www.example.com'
    expect(ensureSecureWebsiteUrl(url)).toBe(url)
  })

  it('should throw if the input is an invalid url', () => {
    const url1 = ''
    expect(() => ensureSecureWebsiteUrl(url1)).toThrow()

    const url2 = 'invalid-url'
    expect(() => ensureSecureWebsiteUrl(url2)).toThrow()

    const url3 = 'ftp:/.gflkd'
    expect(() => ensureSecureWebsiteUrl(url3)).toThrow()
  })
})

describe('isValidWebsiteUrl', () => {
  // Valid URL with http scheme
  it('should return true when given a valid URL with http scheme', () => {
    const url = 'http://www.example.com'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(true)
  })

  it('should return true when given a valid URL with http scheme and trailing slash', () => {
    const url = 'http://www.example.com/'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(true)
  })

  it('should return true when given a valid URL with https scheme and trailing slash', () => {
    const url = 'http://www.example.com/'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(true)
  })

  // Valid URL with https scheme
  it('should return true when given a valid URL with https scheme', () => {
    const url = 'https://www.example.com'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(true)
  })

  // Valid URL without scheme
  it('should return true when given a valid URL without scheme', () => {
    const url = 'www.example.com'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(true)
  })

  // Invalid URL with invalid characters
  it('should return false when given an invalid URL with invalid characters', () => {
    const url = 'http://www.example.com$'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(false)
  })

  // Invalid URL with invalid scheme
  it('should return false when given an invalid URL with invalid scheme', () => {
    const url = 'ftp://www.example.com'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(false)
  })

  // Invalid URL with missing domain
  it('should return false when given an invalid URL with missing domain', () => {
    const url = 'http://'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(false)
  })

  it('should return false when given a invalid scheme but with a valid FQDN string', () => {
    const url = 'htt://example.com'
    const result = isValidWebsiteUrl(url)
    expect(result).toBe(false)
  })

  // Valid URLs
  it('should validate http://example.com', () => {
    expect(isValidWebsiteUrl('http://example.com')).toBe(true)
  })

  it('should validate https://example.com', () => {
    expect(isValidWebsiteUrl('https://example.com')).toBe(true)
  })

  it('should validate example.com', () => {
    expect(isValidWebsiteUrl('example.com')).toBe(true)
  })

  it('should validate http://subdomain.example.com', () => {
    expect(isValidWebsiteUrl('http://subdomain.example.com')).toBe(true)
  })

  it('should validate https://sub-domain.example.com', () => {
    expect(isValidWebsiteUrl('https://sub-domain.example.com')).toBe(true)
  })

  it('should validate https://example.com/path1/-path2', () => {
    expect(isValidWebsiteUrl('https://example.com/path1/-path2')).toBe(true)
  })

  it('should not validate example.com/-path', () => {
    expect(isValidWebsiteUrl('example.com/-path')).toBe(true)
  })

  it('should validate example.com/path', () => {
    expect(isValidWebsiteUrl('example.com/path')).toBe(true)
  })

  it('should not validate example.com/path1/path2-', () => {
    expect(isValidWebsiteUrl('example.com/path1/path2-')).toBe(true)
  })

  it('should validate https://example.com/path1/path2', () => {
    expect(isValidWebsiteUrl('https://example.com/path1/path2')).toBe(true)
  })

  it('should validate http://example.com/path1/path2/path3', () => {
    expect(isValidWebsiteUrl('http://example.com/path1/path2/path3')).toBe(true)
  })

  it('should validate example.com/path1/path2/path3/path4', () => {
    expect(isValidWebsiteUrl('example.com/path1/path2/path3/path4')).toBe(true)
  })

  it('should validate https://sub-domain.example.com/path', () => {
    expect(isValidWebsiteUrl('https://sub-domain.example.com/path')).toBe(true)
  })

  // Invalid URLs
  it('should not validate http:/example.com', () => {
    expect(isValidWebsiteUrl('http:/example.com')).toBe(false)
  })

  it('should not validate https:/example.com', () => {
    expect(isValidWebsiteUrl('https:/example.com')).toBe(false)
  })

  it('should not validate https//example.com', () => {
    expect(isValidWebsiteUrl('https//example.com')).toBe(false)
  })

  it('should not validate -example.com', () => {
    expect(isValidWebsiteUrl('-example.com')).toBe(false)
  })

  it('should not validate example-.com', () => {
    expect(isValidWebsiteUrl('example-.com')).toBe(false)
  })

  it('should not validate http://..example.com', () => {
    expect(isValidWebsiteUrl('http://..example.com')).toBe(false)
  })

  it('should not validate https://example.com..', () => {
    expect(isValidWebsiteUrl('https://example.com..')).toBe(false)
  })
})
