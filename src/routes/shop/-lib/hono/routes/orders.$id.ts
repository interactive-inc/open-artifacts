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

// GET /orders/:id - 注文詳細取得
export const GET = factory.createHandlers((c) => {
  const id = c.req.param("id")

  if (!id) {
    return c.json({ error: "Missing order ID" }, 400)
  }

  const order = dynamicOrders.get(id)

  if (!order) {
    return c.json({ error: "Order not found" }, 404)
  }

  return c.json(order)
})
