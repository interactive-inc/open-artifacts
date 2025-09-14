import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useId, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"

export const Route = createFileRoute("/shop/cart")({
  component: Cart,
})

type CartItem = {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
  color?: string
  size?: string
}

const mockCartItems: CartItem[] = [
  {
    id: "cart-1",
    productId: "prod-001",
    name: "プレミアム ワイヤレスヘッドホン",
    price: 29800,
    quantity: 1,
    image: "/placeholder.jpg",
    color: "ブラック",
  },
  {
    id: "cart-2",
    productId: "prod-004",
    name: "レザービジネスバッグ",
    price: 38000,
    quantity: 1,
    image: "/placeholder.jpg",
    color: "ブラウン",
  },
  {
    id: "cart-3",
    productId: "prod-003",
    name: "オーガニックコットン Tシャツ",
    price: 3900,
    quantity: 2,
    image: "/placeholder.jpg",
    color: "ホワイト",
    size: "M",
  },
]

function Cart() {
  const couponId = useId()
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      )
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  const shipping = subtotal >= 5000 ? 0 : 500
  const tax = Math.floor(subtotal * 0.1)
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <ShopHeader />

        <main className="flex flex-1 justify-center">
          <div className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
              <h1 className="mt-4 font-bold text-2xl">カートは空です</h1>
              <p className="mt-2 text-muted-foreground">
                お気に入りの商品を見つけて、カートに追加してください
              </p>
              <Link to="/shop/products">
                <Button className="mt-6">商品を探す</Button>
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
          <h1 className="mb-8 font-bold text-3xl">ショッピングカート</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="rounded-lg border p-4">
                    <div className="flex gap-4">
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <Link
                              to="/shop/products/$product"
                              params={{ product: item.productId }}
                            >
                              <h3 className="font-semibold hover:text-primary">
                                {item.name}
                              </h3>
                            </Link>
                            <div className="mt-1 text-muted-foreground text-sm">
                              {item.color && <span>カラー: {item.color}</span>}
                              {item.size && (
                                <span className="ml-4">
                                  サイズ: {item.size}
                                </span>
                              )}
                            </div>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="font-semibold text-lg">
                            ¥{(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Link to="/shop/products">
                  <Button variant="outline">買い物を続ける</Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 font-semibold text-lg">注文内容</h2>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>小計</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>配送料</span>
                    <span>
                      {shipping === 0
                        ? "無料"
                        : `¥${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>消費税</span>
                    <span>¥{tax.toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>合計</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>

                {shipping > 0 && (
                  <p className="mt-2 text-muted-foreground text-sm">
                    あと ¥{(5000 - subtotal).toLocaleString()} で送料無料
                  </p>
                )}

                {/* Coupon */}
                <div className="mt-6">
                  <label
                    htmlFor={couponId}
                    className="mb-2 block font-medium text-sm"
                  >
                    クーポンコード
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id={couponId}
                      placeholder="コードを入力"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline">適用</Button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link to="/shop/checkout">
                  <Button className="mt-6 w-full" size="lg">
                    レジに進む
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="mt-4 space-y-2 text-center text-muted-foreground text-sm">
                  <p>✓ SSL暗号化で安全な決済</p>
                  <p>✓ 30日間返品保証</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ShopFooter />
    </div>
  )
}
