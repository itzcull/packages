import { filterNullables } from './array' // Adjust the path as needed

describe('filterNullables', () => {
  test('CASE 1: should return an array with no null or undefined values', () => {
    expect(filterNullables([1, 2, 3])).toEqual([1, 2, 3])
    expect(filterNullables(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
    expect(filterNullables([true, false, true])).toEqual([true, false, true])
  })

  test('CASE 2: should return an empty array if all values are null or undefined', () => {
    expect(filterNullables([1, null, 3])).toEqual([1, 3])
    expect(filterNullables(['a', null, 'c'])).toEqual(['a', 'c'])
    expect(filterNullables([true, null, true])).toEqual([true, true])
  })

  test('CASE 3: should return an array with no undefined values', () => {
    // Test Case 3: Array with Undefined Values
    expect(filterNullables([1, undefined, 3])).toEqual([1, 3])
    expect(filterNullables(['a', undefined, 'c'])).toEqual(['a', 'c'])
    expect(filterNullables([true, undefined, true])).toEqual([true, true])
  })

  test('CASE 4: should return an array with no null values', () => {
    expect(filterNullables([1, null, undefined, 4])).toEqual([1, 4])
    expect(filterNullables(['a', null, undefined, 'd'])).toEqual(['a', 'd'])
    expect(filterNullables([true, null, undefined, false])).toEqual([true, false])
  })

  test('CASE 5: should return an empty array if the input array is empty', () => {
    expect(filterNullables([])).toEqual([])
  })

  test('CASE 6: should return an empty array if the input array is only null and undefined values', () => {
    expect(filterNullables([null, undefined, null])).toEqual([])
  })

  test('CASE 7: should return an array with no null or undefined values', () => {
    expect(filterNullables([{ a: 1 }, null, { b: 2 }])).toEqual([{ a: 1 }, { b: 2 }])
    expect(filterNullables([[1, 2], null, [3, 4]])).toEqual([
      [1, 2],
      [3, 4],
    ])
    expect(filterNullables([['a', 'b'], undefined, ['c', 'd']])).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ])
  })

  test('CASE 8: should return an array with no null or undefined values', () => {
    // Test Case 8: Functions
    const func1 = () => 'test1'
    const func2 = () => 'test2'
    expect(filterNullables([func1, null, func2])).toEqual([func1, func2])
  })

  test('CASE 9: should return an array with no null or undefined values', () => {
    expect(filterNullables([1, 'a', null, true, undefined])).toEqual([1, 'a', true])
  })
})
