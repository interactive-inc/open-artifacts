---
applyTo: "**/*"
---

# Overview

学習用ECサイトアプリケーション。見た目は本格的に作り込みつつ、在庫管理や決済などの機能はモックで実装。HonoによるAPIサーバーとReactフロントエンドの構成で、データはJSONファイルで管理。

## Directory Structure

- `src/` - Main application source code
  - `components/` - React components
    - `ui/` - shadcn/ui component library (buttons, forms, dialogs, etc.)
  - `hooks/` - React hooks for state management
  - `lib/` - Core libraries and utilities
    - `system/` - Hono backend server
    - `routes/` - API endpoints
  - `routes/` - Page components and routes with TanStack Router
  - `contexts/` - React context for state management
- `data/` - JSON data files for products, users, orders
- `public/` - Static assets

## Technical Features

- TanStack Router for type-safe routing with SSR
- React 19 with TypeScript
- Hono for backend API server
- shadcn/ui component system
- Tailwind CSS v4 for styling
- Vite for build tooling
- Bun for package management and testing
- Biome for linting and formatting
- JSON-based data persistence

## Decoupled Design

フロントエンドとバックエンドを明確に分離。Honoで構築したAPIサーバーがJSONファイルからデータを読み込み、RESTful APIとして提供。フロントエンドはAPIを通じてデータを取得し、SSRで初期表示を高速化。

## Core Location

- **API Server**: `src/lib/system/` - Honoベースのバックエンドサーバー
- **API Routes**: `src/lib/routes/` - 各種APIエンドポイント定義
- **Pages**: `src/routes/` - TanStack Routerによるページコンポーネント
- **State Management**: `src/contexts/` - グローバル状態管理
- **Data Storage**: `data/` - 商品、ユーザー、注文等のJSONデータ

## System Independence

- **Frontend**: React + TanStack Router - UIの表示とユーザーインタラクション
- **Backend API**: Hono - データ提供とビジネスロジック（モック）
- **Data Layer**: JSON files - シンプルなデータ永続化
- **SSR**: TanStack Start - サーバーサイドレンダリング
