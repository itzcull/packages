export function createCloudlareImageUrl(imageId: string, opts?: Record<string, string>) {
  return `${process.env.NEXT_PUBLIC_IMAGES_ORIGIN}/${imageId}/public?${new URLSearchParams(opts).toString()}`
}
