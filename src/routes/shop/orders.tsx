import { createFileRoute, Link } from "@tanstack/react-router"
import { Calendar, ChevronRight, Package, Truck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"

export const Route = createFileRoute("/shop/orders")({
  component: Orders,
})

type Order = {
  id: string
  orderNumber: string
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: {
    name: string
    quantity: number
    price: number
    image: string
  }[]
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "#2024-12345",
    date: "2024-01-15",
    status: "delivered",
    total: 75600,
    items: [
      {
        name: "プレミアム ワイヤレスヘッドホン",
        quantity: 1,
        price: 29800,
        image: "/placeholder.jpg",
      },
      {
        name: "レザービジネスバッグ",
        quantity: 1,
        price: 38000,
        image: "/placeholder.jpg",
      },
      {
        name: "オーガニックコットン Tシャツ",
        quantity: 2,
        price: 3900,
        image: "/placeholder.jpg",
      },
    ],
  },
  {
    id: "2",
    orderNumber: "#2024-12344",
    date: "2024-01-10",
    status: "shipped",
    total: 51600,
    items: [
      {
        name: "スマートウォッチ Pro",
        quantity: 1,
        price: 45000,
        image: "/placeholder.jpg",
      },
      {
        name: "ワイヤレス充電器",
        quantity: 1,
        price: 6500,
        image: "/placeholder.jpg",
      },
    ],
  },
  {
    id: "3",
    orderNumber: "#2024-12343",
    date: "2024-01-05",
    status: "processing",
    total: 17380,
    items: [
      {
        name: "スニーカー エアマックス",
        quantity: 1,
        price: 15800,
        image: "/placeholder.jpg",
      },
    ],
  },
]

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
  if (mockOrders.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <ShopHeader />

        <main className="flex flex-1 justify-center">
          <div className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Package className="mx-auto h-16 w-16 text-muted-foreground" />
              <h1 className="mt-4 font-bold text-2xl">注文履歴はありません</h1>
              <p className="mt-2 text-muted-foreground">
                まだ注文がありません。お買い物を始めましょう！
              </p>
              <Link to="/shop/products">
                <Button className="mt-6">商品を見る</Button>
              </Link>
            </div>
          </div>
        </main>

        <ShopFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex flex-1 justify-center">
        <div className="w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-bold text-3xl">注文履歴</h1>

          <div className="space-y-6">
            {mockOrders.map((order) => (
              <div key={order.id} className="rounded-lg border">
                <div className="border-b bg-gray-50 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                      <div>
                        <p className="text-muted-foreground text-sm">
                          注文番号
                        </p>
                        <p className="font-semibold">{order.orderNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">注文日</p>
                        <p className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(order.date).toLocaleDateString("ja-JP")}
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
                    {order.items.map((item) => (
                      <div
                        key={`${order.id}-${item.name}`}
                        className="flex gap-4"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
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

      <ShopFooter />
    </div>
  )
}
