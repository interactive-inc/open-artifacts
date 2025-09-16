import { createFileRoute } from "@tanstack/react-router"
import {
  Award,
  Building,
  Calendar,
  Globe,
  Rocket,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/history")({
  component: HistoryPage,
})

type HistoryItem = {
  year: string
  month?: string
  event: string
  category:
    | "founding"
    | "expansion"
    | "product"
    | "award"
    | "partnership"
    | "milestone"
  description?: string
  icon?: any
}

/**
 * History Page
 */
function HistoryPage(_props: Props) {
  const historyItems: HistoryItem[] = [
    {
      year: "2010",
      month: "4月",
      event: "TechCorp Inc. 設立",
      category: "founding",
      description: "東京都渋谷区にて創業。資本金1,000万円、従業員5名でスタート",
      icon: Building,
    },
    {
      year: "2010",
      month: "10月",
      event: "初のクライアント獲得",
      category: "milestone",
      description: "大手製造業向けシステム開発プロジェクトを受注",
    },
    {
      year: "2011",
      month: "3月",
      event: "従業員数20名突破",
      category: "expansion",
      icon: Users,
    },
    {
      year: "2012",
      month: "6月",
      event: "大阪支社開設",
      category: "expansion",
      description: "関西エリアの事業拡大に向けて大阪に拠点を設立",
      icon: Building,
    },
    {
      year: "2012",
      month: "11月",
      event: "クラウドサービス「CloudFirst」リリース",
      category: "product",
      description: "中小企業向けクラウド基盤サービスの提供開始",
      icon: Rocket,
    },
    {
      year: "2013",
      month: "4月",
      event: "ベンチャーキャピタルから資金調達",
      category: "milestone",
      description: "シリーズAラウンドで3億円の資金調達を実施",
      icon: TrendingUp,
    },
    {
      year: "2014",
      month: "2月",
      event: "ITベンチャー賞受賞",
      category: "award",
      description: "経済産業省主催のITベンチャー賞で優秀賞を受賞",
      icon: Trophy,
    },
    {
      year: "2014",
      month: "9月",
      event: "AIラボ設立",
      category: "expansion",
      description: "人工知能研究開発部門を新設",
    },
    {
      year: "2015",
      month: "3月",
      event: "従業員数100名突破",
      category: "milestone",
      icon: Users,
    },
    {
      year: "2016",
      month: "5月",
      event: "名古屋・福岡支社開設",
      category: "expansion",
      description: "全国展開を加速、主要都市に拠点を拡大",
      icon: Building,
    },
    {
      year: "2016",
      month: "10月",
      event: "大手IT企業と業務提携",
      category: "partnership",
      description: "グローバル展開に向けた戦略的パートナーシップを締結",
    },
    {
      year: "2017",
      month: "4月",
      event: "AI分析プラットフォーム「InsightAI」リリース",
      category: "product",
      description: "機械学習を活用したビジネス分析ツールの提供開始",
      icon: Rocket,
    },
    {
      year: "2018",
      month: "1月",
      event: "AI事業部設立",
      category: "expansion",
      description: "AI・機械学習専門の事業部門を新設",
    },
    {
      year: "2018",
      month: "7月",
      event: "シリーズBで10億円調達",
      category: "milestone",
      description: "事業拡大に向けた大型資金調達を実施",
      icon: TrendingUp,
    },
    {
      year: "2019",
      month: "3月",
      event: "働きがいのある会社ランキング入賞",
      category: "award",
      description: "Great Place to Work認定企業に選出",
      icon: Award,
    },
    {
      year: "2019",
      month: "9月",
      event: "IoTソリューション事業開始",
      category: "product",
      description: "製造業向けIoTプラットフォームサービスを開始",
    },
    {
      year: "2020",
      month: "3月",
      event: "従業員数500名突破",
      category: "milestone",
      icon: Users,
    },
    {
      year: "2020",
      month: "6月",
      event: "リモートワーク完全対応",
      category: "milestone",
      description: "全社員のリモートワーク環境を整備、新しい働き方を推進",
    },
    {
      year: "2021",
      month: "4月",
      event: "DXプラットフォーム「TransformX」リリース",
      category: "product",
      description: "企業のデジタル変革を支援する統合プラットフォーム",
      icon: Rocket,
    },
    {
      year: "2021",
      month: "10月",
      event: "カーボンニュートラル宣言",
      category: "milestone",
      description: "2030年までにカーボンニュートラル達成を宣言",
    },
    {
      year: "2022",
      month: "3月",
      event: "従業員数1,000名突破",
      category: "milestone",
      description: "創業12年で従業員数1,000名を達成",
      icon: Users,
    },
    {
      year: "2022",
      month: "6月",
      event: "海外展開開始",
      category: "expansion",
      description: "シンガポール、ニューヨークに現地法人を設立",
      icon: Globe,
    },
    {
      year: "2022",
      month: "11月",
      event: "DX認定企業に選定",
      category: "award",
      description: "経済産業省よりDX認定企業として認定",
      icon: Trophy,
    },
    {
      year: "2023",
      month: "4月",
      event: "次世代AIラボ開設",
      category: "expansion",
      description: "生成AI研究に特化した研究開発拠点を設立",
    },
    {
      year: "2023",
      month: "9月",
      event: "サステナビリティ大賞受賞",
      category: "award",
      description: "環境省主催のサステナビリティ大賞で金賞を受賞",
      icon: Award,
    },
    {
      year: "2024",
      month: "1月",
      event: "AI Assistant Pro リリース",
      category: "product",
      description: "最新の生成AI技術を活用した業務支援ツール",
      icon: Rocket,
    },
    {
      year: "2024",
      month: "3月",
      event: "本社移転（予定）",
      category: "expansion",
      description: "東京都千代田区丸の内の新オフィスへ移転予定",
      icon: Building,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "founding":
        return "default"
      case "expansion":
        return "secondary"
      case "product":
        return "default"
      case "award":
        return "default"
      case "partnership":
        return "outline"
      case "milestone":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "founding":
        return "創業"
      case "expansion":
        return "拡大"
      case "product":
        return "製品"
      case "award":
        return "受賞"
      case "partnership":
        return "提携"
      case "milestone":
        return "節目"
      default:
        return ""
    }
  }

  const groupedHistory = historyItems.reduce(
    (acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = []
      }
      acc[item.year].push(item)
      return acc
    },
    {} as Record<string, HistoryItem[]>,
  )

  const years = Object.keys(groupedHistory).sort(
    (a, b) => Number(b) - Number(a),
  )

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            沿革
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            2010年の創業から現在まで、TechCorpの歩みをご紹介します
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:gap-6 lg:gap-8">
          {years.map((year) => (
            <Card key={year} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                  {year}年
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {groupedHistory[year].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="relative pl-8">
                        {index < groupedHistory[year].length - 1 && (
                          <div className="absolute top-8 bottom-0 left-3 w-0.5 bg-border" />
                        )}
                        <div className="absolute top-2 left-0">
                          {Icon ? (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                              <Icon className="h-3 w-3 text-primary" />
                            </div>
                          ) : (
                            <div className="h-6 w-6 rounded-full border-2 border-primary/20 bg-muted" />
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            {item.month && (
                              <span className="font-medium text-muted-foreground text-sm">
                                {item.month}
                              </span>
                            )}
                            <Badge variant={getCategoryColor(item.category)}>
                              {getCategoryLabel(item.category)}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg">
                            {item.event}
                          </h3>
                          {item.description && (
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12">
              <h2 className="mb-4 font-bold text-3xl">
                これからも、挑戦は続く
              </h2>
              <p className="mx-auto mb-8 max-w-[600px]">
                創業から15年、私たちは常に新しい技術と向き合い、
                お客様とともに成長してきました。
                これからも革新的なソリューションで、未来を創造していきます。
              </p>
              <div className="mx-auto grid max-w-[600px] grid-cols-3 gap-8">
                <div>
                  <p className="mb-1 font-bold text-3xl">15年</p>
                  <p className="text-sm opacity-90">創業からの歴史</p>
                </div>
                <div>
                  <p className="mb-1 font-bold text-3xl">1,200+</p>
                  <p className="text-sm opacity-90">従業員数</p>
                </div>
                <div>
                  <p className="mb-1 font-bold text-3xl">500+</p>
                  <p className="text-sm opacity-90">導入企業数</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
