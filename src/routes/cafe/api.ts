import { createServerFileRoute } from "@tanstack/react-start/server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"

const hono = new Hono()

// Middleware
hono.use("*", logger())
hono.use("*", cors())

// Base path
hono.basePath("/cafe/api")

// Health check
hono.get("/health", (c) => {
  return c.json({
    status: "ok",
    service: "cafe",
    timestamp: new Date().toISOString(),
  })
})

export const ServerRoute = createServerFileRoute("/cafe/api").methods({
  GET(props) {
    return hono.fetch(props.request)
  },
  POST(props) {
    return hono.fetch(props.request)
  },
  DELETE(props) {
    return hono.fetch(props.request)
  },
  PUT(props) {
    return hono.fetch(props.request)
  },
})
