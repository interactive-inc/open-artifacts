import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { factory } from "../factory"
import { carts, products } from "../store"

const cartItemSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1).max(99),
})

// POST /cart/:userId/items - カートに商品追加
export const POST = factory.createHandlers(zValidator("json", cartItemSchema), (c) => {
  const userId = c.req.param("userId")

  if (!userId) {
    return c.json({ error: "Missing userId parameter" }, 400)
  }

  const body = c.req.valid("json")
  const product = products.find((candidate) => candidate.id === body.productId)

  if (!product) {
    return c.json({ error: "Product not found" }, 404)
  }

  let cart = carts.get(userId)

  if (!cart) {
    cart = {
      id: `cart-${userId}`,
      userId,
      items: [],
      total: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  }

  // 既存の商品があるか確認
  const existingItem = cart.items.find((item) => item.productId === body.productId)

  if (existingItem) {
    existingItem.quantity += body.quantity
  } else {
    cart.items.push({
      productId: body.productId,
      quantity: body.quantity,
      price: product.price,
    })
  }

  // 合計金額を再計算
  cart.total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cart.updatedAt = new Date().toISOString()

  carts.set(userId, cart)

  return c.json(cart)
})

// PATCH /cart/:userId/items - カートの商品数量更新
export const PATCH = factory.createHandlers(zValidator("json", cartItemSchema), (c) => {
  const userId = c.req.param("userId")

  if (!userId) {
    return c.json({ error: "Missing userId parameter" }, 400)
  }

  const body = c.req.valid("json")

  const cart = carts.get(userId)

  if (!cart) {
    return c.json({ error: "Cart not found" }, 404)
  }

  const existingItem = cart.items.find((item) => item.productId === body.productId)

  if (existingItem) {
    existingItem.quantity = body.quantity
  } else {
    return c.json({ error: "Item not found in cart" }, 404)
  }

  // 合計金額を再計算
  cart.total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cart.updatedAt = new Date().toISOString()

  carts.set(userId, cart)

  return c.json(cart)
})
