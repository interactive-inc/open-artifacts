import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  Search,
  Tag,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}

export const Route = createFileRoute("/corporate/news")({
  component: NewsPage,
})

type NewsItem = {
  id: string
  date: string
  category: "press" | "announcement" | "event" | "media" | "award"
  title: string
  summary: string
  tags: string[]
  featured?: boolean
}

/**
 * News Page
 */
function NewsPage(_props: Props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const newsItems: NewsItem[] = [
    {
      id: "news-001",
      date: "2024.01.15",
      category: "press",
      title: "革新的なAIソリューション「AI Assistant Pro」をリリース",
      summary:
        "企業の業務効率を最大70%向上させる次世代AIアシスタントサービスの提供を開始しました。自然言語処理と機械学習を活用し、業務の自動化と意思決定支援を実現します。",
      tags: ["AI", "新サービス", "業務効率化"],
      featured: true,
    },
    {
      id: "news-002",
      date: "2024.01.10",
      category: "announcement",
      title: "東京本社を丸の内エリアに移転",
      summary:
        "事業拡大に伴い、2024年3月1日より東京本社を千代田区丸の内に移転いたします。新オフィスは最新の設備を備え、より快適な労働環境を提供します。",
      tags: ["オフィス移転", "東京本社"],
    },
    {
      id: "news-003",
      date: "2024.01.08",
      category: "award",
      title: "「DX推進企業アワード2023」で最優秀賞を受賞",
      summary:
        "デジタルトランスフォーメーションの推進における優れた取り組みが評価され、最優秀賞を受賞しました。",
      tags: ["受賞", "DX", "表彰"],
      featured: true,
    },
    {
      id: "news-004",
      date: "2024.01.05",
      category: "event",
      title: "Tech Conference 2024に出展決定",
      summary:
        "2024年3月20-22日に東京ビッグサイトで開催される国内最大級のテクノロジーカンファレンスに出展します。最新のソリューションをご紹介いたします。",
      tags: ["イベント", "展示会", "Tech Conference"],
    },
    {
      id: "news-005",
      date: "2023.12.25",
      category: "press",
      title: "大手製造業A社とのDXパートナーシップを締結",
      summary:
        "製造業界のリーディングカンパニーであるA社と戦略的パートナーシップを締結。スマートファクトリー実現に向けた包括的な支援を行います。",
      tags: ["パートナーシップ", "製造業", "DX"],
    },
    {
      id: "news-006",
      date: "2023.12.20",
      category: "announcement",
      title: "2025年度新卒採用エントリー受付開始",
      summary:
        "2025年4月入社の新卒採用エントリーを開始しました。エンジニア、営業、マーケティング等、幅広い職種で募集しています。",
      tags: ["採用", "新卒", "2025年度"],
    },
    {
      id: "news-007",
      date: "2023.12.15",
      category: "media",
      title: "CEO山田が日経ビジネスに掲載",
      summary:
        "代表取締役CEOの山田太郎が日経ビジネス「次世代リーダー特集」に掲載されました。DX推進における当社のビジョンと戦略について語っています。",
      tags: ["メディア掲載", "CEO", "日経ビジネス"],
    },
    {
      id: "news-008",
      date: "2023.12.10",
      category: "event",
      title: "第5回TechCorpデベロッパーカンファレンス開催",
      summary:
        "エンジニア向けの技術カンファレンスを開催しました。500名以上の参加者が集まり、最新技術動向やベストプラクティスを共有しました。",
      tags: ["カンファレンス", "エンジニア", "技術"],
    },
    {
      id: "news-009",
      date: "2023.12.05",
      category: "press",
      title: "セキュリティ強化ソリューション「SecureGuard」を発表",
      summary:
        "サイバー攻撃の高度化に対応する次世代セキュリティソリューションを発表。Zero Trust アーキテクチャを採用し、包括的な防御を実現します。",
      tags: ["セキュリティ", "新サービス", "Zero Trust"],
    },
    {
      id: "news-010",
      date: "2023.11.30",
      category: "announcement",
      title: "サステナビリティレポート2023を公開",
      summary:
        "環境・社会・ガバナンス（ESG）への取り組みをまとめたサステナビリティレポートを公開しました。カーボンニュートラル達成に向けた具体的な施策を記載しています。",
      tags: ["サステナビリティ", "ESG", "レポート"],
    },
  ]

  const categoryConfig = {
    all: { label: "すべて", icon: null },
    press: { label: "プレスリリース", icon: TrendingUp },
    announcement: { label: "お知らせ", icon: Building },
    event: { label: "イベント", icon: Calendar },
    media: { label: "メディア掲載", icon: Tag },
    award: { label: "受賞", icon: Award },
  }

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = newsItems.filter((item) => item.featured)

  const getCategoryBadgeVariant = (category: string) => {
    switch (category) {
      case "press":
        return "default"
      case "announcement":
        return "secondary"
      case "event":
        return "outline"
      case "media":
        return "secondary"
      case "award":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            ニュース & プレスリリース
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            TechCorpの最新情報、プレスリリース、イベント情報をお届けします
          </p>
        </div>

        {featuredNews.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl">注目のニュース</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredNews.map((item) => (
                <Card
                  key={item.id}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant={getCategoryBadgeVariant(item.category)}>
                        {categoryConfig[item.category].label}
                      </Badge>
                      <span className="text-muted-foreground text-sm">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="cursor-pointer text-xl transition-colors hover:text-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {item.summary}
                    </CardDescription>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="link" className="h-auto p-0">
                      詳細を読む
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-muted-foreground" />
                <Input
                  placeholder="キーワードで検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                {Object.entries(categoryConfig).map(([key, config]) => (
                  <TabsTrigger key={key} value={key}>
                    {config.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value={selectedCategory} className="mt-6">
                {filteredNews.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">
                        該当するニュースが見つかりませんでした
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {filteredNews.map((item) => (
                      <Card
                        key={item.id}
                        className="transition-shadow hover:shadow-md"
                      >
                        <CardHeader>
                          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={getCategoryBadgeVariant(item.category)}
                              >
                                {categoryConfig[item.category].label}
                              </Badge>
                              <span className="text-muted-foreground text-sm">
                                {item.date}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <CardTitle className="mt-2 cursor-pointer text-lg transition-colors hover:text-primary">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">
                            {item.summary}
                          </CardDescription>
                          <Button variant="link" className="h-auto p-0">
                            詳細を読む
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Card className="bg-muted">
            <CardContent className="py-8">
              <h3 className="mb-2 font-bold text-xl">
                プレスリリース配信をご希望の方へ
              </h3>
              <p className="mb-4 text-muted-foreground">
                メディア関係者向けのプレスリリース配信サービスをご用意しています
              </p>
              <Button asChild>
                <Link to="/corporate/contact">
                  配信登録はこちら
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
