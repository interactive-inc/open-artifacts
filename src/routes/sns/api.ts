import { createFileRoute } from "@tanstack/react-router"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"

const hono = new Hono()

// Middleware
hono.use("*", logger())
hono.use("*", cors())

// Base path
hono.basePath("/sns/api")

// Health check
hono.get("/health", (c) => {
  return c.json({
    status: "ok",
    service: "sns",
    timestamp: new Date().toISOString(),
  })
})

export const Route = createFileRoute("/sns/api")({
  server: {
    handlers: {
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
    },
  },
})
