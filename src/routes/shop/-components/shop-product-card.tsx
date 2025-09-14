import { Link } from "@tanstack/react-router"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to="/shop/products/$product" params={{ product: product.id }}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>

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
