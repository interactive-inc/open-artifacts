import { readFileSync } from "node:fs"
import { join } from "node:path"
import { Hono } from "hono"

type Category = {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export const categoriesRoute = new Hono()

// カテゴリ一覧取得
categoriesRoute.get("/", (c) => {
  try {
    const dataPath = join(process.cwd(), "data", "categories.json")
    const categories = JSON.parse(readFileSync(dataPath, "utf-8")) as Category[]

    return c.json(categories)
  } catch (_error) {
    return c.json({ error: "Failed to load categories" }, 500)
  }
})

// カテゴリ詳細取得
categoriesRoute.get("/:id", (c) => {
  try {
    const id = c.req.param("id")
    const dataPath = join(process.cwd(), "data", "categories.json")
    const categories = JSON.parse(readFileSync(dataPath, "utf-8")) as Category[]

    const category = categories.find((cat) => cat.id === id || cat.slug === id)

    if (!category) {
      return c.json({ error: "Category not found" }, 404)
    }

    return c.json(category)
  } catch (_error) {
    return c.json({ error: "Failed to load category" }, 500)
  }
})
