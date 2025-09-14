import { Hono } from "hono"

type CartItem = {
  productId: string
  quantity: number
  price: number
}

type Cart = {
  id: string
  userId: string
  items: CartItem[]
  total: number
  createdAt: string
  updatedAt: string
}

// メモリ内でカート情報を管理（実際のアプリではセッションやDBを使用）
const carts = new Map<string, Cart>()

export const cartRoute = new Hono()

// カート取得
cartRoute.get("/:userId", (c) => {
  const userId = c.req.param("userId")
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

// カートに商品追加
cartRoute.post("/:userId/items", async (c) => {
  const userId = c.req.param("userId")
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

// カートから商品削除
cartRoute.delete("/:userId/items/:productId", (c) => {
  const userId = c.req.param("userId")
  const productId = c.req.param("productId")

  const cart = carts.get(userId)

  if (!cart) {
    return c.json({ error: "Cart not found" }, 404)
  }

  cart.items = cart.items.filter((item) => item.productId !== productId)
  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  cart.updatedAt = new Date().toISOString()

  carts.set(userId, cart)

  return c.json(cart)
})

// カートクリア
cartRoute.delete("/:userId", (c) => {
  const userId = c.req.param("userId")

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
