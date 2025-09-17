import ordersData from "../../resources/orders.json"
import { factory } from "../factory"

type OrderItem = {
  productId: string
  productName: string
  quantity: number
  price: number
  subtotal: number
}

type Order = {
  id: string
  userId: string
  items: OrderItem[]
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

// GET /orders - 注文一覧取得
export const GET = factory.createHandlers((c) => {
  const userId = c.req.query("userId")

  let orders = Array.from(dynamicOrders.values())

  // userIdが指定されている場合はフィルタリング
  if (userId) {
    orders = orders.filter((order) => order.userId === userId)
  }

  return c.json(orders)
})

// POST /orders - 注文作成
export const POST = factory.createHandlers(async (c) => {
  const body = (await c.req.json()) as {
    userId: string
    items: OrderItem[]
    shippingAddress: Order["shippingAddress"]
  }

  const newOrder: Order = {
    id: `order-${Date.now()}`,
    userId: body.userId,
    items: body.items,
    total: body.items.reduce((sum, item) => sum + item.subtotal, 0),
    status: "pending",
    shippingAddress: body.shippingAddress,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  dynamicOrders.set(newOrder.id, newOrder)

  return c.json(newOrder, 201)
})
