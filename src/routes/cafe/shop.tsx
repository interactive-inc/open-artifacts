import { createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  Baby,
  Calendar,
  Car,
  Cigarette,
  Clock,
  CreditCard,
  Dog,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Train,
  Users,
  Wifi,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const Route = createFileRoute("/cafe/shop")({
  component: ShopPage,
})

/**
 * Shop Page
 */
function ShopPage() {
  const facilities = [
    { icon: Wifi, label: "Free Wi-Fi", available: true },
    { icon: CreditCard, label: "カード決済", available: true },
    { icon: Baby, label: "ベビーチェア", available: true },
    { icon: Users, label: "団体予約可", available: true },
    { icon: Dog, label: "ペット可（テラスのみ）", available: true },
    { icon: Cigarette, label: "全席禁煙", available: true },
  ]

  const businessHours = [
    { day: "月曜日", hours: "7:00 - 21:00", isToday: false },
    { day: "火曜日", hours: "7:00 - 21:00", isToday: false },
    { day: "水曜日", hours: "7:00 - 21:00", isToday: true },
    { day: "木曜日", hours: "7:00 - 21:00", isToday: false },
    { day: "金曜日", hours: "7:00 - 21:00", isToday: false },
    { day: "土曜日", hours: "8:00 - 20:00", isToday: false },
    { day: "日曜日", hours: "8:00 - 20:00", isToday: false },
    { day: "祝日", hours: "8:00 - 20:00", isToday: false },
  ]

  const access = [
    {
      type: "電車",
      icon: Train,
      routes: [
        "JR山手線「原宿駅」東口より徒歩5分",
        "東京メトロ千代田線「明治神宮前駅」3番出口より徒歩3分",
        "東京メトロ副都心線「明治神宮前駅」7番出口より徒歩4分",
      ],
    },
    {
      type: "バス",
      icon: Train,
      routes: ["都営バス「神宮前」バス停より徒歩2分"],
    },
    {
      type: "お車",
      icon: Car,
      routes: [
        "明治通り沿い、神宮前交差点より1分",
        "提携駐車場あり（2時間まで無料）",
      ],
    },
  ]

  const images = [
    {
      src: "/api/placeholder/600/400",
      alt: "店内の様子",
      caption: "落ち着いた雰囲気の店内",
    },
    {
      src: "/api/placeholder/600/400",
      alt: "カウンター席",
      caption: "バリスタとの会話も楽しめるカウンター",
    },
    {
      src: "/api/placeholder/600/400",
      alt: "テラス席",
      caption: "開放的なテラス席",
    },
    {
      src: "/api/placeholder/600/400",
      alt: "焙煎機",
      caption: "こだわりの焙煎機",
    },
    {
      src: "/api/placeholder/600/400",
      alt: "コーヒー豆",
      caption: "世界各地から厳選した豆",
    },
    {
      src: "/api/placeholder/600/400",
      alt: "ラテアート",
      caption: "美しいラテアート",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] bg-stone-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-center bg-cover opacity-40" />
        <div className="relative flex h-full items-center justify-center text-white">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl md:text-6xl">Shop Info</h1>
            <p className="text-white/80 text-xl">店舗情報・アクセス</p>
          </div>
        </div>
      </section>

      {/* Basic Info */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="mb-6 font-serif text-2xl text-stone-800">
                      Artisan Coffee & Roastery
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                        <div>
                          <p className="mb-1 font-medium">住所</p>
                          <p className="text-sm text-stone-600">
                            〒150-0001
                            <br />
                            東京都渋谷区神宮前3-15-8
                            <br />
                            アーティザンビル 1F
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                        <div>
                          <p className="mb-1 font-medium">電話番号</p>
                          <p className="text-sm text-stone-600">03-1234-5678</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                        <div>
                          <p className="mb-1 font-medium">メール</p>
                          <p className="text-sm text-stone-600">
                            info@artisan-coffee.jp
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                        <div>
                          <p className="mb-1 font-medium">席数</p>
                          <p className="text-sm text-stone-600">
                            店内: 32席（カウンター8席、テーブル24席）
                            <br />
                            テラス: 8席
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 flex items-center gap-2 font-medium text-lg">
                      <Clock className="h-5 w-5 text-amber-600" />
                      営業時間
                    </h3>
                    <div className="space-y-2">
                      {businessHours.map((item) => (
                        <div
                          key={item.day}
                          className={`flex items-center justify-between rounded px-3 py-2 ${
                            item.isToday
                              ? "border border-amber-200 bg-amber-50"
                              : ""
                          }`}
                        >
                          <span
                            className={`text-sm ${item.isToday ? "font-medium" : ""}`}
                          >
                            {item.day}
                            {item.isToday && (
                              <Badge className="ml-2 bg-amber-600">本日</Badge>
                            )}
                          </span>
                          <span className="text-sm text-stone-600">
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-stone-500 text-xs">
                      ※ラストオーダーは閉店30分前
                      <br />
                      ※年末年始は営業時間が変更になる場合があります
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="bg-stone-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-serif text-3xl text-stone-800">
              アクセス
            </h2>
            <p className="text-stone-600">各線からのアクセス方法</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {access.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.type}>
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-amber-600" />
                        <h3 className="font-medium">{item.type}</h3>
                      </div>
                      <ul className="space-y-2">
                        {item.routes.map((route, index) => (
                          <li key={index} className="text-sm text-stone-600">
                            • {route}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Map */}
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/9] bg-stone-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-amber-600" />
                    <p className="text-stone-600">地図を表示</p>
                    <Button
                      className="mt-4 bg-amber-600 text-white hover:bg-amber-700"
                      onClick={() =>
                        window.open("https://maps.google.com", "_blank")
                      }
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Google Maps で開く
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-serif text-3xl text-stone-800">
              設備・サービス
            </h2>
            <p className="text-stone-600">快適にお過ごしいただくための設備</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {facilities.map((facility) => {
                const Icon = facility.icon
                return (
                  <div
                    key={facility.label}
                    className="flex items-center gap-3 rounded-lg bg-stone-50 p-4"
                  >
                    <Icon
                      className={`h-6 w-6 ${facility.available ? "text-amber-600" : "text-stone-400"}`}
                    />
                    <span
                      className={`text-sm ${facility.available ? "" : "text-stone-400 line-through"}`}
                    >
                      {facility.label}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="mt-8 rounded-lg bg-amber-50 p-6">
              <h3 className="mb-3 font-medium text-amber-800">
                その他のサービス
              </h3>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• テイクアウト可能</li>
                <li>• 電源席あり（カウンター席）</li>
                <li>• 車椅子対応</li>
                <li>• 多目的トイレ完備</li>
                <li>• 英語メニューあり</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-stone-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-serif text-3xl text-stone-800">
              店内の様子
            </h2>
            <p className="text-stone-600">
              落ち着いた空間で、ゆったりとした時間を
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute right-0 bottom-0 left-0 p-4">
                      <p className="text-sm text-white">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl">ご予約・お問い合わせ</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            団体でのご利用や、イベントの開催なども承っております。
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-stone-50"
              asChild
            >
              <a href="tel:03-1234-5678">
                <Phone className="mr-2 h-5 w-5" />
                電話で予約
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Calendar className="mr-2 h-5 w-5" />
              オンライン予約
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
