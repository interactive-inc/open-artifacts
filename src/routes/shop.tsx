import { Outlet, createFileRoute } from "@tanstack/react-router"
import { CartProvider } from "./shop/-lib/cart-context"
import { FavoritesProvider } from "./shop/-lib/favorites-context"
import { ShopFooter } from "./shop/-components/shop-footer"
import { ShopHeader } from "./shop/-components/shop-header"

export const Route = createFileRoute("/shop")({
  component: ShopLayout,
})

function ShopLayout() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <ShopHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <ShopFooter />
        </div>
      </CartProvider>
    </FavoritesProvider>
  )
}
