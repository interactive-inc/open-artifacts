import { describe, expect, test } from "vite-plus/test"
import { createPlaceholderResponse } from "@/routes/api/placeholder/-lib/create-placeholder-response"

describe("createPlaceholderResponse", () => {
  test("creates a cacheable SVG with validated dimensions", async () => {
    const response = createPlaceholderResponse("300/200")

    expect(response.status).toBe(200)
    expect(response.headers.get("content-type")).toBe("image/svg+xml; charset=utf-8")
    expect(await response.text()).toContain('viewBox="0 0 300 200"')
  })

  test.each(["", "300", "300/200/100", "15/200", "300/2561", "300/<script>"])(
    "rejects invalid dimensions: %s",
    (dimensions) => {
      expect(createPlaceholderResponse(dimensions).status).toBe(400)
    },
  )
})
