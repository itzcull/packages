import { classNames } from './css'

describe('classNames function', () => {
  test('should concatenate strings', () => {
    const result = classNames('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  test('should filter out falsy values', () => {
    const result = classNames('class1', null, undefined, false, 0, 'class2')
    expect(result).toBe('class1 class2')
  })

  test('should work with a single class name', () => {
    const result = classNames('class1')
    expect(result).toBe('class1')
  })

  test('should return empty string if no arguments', () => {
    const result = classNames()
    expect(result).toBe('')
  })

  test('should handle array of class names', () => {
    const result = classNames(['class1', 'class2'])
    expect(result).toBe('class1 class2')
  })

  test('should handle nested array of class names', () => {
    const result = classNames(['class1', ['class2', 'class3']])
    expect(result).toBe('class1 class2 class3')
  })

  test('should handle conditional class names', () => {
    const condition = true
    const result = classNames('class1', condition && 'class2')
    expect(result).toBe('class1 class2')
  })

  test('should handle object with class names as keys', () => {
    const result = classNames({ class1: true, class2: false, class3: true })
    expect(result).toBe('class1 class3')
  })
})
