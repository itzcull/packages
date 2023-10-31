import clsx from 'clsx'

export function classNames(...classes: Parameters<typeof clsx>) {
  return clsx(classes)
}
