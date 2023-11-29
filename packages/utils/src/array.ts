import { isNonNullable } from "./predicate";

export function nonNullable<T>(values: Array<T | undefined>): Array<T> {
  return values.filter(isNonNullable);
}

export function last<T>(values: Array<T>): T | undefined {
  return values[values.length - 1];
}

export function filterNullables<T>(array: (T | null | undefined)[]): T[] {
  return array.filter(isNonNullable);
}
