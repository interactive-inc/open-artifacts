import ordersData from "../../resources/orders.json"
import { factory } from "../factory"

type Order = {
  id: string
  userId: string
  items: {
    productId: string
    productName: string
    quantity: number
    price: number
    subtotal: number
  }[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shippingAddress: {
    name: string
    address: string
    city: string
    postalCode: string
    phone: string
  }
  createdAt: string
  updatedAt: string
}

// メモリ内で注文を管理（実際のアプリではDBを使用）
const dynamicOrders = new Map<string, Order>()

// 初期データをメモリに読み込み
for (const order of ordersData as Order[]) {
  dynamicOrders.set(order.id, order)
}

// PATCH /orders/:id/status - 注文ステータス更新
export const PATCH = factory.createHandlers(async (c) => {
  const id = c.req.param("id")

  if (!id) {
    return c.json({ error: "Missing order ID" }, 400)
  }

  const body = (await c.req.json()) as { status: Order["status"] }

  const order = dynamicOrders.get(id)

  if (!order) {
    return c.json({ error: "Order not found" }, 404)
  }

  order.status = body.status
  order.updatedAt = new Date().toISOString()

  dynamicOrders.set(id, order)

  return c.json(order)
})
