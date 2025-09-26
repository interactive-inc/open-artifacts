import { createFileRoute, Link } from "@tanstack/react-router"
import { Heart, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShopFooter } from "./-components/shop-footer"
import { ShopHeader } from "./-components/shop-header"
import { useFavorites } from "./-lib/favorites-context"

export const Route = createFileRoute("/shop/favorites")({
  component: FavoritesPage,
})

type Product = {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
}

function FavoritesContent() {
  const favoritesContext = useFavorites()
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFavoriteProducts = async () => {
      setLoading(true)
      const favoriteIds = Array.from(favoritesContext.favorites)

      if (favoriteIds.length === 0) {
        setFavoriteProducts([])
        setLoading(false)
        return
      }

      try {
        // 各お気に入り商品の詳細を取得
        const productPromises = favoriteIds.map(async (id) => {
          const response = await fetch(`/shop/api/products/${id}`)
          if (response.ok) {
            return response.json()
          }
          return null
        })

        const products = await Promise.all(productPromises)
        const validProducts = products.filter((p): p is Product => p !== null)
        setFavoriteProducts(validProducts)
      } catch (error) {
        console.error("Failed to load favorite products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFavoriteProducts()
  }, [favoritesContext.favorites])

  const handleRemoveFavorite = (productId: string) => {
    favoritesContext.removeFavorite(productId)
  }

  return (
    <main className="flex-1 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-bold text-3xl">お気に入り</h1>
          <p className="mt-2 text-muted-foreground">
            {favoritesContext.favorites.size} 件の商品
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">読み込み中...</p>
          </div>
        ) : favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Heart className="mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 font-semibold text-xl">
              お気に入りの商品はありません
            </h2>
            <p className="mb-6 text-center text-muted-foreground">
              商品ページでハートアイコンをクリックして、お気に入りに追加してください
            </p>
            <Link to="/shop/products">
              <Button>商品を見る</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="relative">
                  <Link
                    to="/shop/products/$product"
                    params={{ product: product.id }}
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.images[0] || "/placeholder.jpg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleRemoveFavorite(product.id)}
                    className="absolute top-2 right-2 rounded-full bg-white p-2 shadow-md transition-all hover:shadow-lg"
                    aria-label="お気に入りから削除"
                  >
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  </button>
                </div>

                <CardContent className="p-4">
                  <Link
                    to="/shop/products/$product"
                    params={{ product: product.id }}
                  >
                    <h3 className="line-clamp-1 font-semibold hover:text-primary">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
                    {product.description}
                  </p>
                  <p className="mt-2 font-bold text-lg">
                    ¥{product.price.toLocaleString()}
                  </p>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" size="sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    カートに追加
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

function FavoritesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />
      <FavoritesContent />
      <ShopFooter />
    </div>
  )
}
