import { factory } from "../factory"
import { orders } from "../store"

// GET /orders/:id - 注文詳細取得
export const GET = factory.createHandlers((c) => {
  const id = c.req.param("id")

  if (!id) {
    return c.json({ error: "Missing order ID" }, 400)
  }

  const order = orders.get(id)

  if (!order) {
    return c.json({ error: "Order not found" }, 404)
  }

  return c.json(order)
})
