# Open Artifacts

ClaudeCodeを用いたサイト制作の学習用リポジトリ。ClaudeCodeで自由にサイトを作成し、実装例として残すことで参考資料にもなります。

## 開発

```bash
# セットアップ
bun install

# 開発サーバー
bun dev

# 型チェック
bun run check

# ビルド
bun run build
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
│   ├── api.ts           # APIエントリーポイント
│   ├── -lib/            # ライブラリ（ルーティング対象外）
│   └── -data/           # データ（ルーティング対象外）
├── cafe/                # サンプル: カフェサイト
├── corporate/           # サンプル: コーポレートサイト
└── sns/                 # サンプル: SNSサイト
```

`-`で始まるディレクトリはルーティング対象外。

## API設計

ファイル名 = パス、エクスポート名 = HTTPメソッド

```typescript
// products.ts → /products
export const GET = factory.createHandlers((c) => { ... })

// products.$id.ts → /products/:id
export const GET = factory.createHandlers((c) => { ... })
export const DELETE = factory.createHandlers((c) => { ... })
```

## 新しいサンプルの追加

1. `src/routes/`に新規ディレクトリ作成
2. `api.ts`でAPIエントリーポイント定義
3. `-lib/hono/`にAPIハンドラー実装
4. 必要に応じて`-data/`にサンプルデータ配置
