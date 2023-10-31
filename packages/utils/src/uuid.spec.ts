import { isUUID } from './uuid'

describe('isUUID function', () => {
  // Positive Test Cases
  describe('Valid UUIDs', () => {
    it('should validate a lower-case UUID', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true)
    })

    it('should validate an upper-case UUID', () => {
      expect(isUUID('550E8400-E29B-41D4-A716-446655440000')).toBe(true)
    })

    it('should validate a mixed-case UUID', () => {
      expect(isUUID('550E8400-e29b-41D4-A716-446655440000')).toBe(true)
    })

    it('should validate a version 5 UUID', () => {
      expect(isUUID('9d42159d-5b50-58bd-a9d7-fb7457777630')).toBe(true)
    })

    it('should validate a version 4 UUID', () => {
      expect(isUUID('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')).toBe(true)
    })

    it('should validate a version 3 UUID', () => {
      expect(isUUID('6fa459ea-ee8a-3ca4-894e-db77e160355e')).toBe(true)
    })

    it('should validate a version 2 UUID', () => {
      expect(isUUID('2d6da574-9e0d-2586-a21a-07e5802baf72')).toBe(true)
    })

    it('should validate a version 1 UUID', () => {
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true)
    })
  })

  // Negative Test Cases
  describe('Invalid UUIDs', () => {
    it('should invalidate a string that is too short', () => {
      expect(isUUID('550e840')).toBe(false)
    })

    it('should invalidate a string that is too long', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-44665544000000')).toBe(false)
    })

    it('should invalidate a string with incorrect structure', () => {
      expect(isUUID('550e8400.e29b-41d4.a716-446655440000')).toBe(false)
    })

    it('should invalidate a string with illegal characters', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-44665544ZZZZ')).toBe(false)
    })

    it('should invalidate a string with incorrect variant', () => {
      expect(isUUID('550e8400-e29b-41d4-f716-446655440000')).toBe(false)
    })

    it('should invalidate a string that contains spaces', () => {
      expect(isUUID('550e8400 e29b 41d4 a716 446655440000')).toBe(false)
    })

    it('should invalidate an empty string', () => {
      expect(isUUID('')).toBe(false)
    })
  })
})
