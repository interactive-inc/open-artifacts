import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Coffee, Gift, Clock, Users, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/cafe/news")({
  component: NewsPage,
})

/**
 * News Page
 */
function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const newsItems = [
    {
      id: 1,
      date: "2024.03.25",
      category: "新メニュー",
      title: "春の限定ブレンド「桜花 -SAKURA-」登場",
      summary: "桜の季節にぴったりな、華やかで優しい味わいのブレンドコーヒーが期間限定で登場します。",
      content: "日本の春を感じる特別なブレンドコーヒー「桜花 -SAKURA-」を3月25日より期間限定で販売いたします。エチオピアとコロンビアの豆をベースに、桜餅を思わせる優しい甘みと華やかな香りが特徴です。",
      image: "/api/placeholder/800/400",
      featured: true
    },
    {
      id: 2,
      date: "2024.03.20",
      category: "イベント",
      title: "4月のコーヒーテイスティングワークショップ開催",
      summary: "プロのバリスタが教える、コーヒーの楽しみ方を学ぶワークショップを開催します。",
      content: "毎月好評をいただいているテイスティングワークショップを4月も開催いたします。今回のテーマは「シングルオリジンの楽しみ方」。産地による味の違いを体験していただきます。",
      details: {
        date: "2024年4月13日（土）",
        time: "14:00 - 16:00",
        capacity: "8名様",
        fee: "¥3,500（コーヒー3種とお菓子付き）"
      }
    },
    {
      id: 3,
      date: "2024.03.15",
      category: "お知らせ",
      title: "営業時間変更のお知らせ",
      summary: "4月1日より平日の営業時間を22:00まで延長いたします。",
      content: "お客様のご要望にお応えして、4月1日より平日の営業時間を1時間延長し、22:00までとさせていただきます。お仕事帰りにもゆっくりとコーヒーをお楽しみください。"
    },
    {
      id: 4,
      date: "2024.03.10",
      category: "新メニュー",
      title: "季節のスイーツ「いちごのタルト」販売開始",
      summary: "旬のいちごをたっぷり使用した春限定のタルトが登場しました。",
      content: "厳選されたいちごを贅沢に使用した「いちごのタルト」の販売を開始しました。サクサクのタルト生地に、カスタードクリームと新鮮ないちごの組み合わせをお楽しみください。",
      image: "/api/placeholder/800/400"
    },
    {
      id: 5,
      date: "2024.03.05",
      category: "キャンペーン",
      title: "春の新生活応援キャンペーン",
      summary: "3月25日〜4月30日の期間中、学生証提示でドリンク全品20%OFF",
      content: "新生活を始める学生の皆様を応援するキャンペーンを実施します。期間中、学生証のご提示でドリンク全品を20%割引でご提供いたします。"
    },
    {
      id: 6,
      date: "2024.02.28",
      category: "お知らせ",
      title: "Wi-Fi環境をアップグレードしました",
      summary: "より快適にお過ごしいただけるよう、Wi-Fi環境を強化しました。",
      content: "店内のWi-Fi環境を最新の高速通信規格に対応させました。お仕事や勉強により集中できる環境をご提供いたします。"
    },
    {
      id: 7,
      date: "2024.02.20",
      category: "イベント",
      title: "ラテアート体験会を開催しました",
      summary: "2月18日にラテアート体験会を開催し、多くのお客様にご参加いただきました。",
      content: "バリスタチャンピオンによるラテアート体験会を開催しました。参加者の皆様には、基本的なハートの描き方から応用まで、楽しく学んでいただきました。",
      image: "/api/placeholder/800/400"
    },
    {
      id: 8,
      date: "2024.02.15",
      category: "新メニュー",
      title: "デカフェメニューを拡充しました",
      summary: "カフェインを控えたい方にも楽しんでいただけるよう、デカフェメニューを充実させました。",
      content: "妊娠中の方や、夜にもコーヒーを楽しみたい方のために、デカフェメニューを拡充しました。コロンビア産の高品質なデカフェ豆を使用し、通常のコーヒーと変わらない味わいをお楽しみいただけます。"
    }
  ]

  const upcomingEvents = [
    {
      date: "2024.04.06",
      title: "朝ヨガ&モーニングコーヒー",
      time: "7:00 - 8:30",
      description: "心地よい朝のヨガの後は、特別なモーニングコーヒーを"
    },
    {
      date: "2024.04.13",
      title: "コーヒーテイスティングワークショップ",
      time: "14:00 - 16:00",
      description: "シングルオリジンの楽しみ方を学ぶ"
    },
    {
      date: "2024.04.20",
      title: "ジャズナイト",
      time: "19:00 - 21:00",
      description: "生演奏のジャズとともに過ごす特別な夜"
    },
    {
      date: "2024.04.27",
      title: "親子バリスタ体験",
      time: "10:00 - 12:00",
      description: "お子様と一緒にコーヒーの世界を体験"
    }
  ]

  const categories = [
    { value: "all", label: "すべて" },
    { value: "新メニュー", label: "新メニュー" },
    { value: "イベント", label: "イベント" },
    { value: "お知らせ", label: "お知らせ" },
    { value: "キャンペーン", label: "キャンペーン" }
  ]

  const filteredNews = selectedCategory === "all"
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "新メニュー":
        return Coffee
      case "イベント":
        return Calendar
      case "キャンペーン":
        return Gift
      default:
        return Sparkles
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "新メニュー":
        return "bg-amber-100 text-amber-700"
      case "イベント":
        return "bg-blue-100 text-blue-700"
      case "キャンペーン":
        return "bg-green-100 text-green-700"
      default:
        return "bg-stone-100 text-stone-700"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] bg-stone-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-40" />
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">News & Events</h1>
            <p className="text-xl text-white/80">最新情報・イベント</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {newsItems.filter(item => item.featured)[0] && (
        <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-serif text-stone-800 mb-6 text-center">Featured</h2>
              {newsItems.filter(item => item.featured).map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-[16/9] md:aspect-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-stone-500">{item.date}</span>
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 mb-6 leading-relaxed">
                        {item.content}
                      </p>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white self-start">
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="news" className="space-y-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="news">お知らせ</TabsTrigger>
                <TabsTrigger value="events">イベント予定</TabsTrigger>
              </TabsList>

              <TabsContent value="news" className="space-y-8">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map(category => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                      className={selectedCategory === category.value
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "border-amber-200 hover:bg-amber-50"
                      }
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>

                {/* News Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredNews.map(item => {
                    const Icon = getCategoryIcon(item.category)
                    return (
                      <Card key={item.id} className="hover:shadow-lg transition-shadow">
                        {item.image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-stone-500">{item.date}</span>
                            <Badge variant="outline" className={getCategoryColor(item.category)}>
                              <Icon className="h-3 w-3 mr-1" />
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="font-medium text-lg leading-tight">{item.title}</h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-stone-600 mb-4">
                            {item.summary}
                          </p>
                          <Button variant="link" className="p-0 h-auto text-amber-600 hover:text-amber-700">
                            続きを読む
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif text-stone-800 mb-2">今後のイベント</h2>
                  <p className="text-stone-600">ワークショップやイベントの予定</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-center bg-amber-50 rounded-lg p-3 flex-shrink-0">
                            <Calendar className="h-6 w-6 text-amber-600 mx-auto mb-1" />
                            <p className="text-xs font-medium text-amber-600">
                              {event.date.split('.')[1]}.{event.date.split('.')[2]}
                            </p>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg mb-1">{event.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                              <Clock className="h-3 w-3" />
                              {event.time}
                            </div>
                            <p className="text-sm text-stone-600 mb-4">
                              {event.description}
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-amber-600 text-amber-600 hover:bg-amber-50"
                            >
                              詳細・予約
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <CardContent className="p-8 text-center">
                    <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-serif text-stone-800 mb-2">
                      イベントの参加予約
                    </h3>
                    <p className="text-stone-600 mb-6 max-w-md mx-auto">
                      各種ワークショップやイベントは事前予約制となっております。
                      お電話またはご来店時にお申し込みください。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                        <Phone className="mr-2 h-4 w-4" />
                        電話で予約: 03-1234-5678
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-stone-50">
        <div className="container">
          <Card className="max-w-2xl mx-auto bg-white">
            <CardContent className="p-8 text-center">
              <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif text-stone-800 mb-4">
                ニュースレター登録
              </h2>
              <p className="text-stone-600 mb-6">
                新メニューやイベント情報を、いち早くお届けします
              </p>
              <form className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="flex-1 px-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
                  登録する
                </Button>
              </form>
              <p className="text-xs text-stone-500 mt-4">
                ※月1-2回程度の配信です。いつでも配信停止可能です。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}