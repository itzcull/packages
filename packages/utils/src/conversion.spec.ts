import { n, u } from './conversion'

describe('Function u', () => {
  it('should return undefined for null', () => {
    expect(u(null)).toBeUndefined()
  })

  it('should return undefined for undefined', () => {
    expect(u(undefined)).toBeUndefined()
  })

  it('should return 0 for 0', () => {
    expect(n(0)).toBe(0)
  })

  it('should return the truthy value', () => {
    expect(u('test')).toBe('test')
    expect(u(123)).toBe(123)
    expect(u(true)).toBe(true)
    expect(u([])).toEqual([])
    expect(u({})).toEqual({})
  })
})

describe('Function n', () => {
  it('should return null for null', () => {
    expect(n(null)).toBeNull()
  })

  it('should return null for undefined', () => {
    expect(n(undefined)).toBeNull()
  })

  it('should return 0 for 0', () => {
    expect(n(0)).toBe(0)
  })

  it('should return the truthy value', () => {
    expect(n('test')).toBe('test')
    expect(n(123)).toBe(123)
    expect(n(true)).toBe(true)
    expect(n([])).toEqual([])
    expect(n({})).toEqual({})
  })
})
