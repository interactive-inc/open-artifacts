import { createFileRoute, Link } from "@tanstack/react-router"
import { ChevronRight, CreditCard, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"
import { ShopProductCard } from "@/routes/shop/-components/shop-product-card"

export const Route = createFileRoute("/shop/")({
  component: Home,
})

const mockProducts = [
  {
    id: "prod-001",
    name: "プレミアム ワイヤレスヘッドホン",
    description:
      "高音質ノイズキャンセリング機能搭載。最大30時間の連続再生が可能な次世代ワイヤレスヘッドホン。",
    price: 29800,
    category: "electronics",
    images: ["/placeholder.jpg"],
  },
  {
    id: "prod-002",
    name: "スマートウォッチ Pro",
    description:
      "健康管理から通知確認まで。あなたの生活をサポートする多機能スマートウォッチ。",
    price: 45000,
    category: "electronics",
    images: ["/placeholder.jpg"],
  },
  {
    id: "prod-004",
    name: "レザービジネスバッグ",
    description:
      "本革使用の高級ビジネスバッグ。PC収納スペース付きで機能性も抜群。",
    price: 38000,
    category: "fashion",
    images: ["/placeholder.jpg"],
  },
  {
    id: "prod-012",
    name: "スニーカー エアマックス",
    description: "快適なクッション性と洗練されたデザイン。毎日の街歩きに最適。",
    price: 15800,
    category: "fashion",
    images: ["/placeholder.jpg"],
  },
]

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative flex h-full items-center justify-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 font-bold text-5xl">新年セール開催中</h1>
                <p className="mb-8 text-xl">
                  最大50%OFF！人気商品が期間限定価格で登場
                </p>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  セール商品を見る
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="flex justify-center border-b bg-gray-50 py-12">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">送料無料</h3>
                  <p className="text-muted-foreground text-sm">
                    5,000円以上のご購入で
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">安心保証</h3>
                  <p className="text-muted-foreground text-sm">
                    30日間返品保証
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">安全な決済</h3>
                  <p className="text-muted-foreground text-sm">
                    SSL暗号化で安心
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="flex justify-center py-12">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-3xl">注目の商品</h2>
                <p className="mt-2 text-muted-foreground">
                  今週の人気アイテムをチェック
                </p>
              </div>
              <Link to="/shop/products">
                <Button variant="outline">
                  すべて見る
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mockProducts.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="flex justify-center bg-gray-50 py-12">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-bold text-3xl">
              カテゴリから探す
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Link
                to="/shop/category/$category"
                params={{ category: "electronics" }}
              >
                <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 p-8">
                    <div className="flex h-full items-center justify-center text-white">
                      <span className="font-bold text-2xl">Electronics</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary">
                      エレクトロニクス
                    </h3>
                  </div>
                </div>
              </Link>

              <Link
                to="/shop/category/$category"
                params={{ category: "fashion" }}
              >
                <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square bg-gradient-to-br from-pink-500 to-red-500 p-8">
                    <div className="flex h-full items-center justify-center text-white">
                      <span className="font-bold text-2xl">Fashion</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary">
                      ファッション
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/shop/category/$category" params={{ category: "home" }}>
                <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-500 p-8">
                    <div className="flex h-full items-center justify-center text-white">
                      <span className="font-bold text-2xl">Home</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary">
                      ホーム＆リビング
                    </h3>
                  </div>
                </div>
              </Link>

              <Link
                to="/shop/category/$category"
                params={{ category: "sports" }}
              >
                <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-square bg-gradient-to-br from-orange-500 to-yellow-500 p-8">
                    <div className="flex h-full items-center justify-center text-white">
                      <span className="font-bold text-2xl">Sports</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary">
                      スポーツ
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ShopFooter />
    </div>
  )
}
