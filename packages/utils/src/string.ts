export function titleToKebabCase(str: string) {
  // Convert title cased string to kebab case.
  return str
    .trim() // Remove any leading and trailing spaces
    .split(/\s+/) // Split string by one or more spaces
    .map((word) => word.toLowerCase()) // Convert each word to lowercase
    .join('-') // Join words with hyphen to create kebab case
}

export function kebabToTitleCase(str: string) {
  // Convert kebab cased string to title case.
  return str
    .trim() // Remove any leading and trailing spaces
    .split('-') // Split string by hyphen
    .map((word) => word[0].toUpperCase() + word.slice(1)) // Capitalise first letter of each word
    .join(' ') // Join words with space to create title case
}
