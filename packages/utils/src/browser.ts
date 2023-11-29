
export function preventAll(event: Event) {
  event.preventDefault()
  event.stopPropagation()
}
