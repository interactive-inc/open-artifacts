import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { factory } from "../factory"
import { orders } from "../store"

const orderStatusSchema = z.object({
  status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled"]),
})

// PATCH /orders/:id/status - 注文ステータス更新
export const PATCH = factory.createHandlers(zValidator("json", orderStatusSchema), (c) => {
  const id = c.req.param("id")

  if (!id) {
    return c.json({ error: "Missing order ID" }, 400)
  }

  const body = c.req.valid("json")
  const order = orders.get(id)

  if (!order) {
    return c.json({ error: "Order not found" }, 404)
  }

  order.status = body.status
  order.updatedAt = new Date().toISOString()

  orders.set(id, order)

  return c.json(order)
})
