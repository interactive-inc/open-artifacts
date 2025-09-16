import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Heart,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/cafe/")({
  component: CafeHomePage,
})

/**
 * Cafe Home Page
 */
function CafeHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const heroSlides = [
    {
      image: "/api/placeholder/1920/800",
      title: "一杯のコーヒーから\n始まる物語",
      subtitle: "厳選された豆と、こだわりの焙煎",
      cta: "メニューを見る",
      link: "/cafe/menu",
    },
    {
      image: "/api/placeholder/1920/800",
      title: "朝の一杯が\n今日を変える",
      subtitle: "7:00から営業中",
      cta: "店舗情報",
      link: "/cafe/shop",
    },
    {
      image: "/api/placeholder/1920/800",
      title: "季節限定\nサマーブレンド",
      subtitle: "爽やかな酸味と華やかな香り",
      cta: "詳しく見る",
      link: "/cafe/menu",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    )
  }

  const features = [
    {
      icon: Coffee,
      title: "自家焙煎",
      description: "毎朝焙煎する新鮮な豆",
    },
    {
      icon: Leaf,
      title: "オーガニック",
      description: "環境に優しい有機栽培豆",
    },
    {
      icon: Award,
      title: "受賞歴",
      description: "バリスタチャンピオン在籍",
    },
    {
      icon: Heart,
      title: "地域密着",
      description: "コミュニティの憩いの場",
    },
  ]

  const menuHighlights = [
    {
      name: "エスプレッソ",
      description: "深いコクと芳醇な香り",
      price: "¥380",
      image: "/api/placeholder/400/300",
      badge: "定番",
    },
    {
      name: "カフェラテ",
      description: "なめらかなミルクとエスプレッソ",
      price: "¥480",
      image: "/api/placeholder/400/300",
      badge: "人気No.1",
    },
    {
      name: "シングルオリジン",
      description: "月替わりの特別な一杯",
      price: "¥580",
      image: "/api/placeholder/400/300",
      badge: "限定",
    },
    {
      name: "アイスコーヒー",
      description: "すっきりとした後味",
      price: "¥420",
      image: "/api/placeholder/400/300",
      badge: "夏季限定",
    },
  ]

  const news = [
    {
      date: "2024.03.15",
      category: "新メニュー",
      title: "春のスペシャルブレンド登場",
      description:
        "桜の季節にぴったりな、華やかな香りのブレンドコーヒーが期間限定で登場。",
    },
    {
      date: "2024.03.10",
      category: "イベント",
      title: "コーヒーテイスティングワークショップ開催",
      description: "プロのバリスタが教える、コーヒーの楽しみ方。初心者歓迎。",
    },
    {
      date: "2024.03.05",
      category: "お知らせ",
      title: "営業時間変更のお知らせ",
      description: "4月より、平日の営業時間を22:00まで延長いたします。",
    },
  ]

  const testimonials = [
    {
      name: "田中 美咲",
      role: "常連のお客様",
      comment:
        "毎朝ここのコーヒーから一日が始まります。スタッフの方も親切で、居心地の良い空間です。",
      rating: 5,
    },
    {
      name: "佐藤 健一",
      role: "フリーランス",
      comment:
        "仕事場として利用させていただいています。WiFiも完備で、集中できる環境が整っています。",
      rating: 5,
    },
    {
      name: "山田 花子",
      role: "近隣住民",
      comment:
        "お友達との待ち合わせにぴったり。ケーキも美味しくて、つい長居してしまいます。",
      rating: 5,
    },
  ]

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0",
              )}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
            </div>
          ))}
        </div>

        <div className="relative flex h-full items-center justify-center text-center text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-6">
              <h1 className="animate-fade-in whitespace-pre-line font-serif text-5xl leading-tight md:text-7xl">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="font-light text-white/90 text-xl md:text-2xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <Button
                size="lg"
                className="mt-8 bg-amber-600 text-white hover:bg-amber-700"
                asChild
              >
                <Link to={heroSlides[currentSlide].link}>
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="-translate-y-1/2 absolute top-1/2 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
          aria-label="前のスライド"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="-translate-y-1/2 absolute top-1/2 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
          aria-label="次のスライド"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="-translate-x-1/2 absolute bottom-8 left-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentSlide(index)
              }}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === currentSlide
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/70",
              )}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="group text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 transition-colors group-hover:bg-amber-100">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="mb-2 font-medium text-lg">{feature.title}</h3>
                  <p className="text-sm text-stone-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="bg-stone-50 py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <span className="font-medium text-amber-600 text-sm tracking-wider">
                  CONCEPT
                </span>
                <h2 className="mt-2 font-serif text-4xl text-stone-800">
                  日常に、特別な一杯を
                </h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Artisan Coffee &
                Roasteryは、世界中から厳選した最高品質のコーヒー豆を、
                熟練の焙煎士が丁寧に焙煎し、バリスタが一杯一杯心を込めて淹れています。
              </p>
              <p className="text-stone-600 leading-relaxed">
                忙しい日常の中で、ほっと一息つける場所。
                友人との楽しい会話、一人の静かな読書時間、仕事の合間のリフレッシュ。
                それぞれの時間を、特別な一杯とともに。
              </p>
              <Button
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
                asChild
              >
                <Link to="/cafe/concept">
                  コンセプトを詳しく見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="コーヒーを淹れるバリスタ"
                className="rounded-lg shadow-xl"
              />
              <div className="-bottom-6 -left-6 absolute max-w-xs rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-600" />
                  <span className="font-medium">こだわりの焙煎</span>
                </div>
                <p className="text-sm text-stone-600">
                  豆の個性を最大限に引き出す、オーダーメイド焙煎
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="font-medium text-amber-600 text-sm tracking-wider">
              MENU
            </span>
            <h2 className="mt-2 font-serif text-4xl text-stone-800">
              人気のメニュー
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {menuHighlights.map((item) => (
              <Card
                key={item.name}
                className="group overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-amber-600 px-3 py-1 text-white text-xs">
                      {item.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <span className="font-bold text-amber-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              className="bg-amber-600 text-white hover:bg-amber-700"
              asChild
            >
              <Link to="/cafe/menu">
                全メニューを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-stone-50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="font-medium text-amber-600 text-sm tracking-wider">
              NEWS
            </span>
            <h2 className="mt-2 font-serif text-4xl text-stone-800">
              お知らせ
            </h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-stone-500">{item.date}</span>
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700 text-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-medium">{item.title}</h3>
                      <p className="text-sm text-stone-600">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-stone-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
              asChild
            >
              <Link to="/cafe/news">
                すべてのお知らせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="font-medium text-amber-600 text-sm tracking-wider">
              VOICE
            </span>
            <h2 className="mt-2 font-serif text-4xl text-stone-800">
              お客様の声
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none bg-stone-50">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-amber-200" />
                  <p className="mb-6 text-sm text-stone-600 leading-relaxed">
                    {testimonial.comment}
                  </p>
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-stone-300",
                        )}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-stone-500 text-xs">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Info */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="店内の様子"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="font-medium text-amber-600 text-sm tracking-wider">
                  SHOP INFO
                </span>
                <h2 className="mt-2 font-serif text-4xl text-stone-800">
                  店舗情報
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p className="mb-1 font-medium">住所</p>
                    <p className="text-sm text-stone-600">
                      〒150-0001
                      <br />
                      東京都渋谷区神宮前3-15-8 アーティザンビル 1F
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p className="mb-1 font-medium">営業時間</p>
                    <p className="text-sm text-stone-600">
                      月-金: 7:00 - 21:00
                      <br />
                      土日祝: 8:00 - 20:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p className="mb-1 font-medium">席数</p>
                    <p className="text-sm text-stone-600">
                      店内 32席 / テラス 8席
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  className="bg-amber-600 text-white hover:bg-amber-700"
                  asChild
                >
                  <Link to="/cafe/shop">
                    詳しい店舗情報
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  asChild
                >
                  <Link to="/cafe/reservation">
                    <Calendar className="mr-2 h-4 w-4" />
                    予約する
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-20 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-4xl">特別な一杯を、あなたに</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-300">
            新規会員登録で、初回ドリンク20%OFF
          </p>
          <Button
            size="lg"
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            会員登録する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
