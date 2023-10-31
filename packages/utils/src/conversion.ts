/** @description Takes a value, undefined, or null and returns the value or undefined */
export function u<T>(val: T | null | undefined): T | undefined {
  if (val === null) {
    return undefined
  }

  return val
}

/** @description Takes a value, undefined, or null and returns the value or null */
export function n<T>(val: T | null | undefined): T | null {
  if (val === undefined) {
    return null
  }

  return val
}
