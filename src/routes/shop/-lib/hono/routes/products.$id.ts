import productsData from "../../resources/products.json"
import { factory } from "../factory"

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

const products = productsData as Product[]

// GET /products/:id - 商品詳細取得
export const GET = factory.createHandlers((c) => {
  const id = c.req.param("id")
  const product = products.find((p) => p.id === id)

  if (!product) {
    return c.json({ error: "Product not found" }, 404)
  }

  return c.json(product)
})
