import { createFileRoute } from "@tanstack/react-router"
import {
  Cake,
  Coffee,
  Flame,
  Leaf,
  Sandwich,
  Snowflake,
  Star,
} from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/cafe/menu")({
  component: MenuPage,
})

/**
 * Menu Page
 */
function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const menuCategories = [
    { id: "all", label: "すべて", icon: Coffee },
    { id: "coffee", label: "コーヒー", icon: Coffee },
    { id: "specialty", label: "スペシャルティ", icon: Star },
    { id: "food", label: "フード", icon: Sandwich },
    { id: "sweets", label: "スイーツ", icon: Cake },
  ]

  const menuItems = {
    coffee: [
      {
        name: "エスプレッソ",
        nameEn: "Espresso",
        description: "深いコクと芳醇な香り",
        price: { hot: "¥380", ice: null },
        tags: ["定番"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "アメリカーノ",
        nameEn: "Americano",
        description: "すっきりとした後味",
        price: { hot: "¥420", ice: "¥450" },
        tags: ["定番"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "カフェラテ",
        nameEn: "Cafe Latte",
        description: "なめらかなミルクとエスプレッソ",
        price: { hot: "¥480", ice: "¥500" },
        tags: ["人気No.1"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "カプチーノ",
        nameEn: "Cappuccino",
        description: "ふわふわのフォームミルク",
        price: { hot: "¥480", ice: null },
        tags: [],
        image: "/api/placeholder/300/200",
      },
      {
        name: "フラットホワイト",
        nameEn: "Flat White",
        description: "濃厚なエスプレッソとミルク",
        price: { hot: "¥500", ice: null },
        tags: [],
        image: "/api/placeholder/300/200",
      },
      {
        name: "マキアート",
        nameEn: "Macchiato",
        description: "エスプレッソに少量のミルク",
        price: { hot: "¥420", ice: "¥450" },
        tags: [],
        image: "/api/placeholder/300/200",
      },
    ],
    specialty: [
      {
        name: "シングルオリジン エチオピア",
        nameEn: "Single Origin - Ethiopia",
        description: "フルーティーで華やかな酸味、ベリー系の風味",
        price: { hot: "¥580", ice: "¥600" },
        tags: ["限定", "浅煎り"],
        origin: "エチオピア イルガチェフェ",
        altitude: "1,900-2,100m",
        process: "ウォッシュド",
        image: "/api/placeholder/300/200",
      },
      {
        name: "シングルオリジン コロンビア",
        nameEn: "Single Origin - Colombia",
        description: "バランスの良い酸味と甘み、チョコレートのような後味",
        price: { hot: "¥580", ice: "¥600" },
        tags: ["限定", "中煎り"],
        origin: "コロンビア ウィラ",
        altitude: "1,600-1,900m",
        process: "ウォッシュド",
        image: "/api/placeholder/300/200",
      },
      {
        name: "シングルオリジン ブラジル",
        nameEn: "Single Origin - Brazil",
        description: "ナッツやキャラメルの甘み、まろやかな口当たり",
        price: { hot: "¥580", ice: "¥600" },
        tags: ["限定", "中深煎り"],
        origin: "ブラジル セラード",
        altitude: "1,100-1,300m",
        process: "パルプドナチュラル",
        image: "/api/placeholder/300/200",
      },
      {
        name: "季節のブレンド - Spring",
        nameEn: "Seasonal Blend - Spring",
        description: "春らしい華やかさと優しい甘み",
        price: { hot: "¥520", ice: "¥540" },
        tags: ["季節限定", "NEW"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "デカフェ コロンビア",
        nameEn: "Decaf Colombia",
        description: "カフェインレスでも豊かな味わい",
        price: { hot: "¥500", ice: "¥520" },
        tags: ["デカフェ"],
        image: "/api/placeholder/300/200",
      },
    ],
    food: [
      {
        name: "クロックムッシュ",
        nameEn: "Croque Monsieur",
        description: "ハムとチーズのホットサンド、ベシャメルソース",
        price: { single: "¥880" },
        tags: ["人気"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "アボカドトースト",
        nameEn: "Avocado Toast",
        description: "全粒粉パンに新鮮なアボカドとポーチドエッグ",
        price: { single: "¥920" },
        tags: ["ヘルシー"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "BLTサンドイッチ",
        nameEn: "BLT Sandwich",
        description: "ベーコン、レタス、トマトの定番サンド",
        price: { single: "¥780" },
        tags: [],
        image: "/api/placeholder/300/200",
      },
      {
        name: "季節のキッシュ",
        nameEn: "Seasonal Quiche",
        description: "日替わりの具材を使った自家製キッシュ",
        price: { single: "¥680" },
        tags: ["日替わり"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "グラノーラボウル",
        nameEn: "Granola Bowl",
        description: "ヨーグルト、季節のフルーツ、自家製グラノーラ",
        price: { single: "¥720" },
        tags: ["朝食", "ヘルシー"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "本日のスープ",
        nameEn: "Soup of the Day",
        description: "季節の野菜を使った日替わりスープ",
        price: { single: "¥520" },
        tags: ["日替わり"],
        image: "/api/placeholder/300/200",
      },
    ],
    sweets: [
      {
        name: "NYチーズケーキ",
        nameEn: "NY Cheesecake",
        description: "濃厚でクリーミーなチーズケーキ",
        price: { single: "¥580" },
        tags: ["人気No.1"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "ガトーショコラ",
        nameEn: "Gateau Chocolat",
        description: "しっとり濃厚なチョコレートケーキ",
        price: { single: "¥620" },
        tags: [],
        image: "/api/placeholder/300/200",
      },
      {
        name: "季節のタルト",
        nameEn: "Seasonal Tart",
        description: "旬のフルーツを使ったタルト",
        price: { single: "¥650" },
        tags: ["季節限定"],
        image: "/api/placeholder/300/200",
      },
      {
        name: "ティラミス",
        nameEn: "Tiramisu",
        description: "マスカルポーネとエスプレッソの絶妙なハーモニー",
        price: { single: "¥580" },
        tags: [],
        image: "/api/placeholder/300/200",
      },
      {
        name: "スコーン（2個）",
        nameEn: "Scones",
        description: "ジャムとクロテッドクリーム付き",
        price: { single: "¥480" },
        tags: [],
        image: "/api/placeholder/300/200",
      },
      {
        name: "本日のマフィン",
        nameEn: "Today's Muffin",
        description: "日替わりの自家製マフィン",
        price: { single: "¥420" },
        tags: ["日替わり"],
        image: "/api/placeholder/300/200",
      },
    ],
  }

  const allItems = [
    ...menuItems.coffee.map((item) => ({ ...item, category: "coffee" })),
    ...menuItems.specialty.map((item) => ({ ...item, category: "specialty" })),
    ...menuItems.food.map((item) => ({ ...item, category: "food" })),
    ...menuItems.sweets.map((item) => ({ ...item, category: "sweets" })),
  ]

  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[400px] bg-stone-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-center bg-cover opacity-40" />
        <div className="relative flex h-full items-center justify-center text-white">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl md:text-6xl">Menu</h1>
            <p className="text-white/80 text-xl">こだわりのコーヒーと食事</p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-40 border-b bg-white">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {menuCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={cn(
                    "flex items-center gap-2 whitespace-nowrap",
                    selectedCategory === category.id
                      ? "bg-amber-600 text-white hover:bg-amber-700"
                      : "border-amber-200 hover:bg-amber-50",
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container">
          {selectedCategory === "all" ? (
            <div className="space-y-16">
              {/* Coffee Section */}
              <div>
                <div className="mb-8 text-center">
                  <h2 className="mb-2 font-serif text-3xl text-stone-800">
                    Coffee
                  </h2>
                  <p className="text-stone-600">定番のコーヒーメニュー</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {menuItems.coffee.map((item) => (
                    <MenuCard key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Specialty Section */}
              <div>
                <div className="mb-8 text-center">
                  <h2 className="mb-2 font-serif text-3xl text-stone-800">
                    Specialty Coffee
                  </h2>
                  <p className="text-stone-600">
                    こだわりのスペシャルティコーヒー
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {menuItems.specialty.map((item) => (
                    <MenuCard key={item.name} item={item} showOrigin />
                  ))}
                </div>
              </div>

              {/* Food Section */}
              <div>
                <div className="mb-8 text-center">
                  <h2 className="mb-2 font-serif text-3xl text-stone-800">
                    Food
                  </h2>
                  <p className="text-stone-600">軽食・お食事メニュー</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {menuItems.food.map((item) => (
                    <MenuCard key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Sweets Section */}
              <div>
                <div className="mb-8 text-center">
                  <h2 className="mb-2 font-serif text-3xl text-stone-800">
                    Sweets
                  </h2>
                  <p className="text-stone-600">自家製スイーツ</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {menuItems.sweets.map((item) => (
                    <MenuCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.name}
                  item={item}
                  showOrigin={item.category === "specialty"}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Allergen Info */}
      <section className="bg-stone-50 py-12">
        <div className="container">
          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-8">
              <h3 className="mb-4 font-serif text-2xl text-stone-800">
                アレルギー情報
              </h3>
              <p className="mb-6 text-stone-600">
                アレルギーをお持ちのお客様は、スタッフまでお気軽にお声がけください。
                可能な限り対応させていただきます。
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium">主なアレルゲン表示</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">小麦</Badge>
                    <Badge variant="outline">卵</Badge>
                    <Badge variant="outline">乳</Badge>
                    <Badge variant="outline">そば</Badge>
                    <Badge variant="outline">落花生</Badge>
                    <Badge variant="outline">えび</Badge>
                    <Badge variant="outline">かに</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">対応可能なオプション</h4>
                  <ul className="space-y-1 text-sm text-stone-600">
                    <li className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      ソイミルク・オーツミルクへの変更
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      デカフェコーヒー
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      グルテンフリーオプション（一部メニュー）
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function MenuCard({
  item,
  showOrigin = false,
}: {
  item: any
  showOrigin?: boolean
}) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          {item.tags && item.tags.length > 0 && (
            <div className="mb-2 flex gap-2">
              {item.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant={
                    tag === "人気No.1" || tag === "NEW"
                      ? "default"
                      : "secondary"
                  }
                  className={cn(
                    tag === "人気No.1" && "bg-amber-600",
                    tag === "NEW" && "bg-red-500",
                    tag === "季節限定" && "bg-green-600 text-white",
                    tag === "限定" && "bg-purple-600 text-white",
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <h3 className="font-medium text-lg">{item.name}</h3>
          <p className="text-sm text-stone-500">{item.nameEn}</p>
        </div>
        <p className="mb-3 text-sm text-stone-600">{item.description}</p>

        {showOrigin && item.origin && (
          <div className="mb-3 space-y-1 border-t pt-3 text-stone-500 text-xs">
            {item.origin && <p>産地: {item.origin}</p>}
            {item.altitude && <p>標高: {item.altitude}</p>}
            {item.process && <p>精製: {item.process}</p>}
          </div>
        )}

        <div className="flex items-end justify-between">
          {item.price.hot && item.price.ice ? (
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Flame className="h-3 w-3 text-red-500" />
                <span className="font-bold">{item.price.hot}</span>
              </div>
              <div className="flex items-center gap-1">
                <Snowflake className="h-3 w-3 text-blue-500" />
                <span className="font-bold">{item.price.ice}</span>
              </div>
            </div>
          ) : (
            <span className="font-bold text-amber-600">
              {item.price.hot || item.price.single}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
