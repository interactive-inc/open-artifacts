# Open Artifacts

TanStack Start、Hono、React、shadcn/ui で構築したサイト実装例のコレクション。

## 開発

```bash
# セットアップ
vp install

# 開発サーバー
vp dev

# lint / format / test
vp lint
vp fmt
vp test

# 型チェック
vp run check

# ビルド
vp build
```

## 現在のサンプル

- **Shop** - ECサイトのサンプル実装
- **Cafe** - カフェサイトのサンプル
- **Corporate** - コーポレートサイトのサンプル
- **SNS** - ソーシャルサイトのサンプル

## プロジェクト構造

```
src/routes/
├── shop/                 # サンプル: ショップサイト
│   ├── api.$.ts         # /shop/api/* を Hono に転送
│   └── -lib/            # UI・API・サンプルデータ
├── cafe/                # サンプル: カフェサイト
├── corporate/           # サンプル: コーポレートサイト
├── sns/                 # サンプル: SNSサイト
└── api/placeholder/$.ts # 検証済みサイズの SVG プレースホルダー
```

`-`で始まるディレクトリはルーティング対象外。

## API 設計

各サンプルの `api.$.ts` が TanStack Start の server route として全サブパスを受け、`-lib/hono/app.ts` の Hono アプリへ転送します。

```typescript
// src/routes/shop/-lib/hono/app.ts
hono.get("/shop/api/products", ...products.GET)
hono.post("/shop/api/cart", ...cart.POST)
```

## 新しいサンプルの追加

1. `src/routes/`に新規ディレクトリ作成
2. API が必要なら `api.$.ts` で Hono へ転送
3. `-lib/hono/` に API ハンドラーとテストを実装
4. UI は `src/components/ui/` の共通 shadcn/ui コンポーネントを使用
