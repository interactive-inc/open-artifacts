import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { factory } from "../factory"
import { orders, products, type Order } from "../store"

const createOrderSchema = z.object({
  userId: z.string().min(1),
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().min(1).max(99),
      }),
    )
    .min(1),
  shippingAddress: z.object({
    name: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    postalCode: z.string().min(1),
    phone: z.string().min(1),
  }),
})

// GET /orders - 注文一覧取得
export const GET = factory.createHandlers((c) => {
  const userId = c.req.query("userId")

  let orderList = Array.from(orders.values())

  // userIdが指定されている場合はフィルタリング
  if (userId) {
    orderList = orderList.filter((order) => order.userId === userId)
  }

  return c.json(orderList)
})

// POST /orders - 注文作成
export const POST = factory.createHandlers(zValidator("json", createOrderSchema), (c) => {
  const body = c.req.valid("json")
  const items: Order["items"] = []

  for (const requestedItem of body.items) {
    const product = products.find((candidate) => candidate.id === requestedItem.productId)
    if (!product) {
      return c.json({ error: `Product not found: ${requestedItem.productId}` }, 404)
    }
    items.push({
      productId: product.id,
      productName: product.name,
      quantity: requestedItem.quantity,
      price: product.price,
      subtotal: product.price * requestedItem.quantity,
    })
  }

  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0)

  const newOrder: Order = {
    id: `order-${crypto.randomUUID()}`,
    userId: body.userId,
    items,
    total: subtotal + Math.floor(subtotal * 0.1),
    status: "pending",
    shippingAddress: body.shippingAddress,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  orders.set(newOrder.id, newOrder)

  return c.json(newOrder, 201)
})
