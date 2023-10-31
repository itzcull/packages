import { isNonNullable } from './predicate'

describe('predicate functions', () => {
  it('isNonNullable', () => {
    // Exhaustive list of different JS objects/primitives
    expect(isNonNullable(0)).toBe(true)
    expect(isNonNullable('')).toBe(true)
    expect(isNonNullable(false)).toBe(true)
    expect(isNonNullable([])).toBe(true)
    expect(isNonNullable({})).toBe(true)
    expect(isNonNullable(Symbol())).toBe(true)
    expect(
      isNonNullable(() => {
        return
      }),
    ).toBe(true)
    expect(isNonNullable(NaN)).toBe(true)
    expect(isNonNullable(Infinity)).toBe(true)

    expect(isNonNullable(null)).toBe(false)
    expect(isNonNullable(undefined)).toBe(false)
  })
})
