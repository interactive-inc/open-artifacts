import { hc } from "hono/client"
import type { AppType } from "./hono/app"

// Create a type-safe client
// Since the API is served from the same origin in this setup, we can use window.location.origin
// or a relative path if proxying is set up.
// For this specific setup where it's likely a single app, we'll assume relative path works
// or we need to know the base URL.
// Given the `api.ts` uses `hono.fetch`, it's likely running in the same process/server.
// However, `hc` needs a URL.
// If we are in the browser, we can point to the current origin.

const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

export const client = hc<AppType>(baseUrl)
