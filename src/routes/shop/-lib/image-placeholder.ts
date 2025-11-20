/**
 * 商品画像のプレースホルダーユーティリティ
 * AI画像生成のクォータ制限のため、SVGプレースホルダーを使用
 */

// カテゴリごとの色設定
const categoryColors: Record<string, { bg: string; text: string }> = {
  electronics: { bg: "#3b82f6", text: "#ffffff" },
  fashion: { bg: "#ec4899", text: "#ffffff" },
  home: { bg: "#10b981", text: "#ffffff" },
  sports: { bg: "#f59e0b", text: "#ffffff" },
  default: { bg: "#6b7280", text: "#ffffff" },
}

/**
 * カテゴリに基づいたSVGプレースホルダーを生成
 */
export function generateProductPlaceholder(
  category: string,
  productName: string,
  width = 400,
  height = 400,
): string {
  const colors = categoryColors[category] || categoryColors.default
  const initials = productName
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect fill="${colors.bg}" width="${width}" height="${height}"/>
      <text 
        fill="${colors.text}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${width / 8}" 
        font-weight="600"
        x="50%" 
        y="50%" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${initials}
      </text>
      <text 
        fill="${colors.text}" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="${width / 25}" 
        opacity="0.8"
        x="50%" 
        y="${height - 30}" 
        text-anchor="middle"
      >
        ${category}
      </text>
    </svg>
  `.trim()

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/**
 * 商品IDからプレースホルダーを取得
 */
export function getProductPlaceholder(productId: string): string {
  // 商品データマッピング（実際のアプリではAPIから取得）
  const productMap: Record<string, { name: string; category: string }> = {
    "prod-001": { name: "プレミアム ワイヤレスヘッドホン", category: "electronics" },
    "prod-002": { name: "スマートウォッチ Pro", category: "electronics" },
    "prod-003": { name: "オーガニックコットン Tシャツ", category: "fashion" },
    "prod-004": { name: "レザービジネスバッグ", category: "fashion" },
    "prod-005": { name: "アロマディフューザー", category: "home" },
    "prod-006": { name: "セラミックコーヒーカップセット", category: "home" },
    "prod-007": { name: "フィットネスヨガマット", category: "sports" },
    "prod-008": { name: "プロテインシェイカー", category: "sports" },
    "prod-009": { name: "4K ウェブカメラ", category: "electronics" },
    "prod-010": { name: "ワイヤレス充電器", category: "electronics" },
    "prod-011": { name: "デニムジャケット", category: "fashion" },
    "prod-012": { name: "スニーカー エアマックス", category: "fashion" },
  }

  const product = productMap[productId]
  if (!product) {
    return generateProductPlaceholder("default", "Product", 400, 400)
  }

  return generateProductPlaceholder(product.category, product.name, 400, 400)
}

/**
 * 汎用プレースホルダー（画像が見つからない場合）
 */
export function getDefaultPlaceholder(width = 400, height = 400): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect fill="#e5e7eb" width="${width}" height="${height}"/>
      <g transform="translate(${width / 2}, ${height / 2})">
        <path 
          fill="#9ca3af" 
          d="M-40-40h80v80h-80z M-30-30v60h60v-60z M-20-10h40v20h-40z M-10 0l10-10 10 10-10 10z"
        />
      </g>
      <text 
        fill="#6b7280" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="16" 
        x="50%" 
        y="${height - 20}" 
        text-anchor="middle"
      >
        No Image Available
      </text>
    </svg>
  `.trim()

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
