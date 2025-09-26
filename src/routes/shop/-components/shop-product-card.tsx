import { Link } from "@tanstack/react-router"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useFavorites } from "../-lib/favorites-context"

type Props = {
  product: {
    id: string
    name: string
    description: string
    price: number
    images: string[]
    category: string
  }
}

export function ShopProductCard(props: Props) {
  const product = props.product
  const favoritesContext = useFavorites()
  const isFavorite = favoritesContext.isFavorite(product.id)

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    favoritesContext.toggleFavorite(product.id)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Link to="/shop/products/$product" params={{ product: product.id }}>
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
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 cursor-pointer rounded-full bg-white p-2 shadow-md transition-all hover:shadow-lg"
          aria-label={isFavorite ? "お気に入りから削除" : "お気に入りに追加"}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      <CardContent className="p-4">
        <Link to="/shop/products/$product" params={{ product: product.id }}>
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
  )
}
