import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
// Cart
import * as cartUserId from "./routes/cart.$userId"
import * as cartUserIdItems from "./routes/cart.$userId.items"
import * as cartUserIdItemsProductId from "./routes/cart.$userId.items.$productId"
// Categories
import * as categories from "./routes/categories"
import * as categoriesId from "./routes/categories.$id"
// Orders
import * as orders from "./routes/orders"
import * as ordersId from "./routes/orders.$id"
import * as ordersIdStatus from "./routes/orders.$id.status"
// Products
import * as products from "./routes/products"
import * as productsId from "./routes/products.$id"

const app = new Hono()

  // Middleware
  .use("*", logger())
  .use("*", cors())

  // Base path
  .basePath("/shop/api")

  // Products routes
  .get("/products", ...products.GET)
  .get("/products/:id", ...productsId.GET)

  // Categories routes
  .get("/categories", ...categories.GET)
  .get("/categories/:id", ...categoriesId.GET)

  // Orders routes
  .get("/orders", ...orders.GET)
  .post("/orders", ...orders.POST)
  .get("/orders/:id", ...ordersId.GET)
  .patch("/orders/:id/status", ...ordersIdStatus.PATCH)

  // Cart routes
  .get("/cart/:userId", ...cartUserId.GET)
  .delete("/cart/:userId", ...cartUserId.DELETE)
  .post("/cart/:userId/items", ...cartUserIdItems.POST)
  .patch("/cart/:userId/items", ...cartUserIdItems.PATCH)
  .delete("/cart/:userId/items/:productId", ...cartUserIdItemsProductId.DELETE)

  // Health check
  .get("/health", (c) => {
    return c.json({ status: "ok", timestamp: new Date().toISOString() })
  })

export const hono = app
export type AppType = typeof app
