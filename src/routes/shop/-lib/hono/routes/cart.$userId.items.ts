import { factory } from "../factory"

import { carts } from "../store"

// POST /cart/:userId/items - カートに商品追加
export const POST = factory.createHandlers(async (c) => {
  const userId = c.req.param("userId")

  if (!userId) {
    return c.json({ error: "Missing userId parameter" }, 400)
  }

  const body = (await c.req.json()) as {
    productId: string
    quantity: number
    price: number
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
  const existingItem = cart.items.find(
    (item) => item.productId === body.productId,
  )

  if (existingItem) {
    existingItem.quantity += body.quantity
  } else {
    cart.items.push({
      productId: body.productId,
      quantity: body.quantity,
      price: body.price,
    })
  }

  // 合計金額を再計算
  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  cart.updatedAt = new Date().toISOString()

  carts.set(userId, cart)

  return c.json(cart)
})

// PATCH /cart/:userId/items - カートの商品数量更新
export const PATCH = factory.createHandlers(async (c) => {
  const userId = c.req.param("userId")

  if (!userId) {
    return c.json({ error: "Missing userId parameter" }, 400)
  }

  const body = (await c.req.json()) as {
    productId: string
    quantity: number
  }

  const cart = carts.get(userId)

  if (!cart) {
    return c.json({ error: "Cart not found" }, 404)
  }

  const existingItem = cart.items.find(
    (item) => item.productId === body.productId,
  )

  if (existingItem) {
    existingItem.quantity = body.quantity
  } else {
    return c.json({ error: "Item not found in cart" }, 404)
  }

  // 合計金額を再計算
  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  cart.updatedAt = new Date().toISOString()

  carts.set(userId, cart)

  return c.json(cart)
})
