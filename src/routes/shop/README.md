# Shop Application

ショップアプリケーション - Hono API + React + TanStack Routerで構築されたECサイト

## 機能

### フロントエンド
- **商品一覧** (`/shop/products`) - カテゴリフィルタ、価格帯フィルタ、ソート機能
- **商品詳細** (`/shop/products/:id`) - 商品情報表示、カートへの追加
- **ショッピングカート** (`/shop/cart`) - カート内容の表示、数量変更、削除
- **チェックアウト** (`/shop/checkout`) - 配送情報入力、支払い方法選択、注文確定
- **注文履歴** (`/shop/orders`) - ユーザーの注文履歴表示

### バックエンド (Hono API)
- **商品API** - 商品一覧、商品詳細、カテゴリフィルタリング
- **カートAPI** - カート取得、商品追加、数量更新、削除
- **注文API** - 注文作成、注文履歴取得

## 技術スタック

- **フロントエンド**: React, TypeScript, TanStack Router
- **バックエンド**: Hono (API Routes)
- **状態管理**: React Context API (CartContext, FavoritesContext)
- **スタイリング**: Tailwind CSS, shadcn/ui
- **データ永続化**: localStorage (userId), インメモリストレージ (API)

## プロジェクト構造

```
src/routes/shop/
├── -components/          # 共有コンポーネント
│   ├── shop-header.tsx
│   ├── shop-footer.tsx
│   └── shop-product-card.tsx
├── -lib/                 # ユーティリティとロジック
│   ├── cart-context.tsx  # カート状態管理
│   ├── favorites-context.tsx
│   ├── client.ts         # 型安全なHono RPCクライアント
│   └── hono/             # Hono APIルート
│       ├── app.ts        # メインアプリ設定
│       ├── store.ts      # 共有インメモリストア
│       └── routes/       # APIエンドポイント
├── shop.tsx              # レイアウトコンポーネント
├── index.tsx             # ホームページ
├── products.tsx          # 商品一覧
├── products.$product.tsx # 商品詳細
├── cart.tsx              # カート
├── checkout.tsx          # チェックアウト
└── orders.tsx            # 注文履歴
```

## 主要な実装

### CartContext
グローバルなカート状態を管理し、以下の機能を提供:
- ユーザーID生成とlocalStorage永続化
- カートデータのAPI取得
- 商品の追加、削除、数量更新
- カートアイテム数の計算

```typescript
const { cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount } = useCart()
```

### Hono RPC Client
型安全なAPIクライアントで、エンドツーエンドの型推論を実現:

```typescript
const res = await client.shop.api.products.$get()
const products = await res.json() // 型推論される
```

### 共有カートストア
API間でカートデータの一貫性を保つための共有ストレージ:

```typescript
// src/routes/shop/-lib/hono/store.ts
export const carts = new Map<string, Cart>()
```

## API エンドポイント

### 商品
- `GET /shop/api/products` - 商品一覧取得
- `GET /shop/api/products/:id` - 商品詳細取得
- `GET /shop/api/categories` - カテゴリ一覧取得

### カート
- `GET /shop/api/cart/:userId` - カート取得
- `POST /shop/api/cart/:userId/items` - 商品追加
- `PATCH /shop/api/cart/:userId/items` - 数量更新
- `DELETE /shop/api/cart/:userId/items/:productId` - 商品削除
- `DELETE /shop/api/cart/:userId` - カートクリア

### 注文
- `GET /shop/api/orders?userId=:userId` - 注文履歴取得
- `POST /shop/api/orders` - 注文作成

## 開発

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 今後の改善案

- [ ] 商品検索機能
- [ ] ユーザー認証
- [ ] 決済システム統合
- [ ] 商品レビュー機能
- [ ] お気に入り商品の永続化
- [ ] 注文詳細ページ
- [ ] 配送追跡機能
- [ ] データベース統合 (現在はインメモリ)

## ライセンス

MIT
