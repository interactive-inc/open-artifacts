import { readFileSync } from "node:fs"
import { join } from "node:path"
import { Hono } from "hono"

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

export const productsRoute = new Hono()

// 商品一覧取得
productsRoute.get("/", (c) => {
  try {
    const dataPath = join(process.cwd(), "data", "products.json")
    const products = JSON.parse(readFileSync(dataPath, "utf-8")) as Product[]

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
  } catch (_error) {
    return c.json({ error: "Failed to load products" }, 500)
  }
})

// 商品詳細取得
productsRoute.get("/:id", (c) => {
  try {
    const id = c.req.param("id")
    const dataPath = join(process.cwd(), "data", "products.json")
    const products = JSON.parse(readFileSync(dataPath, "utf-8")) as Product[]

    const product = products.find((p) => p.id === id)

    if (!product) {
      return c.json({ error: "Product not found" }, 404)
    }

    return c.json(product)
  } catch (_error) {
    return c.json({ error: "Failed to load product" }, 500)
  }
})
