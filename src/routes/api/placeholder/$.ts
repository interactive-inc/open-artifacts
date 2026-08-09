import { createFileRoute } from "@tanstack/react-router"
import { createPlaceholderResponse } from "@/routes/api/placeholder/-lib/create-placeholder-response"

export const Route = createFileRoute("/api/placeholder/$")({
  server: {
    handlers: {
      GET({ params }) {
        return createPlaceholderResponse(params._splat)
      },
    },
  },
})
