import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"
import { ShopProductCard } from "@/routes/shop/-components/shop-product-card"

export const Route = createFileRoute("/shop/products")({
  component: Products,
})

const mockProducts = [
  {
    id: "prod-001",
    name: "プレミアム ワイヤレスヘッドホン",
    description:
      "高音質ノイズキャンセリング機能搭載。最大30時間の連続再生が可能。",
    price: 29800,
    category: "electronics",
    images: ["/placeholder.jpg"],
  },
  {
    id: "prod-002",
    name: "スマートウォッチ Pro",
    description: "健康管理から通知確認まで。多機能スマートウォッチ。",
    price: 45000,
    category: "electronics",
    images: ["/placeholder.jpg"],
  },
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
]

function Products() {
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    { id: "electronics", name: "エレクトロニクス" },
    { id: "fashion", name: "ファッション" },
    { id: "home", name: "ホーム＆リビング" },
    { id: "sports", name: "スポーツ" },
  ]

  const filteredProducts = mockProducts.filter((product) => {
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1]
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
    return priceMatch && categoryMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "name") return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex-1">
        <div className="flex justify-center py-8">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="font-bold text-3xl">すべての商品</h1>
              <p className="mt-2 text-muted-foreground">
                {filteredProducts.length} 件の商品
              </p>
            </div>

            <div className="flex gap-8">
              {/* Sidebar Filters */}
              <aside className="hidden w-64 shrink-0 lg:block">
                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="mb-4 font-semibold">カテゴリ</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedCategories([
                                  ...selectedCategories,
                                  category.id,
                                ])
                              } else {
                                setSelectedCategories(
                                  selectedCategories.filter(
                                    (c) => c !== category.id,
                                  ),
                                )
                              }
                            }}
                          />
                          <Label
                            htmlFor={category.id}
                            className="cursor-pointer font-normal text-sm"
                          >
                            {category.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="mb-4 font-semibold">価格帯</h3>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={50000}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>¥{priceRange[0].toLocaleString()}</span>
                        <span>¥{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Reset Filters */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setPriceRange([0, 50000])
                      setSelectedCategories([])
                    }}
                  >
                    フィルターをリセット
                  </Button>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Sort Options */}
                <div className="mb-6 flex items-center justify-between">
                  <Button variant="outline" className="lg:hidden">
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

                {/* Products */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sortedProducts.map((product) => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>

                {sortedProducts.length === 0 && (
                  <div className="py-12 text-center">
                    <p className="text-muted-foreground">
                      該当する商品が見つかりませんでした
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <ShopFooter />
    </div>
  )
}
