import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { cartRoute } from "../routes/cart"
import { categoriesRoute } from "../routes/categories"
import { ordersRoute } from "../routes/orders"
import { productsRoute } from "../routes/products"

export const hono = new Hono()

// Middleware
hono.use("*", logger())
hono.use("*", cors())

// Base path
hono.basePath("/api")

// Routes
hono.route("/products", productsRoute)
hono.route("/categories", categoriesRoute)
hono.route("/cart", cartRoute)
hono.route("/orders", ordersRoute)

// Health check
hono.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() })
})
