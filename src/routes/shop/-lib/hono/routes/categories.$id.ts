import categoriesData from "../../resources/categories.json"
import { factory } from "../factory"

type Category = {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

const categories = categoriesData as Category[]

// GET /categories/:id - カテゴリ詳細取得
export const GET = factory.createHandlers((c) => {
  const id = c.req.param("id")
  const category = categories.find((cat) => cat.id === id || cat.slug === id)

  if (!category) {
    return c.json({ error: "Category not found" }, 404)
  }

  return c.json(category)
})
