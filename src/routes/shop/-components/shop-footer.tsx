import { Link } from "@tanstack/react-router"

export function ShopFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-lg">SHOP</h3>
              <p className="text-muted-foreground text-sm">
                最高品質の商品を最高の価格でお届けします。
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-sm">ショッピング</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/shop/products"
                    className="text-muted-foreground hover:text-primary"
                  >
                    すべての商品
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/category/$category"
                    params={{ category: "electronics" }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    エレクトロニクス
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/category/$category"
                    params={{ category: "fashion" }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    ファッション
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/category/$category"
                    params={{ category: "home" }}
                    className="text-muted-foreground hover:text-primary"
                  >
                    ホーム＆リビング
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-sm">カスタマーサービス</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/shop/orders"
                    className="text-muted-foreground hover:text-primary"
                  >
                    注文履歴
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    配送について
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    返品・交換
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    お問い合わせ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-sm">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    会社概要
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    採用情報
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    プライバシーポリシー
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left text-muted-foreground hover:text-primary"
                    disabled
                  >
                    利用規約
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 SHOP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
