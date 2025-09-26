import { createFileRoute } from "@tanstack/react-router"
import { hono } from "@/routes/shop/-lib/hono/app"

export const Route = createFileRoute("/shop/api")({
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
