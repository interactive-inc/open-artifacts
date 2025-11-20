import { factory } from "../factory"

import { carts, type Cart } from "../store"

// GET /cart/:userId - カート取得

// GET /cart/:userId - カート取得
export const GET = factory.createHandlers((c) => {
  const userId = c.req.param("userId")

  if (!userId) {
    return c.json({ error: "Missing userId parameter" }, 400)
  }

  const cart = carts.get(userId)

  if (!cart) {
    // 新規カート作成
    const newCart: Cart = {
      id: `cart-${userId}`,
      userId,
      items: [],
      total: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    carts.set(userId, newCart)
    return c.json(newCart)
  }

  return c.json(cart)
})

// DELETE /cart/:userId - カートクリア
export const DELETE = factory.createHandlers((c) => {
  const userId = c.req.param("userId")

  if (!userId) {
    return c.json({ error: "Missing userId parameter" }, 400)
  }

  const cart = carts.get(userId)

  if (!cart) {
    return c.json({ error: "Cart not found" }, 404)
  }

  cart.items = []
  cart.total = 0
  cart.updatedAt = new Date().toISOString()

  carts.set(userId, cart)

  return c.json({ message: "Cart cleared" })
})
