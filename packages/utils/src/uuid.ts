import { UUID_REGEX } from "./regex";

export function isUUID(value: string) {
  return UUID_REGEX.test(value)
}
