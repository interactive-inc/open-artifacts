import { createFileRoute, Link } from "@tanstack/react-router"
import { ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ShopProductCard } from "@/routes/shop/-components/shop-product-card"
import { useCart } from "@/routes/shop/-lib/cart-context"
import { client } from "@/routes/shop/-lib/client"

export const Route = createFileRoute("/shop/products/$product")({
  component: ProductDetail,
})

type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  stock: number
  featured: boolean
}

function ProductDetail() {
  const { product: productId } = Route.useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await client.shop.api.products[":id"].$get({
        param: { id: productId },
      })
      if (res.ok) {
        const data = await res.json()
        setProduct(data)
      }
    }
    fetchProduct()
  }, [productId])

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product) return
      const res = await client.shop.api.products.$get({
        query: { category: product.category },
      })
      if (res.ok) {
        const data = await res.json()
        setRelatedProducts(
          data.filter((p) => p.id !== product.id).slice(0, 3)
        )
      }
    }
    fetchRelatedProducts()
  }, [product])

  const handleAddToCart = async () => {
    if (!product) return
    setIsAddingToCart(true)
    try {
      await addToCart(product.id, quantity)
    } finally {
      setIsAddingToCart(false)
    }
  }

  if (!product) {
    return <div className="py-16 text-center">Loading...</div>
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center py-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-muted-foreground text-sm">
            <Link to="/shop" className="hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <Link to="/shop/products" className="hover:text-primary">
              商品一覧
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Images */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                {product.images.length > 1 && (
                  <>
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
                          Math.min(product.images.length - 1, selectedImage + 1)
                        )
                      }
                      className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
                      disabled={selectedImage === product.images.length - 1}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      type="button"
                      key={`${image}-${index}`}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                        selectedImage === index ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <h1 className="font-bold text-3xl">{product.name}</h1>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant={product.stock > 0 ? "secondary" : "destructive"}>
                    {product.stock > 0 ? "在庫あり" : "在庫切れ"}
                  </Badge>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-3xl">
                    ¥{product.price.toLocaleString()}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm">
                  税込・送料無料
                </p>
              </div>

              <p className="mb-6 text-muted-foreground">
                {product.description}
              </p>

              {/* Quantity */}
              <div className="mb-6">
                <Label className="text-base">数量</Label>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0 || isAddingToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {isAddingToCart ? "追加中..." : "カートに追加"}
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

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 font-bold text-2xl">関連商品</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((p) => (
                  <ShopProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
