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

// GET /categories - カテゴリ一覧取得
export const GET = factory.createHandlers((c) => {
  return c.json(categories)
})
