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

// GET /products - 商品一覧取得
export const GET = factory.createHandlers((c) => {
  // クエリパラメータでフィルタリング
  const category = c.req.query("category")
  const featured = c.req.query("featured")

  let filteredProducts = products

  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category === category)
  }

  if (featured === "true") {
    filteredProducts = filteredProducts.filter((p) => p.featured)
  }

  return c.json(filteredProducts)
})
