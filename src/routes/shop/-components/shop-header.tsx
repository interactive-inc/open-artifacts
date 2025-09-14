import { Link } from "@tanstack/react-router"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function ShopHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-center">
        <div className="flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link to="/shop" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">SHOP</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/shop/products"
                      className="px-4 py-2 font-medium text-sm transition-colors hover:text-primary"
                    >
                      すべての商品
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/shop/category/$category"
                      params={{ category: "electronics" }}
                      className="px-4 py-2 font-medium text-sm transition-colors hover:text-primary"
                    >
                      エレクトロニクス
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/shop/category/$category"
                      params={{ category: "fashion" }}
                      className="px-4 py-2 font-medium text-sm transition-colors hover:text-primary"
                    >
                      ファッション
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/shop/category/$category"
                      params={{ category: "home" }}
                      className="px-4 py-2 font-medium text-sm transition-colors hover:text-primary"
                    >
                      ホーム＆リビング
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/shop/category/$category"
                      params={{ category: "sports" }}
                      className="px-4 py-2 font-medium text-sm transition-colors hover:text-primary"
                    >
                      スポーツ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:flex">
              <Input
                type="search"
                placeholder="商品を検索..."
                className="w-[200px] lg:w-[300px]"
              />
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <Button size="icon" variant="ghost">
              <User className="h-5 w-5" />
            </Button>

            <Link to="/shop/cart">
              <Button size="icon" variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="-top-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary font-medium text-[10px] text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>

            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
