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

// Shared in-memory store
export const carts = new Map<string, Cart>()
