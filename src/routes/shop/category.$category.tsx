import { createFileRoute } from "@tanstack/react-router"
import { Filter } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"
import { ShopProductCard } from "@/routes/shop/-components/shop-product-card"

export const Route = createFileRoute("/shop/category/$category")({
  component: Category,
})

const categoryData = {
  electronics: {
    name: "エレクトロニクス",
    description:
      "最新のテクノロジー製品。スマートフォン、PC周辺機器、オーディオ機器など。",
    image: "/placeholder.jpg",
    products: [
      {
        id: "prod-001",
        name: "プレミアム ワイヤレスヘッドホン",
        description: "高音質ノイズキャンセリング機能搭載。",
        price: 29800,
        category: "electronics",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-002",
        name: "スマートウォッチ Pro",
        description: "健康管理から通知確認まで。",
        price: 45000,
        category: "electronics",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-009",
        name: "4K ウェブカメラ",
        description: "高画質4K対応。オートフォーカス機能搭載。",
        price: 12800,
        category: "electronics",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-010",
        name: "ワイヤレス充電器",
        description: "最大15W急速充電対応。",
        price: 6500,
        category: "electronics",
        images: ["/placeholder.jpg"],
      },
    ],
  },
  fashion: {
    name: "ファッション",
    description:
      "トレンドのアパレルとアクセサリー。メンズ・レディース・ユニセックス商品を豊富に取り揃え。",
    image: "/placeholder.jpg",
    products: [
      {
        id: "prod-003",
        name: "オーガニックコットン Tシャツ",
        description: "肌に優しい100%オーガニックコットン使用。",
        price: 3900,
        category: "fashion",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-004",
        name: "レザービジネスバッグ",
        description: "本革使用の高級ビジネスバッグ。",
        price: 38000,
        category: "fashion",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-011",
        name: "デニムジャケット",
        description: "ヴィンテージ加工のクラシックデニムジャケット。",
        price: 12000,
        category: "fashion",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-012",
        name: "スニーカー エアマックス",
        description: "快適なクッション性と洗練されたデザイン。",
        price: 15800,
        category: "fashion",
        images: ["/placeholder.jpg"],
      },
    ],
  },
  home: {
    name: "ホーム＆リビング",
    description: "快適な暮らしを演出するインテリアと生活雑貨。",
    image: "/placeholder.jpg",
    products: [
      {
        id: "prod-005",
        name: "アロマディフューザー",
        description: "超音波式で静音設計。7色のLEDライト付き。",
        price: 5800,
        category: "home",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-006",
        name: "セラミックコーヒーカップセット",
        description: "職人手作りのセラミックカップ4個セット。",
        price: 8500,
        category: "home",
        images: ["/placeholder.jpg"],
      },
    ],
  },
  sports: {
    name: "スポーツ＆アウトドア",
    description:
      "アクティブなライフスタイルをサポートするスポーツ用品とフィットネス機器。",
    image: "/placeholder.jpg",
    products: [
      {
        id: "prod-007",
        name: "フィットネスヨガマット",
        description: "厚さ6mmで快適なクッション性。",
        price: 4200,
        category: "sports",
        images: ["/placeholder.jpg"],
      },
      {
        id: "prod-008",
        name: "プロテインシェイカー",
        description: "BPAフリー素材使用。漏れ防止設計。",
        price: 1800,
        category: "sports",
        images: ["/placeholder.jpg"],
      },
    ],
  },
}

function Category() {
  const { category: categoryId } = Route.useParams()
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  const category = categoryData[categoryId as keyof typeof categoryData]

  if (!category) {
    return (
      <ShopLayout>
        <div className="flex min-h-screen flex-col">
          <ShopHeader />
          <main className="flex-1">
            <div className="container py-16">
              <p className="text-center">カテゴリが見つかりません</p>
            </div>
          </main>
          <ShopFooter />
        </div>
      </ShopLayout>
    )
  }

  const sortedProducts = [...category.products].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "name") return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex-1">
        {/* Category Hero */}
        <section className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative flex h-full items-center justify-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="font-bold text-4xl">{category.name}</h1>
                <p className="mt-2 text-lg opacity-90">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center py-8">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-muted-foreground text-sm">
              <a href="/" className="hover:text-primary">
                ホーム
              </a>
              <span>/</span>
              <a href="/products" className="hover:text-primary">
                商品一覧
              </a>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
            </div>

            {/* Results and Sort */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {category.products.length} 件の商品
              </p>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  フィルター
                </Button>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="並び替え" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">おすすめ順</SelectItem>
                    <SelectItem value="price-asc">価格の安い順</SelectItem>
                    <SelectItem value="price-desc">価格の高い順</SelectItem>
                    <SelectItem value="name">名前順</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sortedProducts.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            {category.products.length > 8 && (
              <div className="mt-12 text-center">
                <Button variant="outline">もっと見る</Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <ShopFooter />
    </div>
  )
}
