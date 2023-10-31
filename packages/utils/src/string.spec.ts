import { kebabToTitleCase, titleToKebabCase } from './string'

describe('titleToKebabCase', () => {
  test('converts "Title Case" to "title-case"', () => {
    expect(titleToKebabCase('Title Case')).toBe('title-case')
  })

  test('converts "Another Title Case String" to "another-title-case-string"', () => {
    expect(titleToKebabCase('Another Title Case String')).toBe('another-title-case-string')
  })

  test('converts "SingleWord" to "singleword"', () => {
    expect(titleToKebabCase('SingleWord')).toBe('singleword')
  })

  test('converts "Multiple     Spaces" to "multiple-spaces"', () => {
    expect(titleToKebabCase('Multiple     Spaces')).toBe('multiple-spaces')
  })

  test('converts " Leading and Trailing Spaces " to "leading-and-trailing-spaces"', () => {
    expect(titleToKebabCase(' Leading and Trailing Spaces ')).toBe('leading-and-trailing-spaces')
  })

  test('converts "   Multiple Leading Spaces" to "multiple-leading-spaces"', () => {
    expect(titleToKebabCase('   Multiple Leading Spaces')).toBe('multiple-leading-spaces')
  })

  test('converts "MixedCase String" to "mixedcase-string"', () => {
    expect(titleToKebabCase('MixedCase String')).toBe('mixedcase-string')
  })

  test('converts "Words-With-Hyphens" to "words-with-hyphens"', () => {
    expect(titleToKebabCase('Words-With-Hyphens')).toBe('words-with-hyphens')
  })

  test('converts "Empty String" to ""', () => {
    expect(titleToKebabCase('')).toBe('')
  })

  test('converts "   " to ""', () => {
    expect(titleToKebabCase('   ')).toBe('')
  })
})

test('converts "this-is-kebab-case" to "This Is Kebab Case"', () => {
  expect(kebabToTitleCase('this-is-kebab-case')).toBe('This Is Kebab Case')
})

test('converts "singleword" to "Singleword"', () => {
  expect(kebabToTitleCase('singleword')).toBe('Singleword')
})

test('converts "mixed-case-word" to "Mixed Case Word"', () => {
  expect(kebabToTitleCase('mixed-case-word')).toBe('Mixed Case Word')
})

test('converts "multiple---hyphens" to "Multiple   Hyphens"', () => {
  expect(kebabToTitleCase('multiple---hyphens')).toBe('Multiple   Hyphens')
})

test('converts "trailing-hyphen-" to "Trailing Hyphen "', () => {
  expect(kebabToTitleCase('trailing-hyphen-')).toBe('Trailing Hyphen ')
})

test('converts "-leading-hyphen" to " Leading Hyphen"', () => {
  expect(kebabToTitleCase('-leading-hyphen')).toBe(' Leading Hyphen')
})

test('converts "all-lower-case" to "All Lower Case"', () => {
  expect(kebabToTitleCase('all-lower-case')).toBe('All Lower Case')
})

test('converts "all-upper-case" to "All Upper Case"', () => {
  expect(kebabToTitleCase('all-upper-case')).toBe('All Upper Case')
})

test('converts "empty-string" to "Empty String"', () => {
  expect(kebabToTitleCase('empty-string')).toBe('Empty String')
})

test('converts "" (empty string) to "" (empty string)', () => {
  expect(kebabToTitleCase('')).toBe('')
})
