export function createDBConnectionString(
  user: string,
  password: string,
  host: string,
  database: string,
  params?: Record<string | number, string | number | null | undefined | boolean>,
  protocol = 'postgresql',
) {
  if (!user || !password || !host || !database) {
    throw new Error('Missing required connection parameters')
  }

  const paramString = params
    ? Object.entries(params)
        .filter(([, value]) => value !== null && value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    : undefined

  return `${protocol}://${user}:${password}@${host}/${database}` + (paramString ? `?${paramString}` : '')
}
