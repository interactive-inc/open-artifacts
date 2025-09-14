import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { Hono } from "hono"

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

export const ordersRoute = new Hono()

// 注文一覧取得
ordersRoute.get("/", (c) => {
  try {
    const userId = c.req.query("userId")
    const dataPath = join(process.cwd(), "data", "orders.json")

    let orders: Order[] = []
    try {
      orders = JSON.parse(readFileSync(dataPath, "utf-8")) as Order[]
    } catch {
      // ファイルが存在しない場合は空配列
      orders = []
    }

    // userIdが指定されている場合はフィルタリング
    if (userId) {
      orders = orders.filter((order) => order.userId === userId)
    }

    return c.json(orders)
  } catch (_error) {
    return c.json({ error: "Failed to load orders" }, 500)
  }
})

// 注文詳細取得
ordersRoute.get("/:id", (c) => {
  try {
    const id = c.req.param("id")
    const dataPath = join(process.cwd(), "data", "orders.json")

    let orders: Order[] = []
    try {
      orders = JSON.parse(readFileSync(dataPath, "utf-8")) as Order[]
    } catch {
      return c.json({ error: "Order not found" }, 404)
    }

    const order = orders.find((o) => o.id === id)

    if (!order) {
      return c.json({ error: "Order not found" }, 404)
    }

    return c.json(order)
  } catch (_error) {
    return c.json({ error: "Failed to load order" }, 500)
  }
})

// 注文作成（モック）
ordersRoute.post("/", async (c) => {
  try {
    const body = (await c.req.json()) as {
      userId: string
      items: OrderItem[]
      shippingAddress: Order["shippingAddress"]
    }

    const dataPath = join(process.cwd(), "data", "orders.json")

    let orders: Order[] = []
    try {
      orders = JSON.parse(readFileSync(dataPath, "utf-8")) as Order[]
    } catch {
      // ファイルが存在しない場合は空配列
      orders = []
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

    orders.push(newOrder)

    // ファイルに保存
    writeFileSync(dataPath, JSON.stringify(orders, null, 2))

    return c.json(newOrder, 201)
  } catch (_error) {
    return c.json({ error: "Failed to create order" }, 500)
  }
})

// 注文ステータス更新（モック）
ordersRoute.patch("/:id/status", async (c) => {
  try {
    const id = c.req.param("id")
    const body = (await c.req.json()) as { status: Order["status"] }

    const dataPath = join(process.cwd(), "data", "orders.json")

    let orders: Order[] = []
    try {
      orders = JSON.parse(readFileSync(dataPath, "utf-8")) as Order[]
    } catch {
      return c.json({ error: "Order not found" }, 404)
    }

    const orderIndex = orders.findIndex((o) => o.id === id)

    if (orderIndex === -1) {
      return c.json({ error: "Order not found" }, 404)
    }

    orders[orderIndex].status = body.status
    orders[orderIndex].updatedAt = new Date().toISOString()

    // ファイルに保存
    writeFileSync(dataPath, JSON.stringify(orders, null, 2))

    return c.json(orders[orderIndex])
  } catch (_error) {
    return c.json({ error: "Failed to update order" }, 500)
  }
})
