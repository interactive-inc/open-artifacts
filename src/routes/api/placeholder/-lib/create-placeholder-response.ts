const MIN_SIZE = 16
const MAX_SIZE = 2560

function parseDimensions(value: string | undefined) {
  if (value === undefined) {
    return null
  }

  const match = /^(\d+)\/(\d+)$/.exec(value)

  if (match === null) {
    return null
  }

  const width = Number(match[1])
  const height = Number(match[2])

  if (
    !Number.isSafeInteger(width) ||
    !Number.isSafeInteger(height) ||
    width < MIN_SIZE ||
    height < MIN_SIZE ||
    width > MAX_SIZE ||
    height > MAX_SIZE
  ) {
    return null
  }

  return { height, width }
}

export function createPlaceholderResponse(value: string | undefined) {
  const dimensions = parseDimensions(value)

  if (dimensions === null) {
    return new Response("Invalid placeholder dimensions", { status: 400 })
  }

  const { height, width } = dimensions
  const fontSize = Math.max(12, Math.min(48, Math.floor(Math.min(width, height) / 8)))
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${width} by ${height} placeholder"><rect width="100%" height="100%" fill="#e7e5e4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#78716c" font-family="system-ui,sans-serif" font-size="${fontSize}">${width} × ${height}</text></svg>`

  return new Response(svg, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Type": "image/svg+xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  })
}
