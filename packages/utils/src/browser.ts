import { SyntheticEvent } from 'react'

export function preventAll(event: Event | SyntheticEvent) {
  event.preventDefault()
  event.stopPropagation()
}
