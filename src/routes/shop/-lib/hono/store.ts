import ordersData from "../resources/orders.json"
import productsData from "../resources/products.json"

export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  stock: number
  featured: boolean
}

export type CartItem = {
  productId: string
  quantity: number
  price: number
}

export type Cart = {
  id: string
  userId: string
  items: CartItem[]
  total: number
  createdAt: string
  updatedAt: string
}

export type OrderItem = {
  productId: string
  productName: string
  quantity: number
  price: number
  subtotal: number
}

export type Order = {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shippingAddress: {
    name: string
    address: string
    city: string
    postalCode: string
    phone: string
  }
  createdAt: string
  updatedAt: string
}

export const products = productsData as Product[]
export const carts = new Map<string, Cart>()
export const orders = new Map<string, Order>(
  (ordersData as Order[]).map((order) => [order.id, order]),
)
