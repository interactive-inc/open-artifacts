import { createFileRoute, Link } from "@tanstack/react-router"
import { Calendar, ChevronRight, Package, Truck } from "lucide-react"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "./-lib/cart-context"
import { client } from "./-lib/client"

export const Route = createFileRoute("/shop/orders")({
  component: Orders,
})

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

function getStatusBadge(status: Order["status"]) {
  const statusConfig = {
    pending: { label: "注文確認中", variant: "secondary" as const },
    processing: { label: "準備中", variant: "default" as const },
    shipped: { label: "発送済み", variant: "default" as const },
    delivered: { label: "配達完了", variant: "default" as const },
    cancelled: { label: "キャンセル", variant: "destructive" as const },
  }

  const config = statusConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}

function Orders() {
  const { cart } = useCart()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      if (!cart?.userId) return

      try {
        const res = await client.shop.api.orders.$get({
          query: { userId: cart.userId },
        })
        if (res.ok) {
          const data = await res.json()
          setOrders(data)
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchOrders()
  }, [cart?.userId])

  if (isLoading) {
    return <div className="py-16 text-center">Loading...</div>
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col">
        <main className="flex flex-1 justify-center">
          <div className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Package className="mx-auto h-16 w-16 text-muted-foreground" />
              <h1 className="mt-4 font-bold text-2xl">注文履歴はありません</h1>
              <p className="mt-2 text-muted-foreground">
                まだ注文がありません。お買い物を始めましょう!
              </p>
              <Link to="/shop/products">
                <Button className="mt-6">商品を見る</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 justify-center">
        <div className="w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-bold text-3xl">注文履歴</h1>

          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="rounded-lg border">
                <div className="border-b bg-gray-50 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                      <div>
                        <p className="text-muted-foreground text-sm">
                          注文番号
                        </p>
                        <p className="font-semibold">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">注文日</p>
                        <p className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(order.createdAt).toLocaleDateString("ja-JP")}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">
                          合計金額
                        </p>
                        <p className="font-semibold">
                          ¥{order.total.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(order.status)}
                      {order.status === "shipped" && (
                        <Button size="sm" variant="outline">
                          <Truck className="mr-2 h-3 w-3" />
                          配送状況
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div
                        key={`${order.id}-${item.productId}-${index}`}
                        className="flex gap-4"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded bg-gray-100 flex items-center justify-center text-muted-foreground text-xs">
                          {item.productId}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.productName}</p>
                          <p className="text-muted-foreground text-sm">
                            数量: {item.quantity} × ¥
                            {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      注文詳細
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                    {order.status === "delivered" && (
                      <>
                        <Button variant="outline" size="sm">
                          レビューを書く
                        </Button>
                        <Button variant="outline" size="sm">
                          再注文
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
