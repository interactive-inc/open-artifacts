import { createServerFileRoute } from "@tanstack/react-start/server"
import { hono } from "./-lib/hono/app"

export const ServerRoute = createServerFileRoute("/shop/api").methods({
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
