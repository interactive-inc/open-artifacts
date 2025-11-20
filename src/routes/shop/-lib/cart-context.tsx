import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { client } from "./client"

type CartItem = {
  productId: string
  quantity: number
  price: number
}

type Cart = {
  id: string
  userId: string
  items: CartItem[]
  total: number
}

type CartContextType = {
  cart: Cart | null
  isLoading: boolean
  addToCart: (productId: string, quantity?: number) => Promise<void>
  removeFromCart: (productId: string) => Promise<void>
  updateQuantity: (productId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState<string>("")

  // Initialize User ID
  useEffect(() => {
    const storedUserId = localStorage.getItem("shop_user_id")
    if (storedUserId) {
      setUserId(storedUserId)
    } else {
      const newUserId = crypto.randomUUID()
      localStorage.setItem("shop_user_id", newUserId)
      setUserId(newUserId)
    }
  }, [])

  // Fetch Cart
  const fetchCart = async () => {
    if (!userId) return

    try {
      const res = await client.shop.api.cart[":userId"].$get({
        param: { userId },
      })
      if (res.ok) {
        const data = await res.json()
        setCart(data)
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (userId) {
      fetchCart()
    }
  }, [userId])

  const addToCart = async (productId: string, quantity = 1) => {
    if (!userId) return

    try {
      const res = await client.shop.api.cart[":userId"].items.$post({
        param: { userId },
        // @ts-expect-error - Hono client type inference issue with json property
        json: { productId, quantity },
      })
      if (res.ok) {
        await fetchCart()
      }
    } catch (error) {
      console.error("Failed to add to cart:", error)
    }
  }

  const removeFromCart = async (productId: string) => {
    if (!userId) return

    try {
      const res = await client.shop.api.cart[":userId"].items[
        ":productId"
      ].$delete({
        param: { userId, productId },
      })
      if (res.ok) {
        await fetchCart()
      }
    } catch (error) {
      console.error("Failed to remove from cart:", error)
    }
  }

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!userId) return

    try {
      const res = await client.shop.api.cart[":userId"].items.$patch({
        param: { userId },
        // @ts-expect-error - Hono client type inference issue with json property
        json: { productId, quantity },
      })
      if (res.ok) {
        await fetchCart()
      }
    } catch (error) {
      console.error("Failed to update quantity:", error)
    }
  }

  const clearCart = async () => {
    if (!userId) return

    try {
      const res = await client.shop.api.cart[":userId"].$delete({
        param: { userId },
      })
      if (res.ok) {
        setCart(null)
        await fetchCart()
      }
    } catch (error) {
      console.error("Failed to clear cart:", error)
    }
  }

  const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
