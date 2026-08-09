import { factory } from "../factory"
import { products } from "../store"

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
