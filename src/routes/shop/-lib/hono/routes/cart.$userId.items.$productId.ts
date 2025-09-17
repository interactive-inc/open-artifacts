import { factory } from "../factory"

type Cart = {
  id: string
  userId: string
  items: {
    productId: string
    quantity: number
    price: number
  }[]
  total: number
  createdAt: string
  updatedAt: string
}

// メモリ内でカート情報を管理（実際のアプリではセッションやDBを使用）
const carts = new Map<string, Cart>()

// DELETE /cart/:userId/items/:productId - カートから商品削除
export const DELETE = factory.createHandlers((c) => {
  const userId = c.req.param("userId")
  const productId = c.req.param("productId")

  if (!userId || !productId) {
    return c.json({ error: "Missing required parameters" }, 400)
  }

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
