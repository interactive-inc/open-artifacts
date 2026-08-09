import { factory } from "../factory"
import { products } from "../store"

// GET /products/:id - 商品詳細取得
export const GET = factory.createHandlers((c) => {
  const id = c.req.param("id")
  const product = products.find((p) => p.id === id)

  if (!product) {
    return c.json({ error: "Product not found" }, 404)
  }

  return c.json(product)
})
