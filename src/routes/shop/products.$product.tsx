import { createFileRoute } from "@tanstack/react-router"
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"
import { ShopProductCard } from "@/routes/shop/-components/shop-product-card"

export const Route = createFileRoute("/shop/products/$product")({
  component: ProductDetail,
})

const mockProduct = {
  id: "prod-001",
  name: "プレミアム ワイヤレスヘッドホン",
  description:
    "高音質ノイズキャンセリング機能搭載。最大30時間の連続再生が可能な次世代ワイヤレスヘッドホン。",
  longDescription: `
    当社のプレミアムワイヤレスヘッドホンは、音楽愛好家のために設計された究極のオーディオ体験を提供します。
    
    主な特徴：
    • アクティブノイズキャンセリング（ANC）技術により、周囲の騒音を最大95%カット
    • 40mmダイナミックドライバーによる深みのある低音と透明感のある高音
    • 最大30時間の連続再生（ANCオフ時は40時間）
    • 急速充電対応：15分の充電で3時間の再生が可能
    • マルチポイント接続により、2台のデバイスに同時接続
    • 折りたたみ可能なデザインで持ち運びに便利
    
    快適性：
    低反発メモリーフォームイヤーパッドと調整可能なヘッドバンドにより、長時間の使用でも快適です。
    
    互換性：
    Bluetooth 5.2対応で、iOS、Android、Windows、MacOSなど、あらゆるデバイスと互換性があります。
  `,
  price: 29800,
  originalPrice: 39800,
  category: "electronics",
  images: [
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
  ],
  stock: 50,
  colors: ["ブラック", "シルバー", "ネイビー"],
  rating: 4.5,
  reviews: 128,
  specifications: {
    ドライバー: "40mm ダイナミック",
    周波数応答: "20Hz - 20kHz",
    インピーダンス: "32Ω",
    Bluetooth: "5.2",
    バッテリー: "30時間（ANCオン）",
    充電時間: "約2時間",
    重量: "250g",
  },
}

const relatedProducts = [
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
  {
    id: "prod-002",
    name: "スマートウォッチ Pro",
    description: "健康管理から通知確認まで。",
    price: 45000,
    category: "electronics",
    images: ["/placeholder.jpg"],
  },
]

function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex-1">
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
              <a href="/category/electronics" className="hover:text-primary">
                エレクトロニクス
              </a>
              <span>/</span>
              <span className="text-foreground">{mockProduct.name}</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Images */}
              <div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={mockProduct.images[selectedImage]}
                    alt={mockProduct.name}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage(Math.max(0, selectedImage - 1))
                    }
                    className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
                    disabled={selectedImage === 0}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage(
                        Math.min(
                          mockProduct.images.length - 1,
                          selectedImage + 1,
                        ),
                      )
                    }
                    className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
                    disabled={selectedImage === mockProduct.images.length - 1}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-4">
                  {mockProduct.images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                        selectedImage === index ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${mockProduct.name} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                  <h1 className="font-bold text-3xl">{mockProduct.name}</h1>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={`rating-star-${mockProduct.id}-${i}`}
                          className={`h-4 w-4 ${
                            i < Math.floor(mockProduct.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-muted-foreground text-sm">
                        ({mockProduct.reviews} レビュー)
                      </span>
                    </div>
                    <Badge variant="secondary">在庫あり</Badge>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-3xl">
                      ¥{mockProduct.price.toLocaleString()}
                    </span>
                    {mockProduct.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ¥{mockProduct.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {mockProduct.originalPrice && (
                      <Badge variant="destructive">
                        {Math.round(
                          (1 - mockProduct.price / mockProduct.originalPrice) *
                            100,
                        )}
                        % OFF
                      </Badge>
                    )}
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm">
                    税込・送料無料
                  </p>
                </div>

                <p className="mb-6 text-muted-foreground">
                  {mockProduct.description}
                </p>

                {/* Color Selection */}
                <div className="mb-6">
                  <Label className="text-base">カラー</Label>
                  <RadioGroup
                    value={selectedColor}
                    onValueChange={setSelectedColor}
                    className="mt-2 flex gap-2"
                  >
                    {mockProduct.colors.map((color) => (
                      <div key={color} className="flex items-center">
                        <RadioGroupItem
                          value={color}
                          id={color}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={color}
                          className={`cursor-pointer rounded-md border-2 px-4 py-2 text-sm ${
                            selectedColor === color
                              ? "border-primary bg-primary/5"
                              : "border-gray-200"
                          }`}
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <Label className="text-base">数量</Label>
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    カートに追加
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">商品説明</TabsTrigger>
                <TabsTrigger value="specifications">仕様</TabsTrigger>
                <TabsTrigger value="reviews">レビュー</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">
                    {mockProduct.longDescription}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <div className="rounded-lg border">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(mockProduct.specifications).map(
                        ([key, value], index) => (
                          <tr
                            key={key}
                            className={index !== 0 ? "border-t" : ""}
                          >
                            <td className="px-4 py-3 font-medium">{key}</td>
                            <td className="px-4 py-3">{value}</td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="rounded-lg border p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-bold text-4xl">
                          {mockProduct.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={`display-star-${mockProduct.id}-${i}`}
                              className={`h-4 w-4 ${
                                i < Math.floor(mockProduct.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="mt-1 text-muted-foreground text-sm">
                          {mockProduct.reviews} レビュー
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    レビューを書く
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Related Products */}
            <section className="mt-16">
              <h2 className="mb-6 font-bold text-2xl">関連商品</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <ShopFooter />
    </div>
  )
}
