import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle,
  Factory,
  Heart,
  Plane,
  ShoppingCart,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}

type CaseStudy = {
  id: string
  company: string
  industry: string
  logo?: string
  title: string
  challenge: string
  solution: string
  results: string[]
  testimonial: {
    quote: string
    author: string
    position: string
  }
  metrics: {
    label: string
    value: string
    improvement: string
  }[]
  tags: string[]
  featured?: boolean
}

export const Route = createFileRoute("/corporate/case-studies")({
  component: CaseStudiesPage,
})

/**
 * Case Studies Page
 */
function CaseStudiesPage(_props: Props) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all")

  const caseStudies: CaseStudy[] = [
    {
      id: "case-001",
      company: "株式会社Aリテール",
      industry: "retail",
      title: "ECサイトの完全リニューアルで売上300%向上",
      challenge: "老朽化したECシステムによる機会損失とユーザー体験の低下",
      solution:
        "マイクロサービスアーキテクチャを採用した次世代ECプラットフォームの構築。AIレコメンデーション機能とパーソナライゼーション機能を実装。",
      results: [
        "オンライン売上が300%向上",
        "ページ表示速度が80%改善",
        "カート離脱率が45%減少",
        "顧客満足度スコアが35ポイント上昇",
      ],
      testimonial: {
        quote:
          "TechCorpの支援により、単なるシステム刷新を超えて、ビジネスモデル自体の革新を実現できました。",
        author: "田中 一郎",
        position: "代表取締役社長",
      },
      metrics: [
        { label: "売上向上", value: "300%", improvement: "UP" },
        { label: "表示速度", value: "80%", improvement: "改善" },
        { label: "離脱率", value: "45%", improvement: "削減" },
      ],
      tags: ["EC", "AI", "マイクロサービス"],
      featured: true,
    },
    {
      id: "case-002",
      company: "Bメディカルグループ",
      industry: "healthcare",
      title: "医療情報システムの統合による業務効率化",
      challenge: "複数の独立したシステムによるデータの分断と業務の非効率化",
      solution:
        "統合医療情報プラットフォームの構築。電子カルテ、予約システム、会計システムを一元化し、セキュアなクラウド環境で運用。",
      results: [
        "事務作業時間が60%削減",
        "患者待ち時間が平均15分短縮",
        "医療過誤リスクが70%低減",
        "年間コスト2,000万円削減",
      ],
      testimonial: {
        quote:
          "システム統合により、医師や看護師が本来の医療業務に集中できる環境が整いました。",
        author: "佐藤 美香",
        position: "理事長",
      },
      metrics: [
        { label: "業務効率", value: "60%", improvement: "改善" },
        { label: "待ち時間", value: "15分", improvement: "短縮" },
        { label: "コスト", value: "2000万", improvement: "削減" },
      ],
      tags: ["医療", "クラウド", "システム統合"],
      featured: true,
    },
    {
      id: "case-003",
      company: "C製造株式会社",
      industry: "manufacturing",
      title: "IoTとAIを活用したスマートファクトリーの実現",
      challenge: "生産ラインの可視化不足と予防保全の困難さによる稼働率低下",
      solution:
        "IoTセンサーによるリアルタイムモニタリングとAI予測分析システムの導入。デジタルツインによる生産最適化。",
      results: [
        "設備稼働率が95%に向上",
        "予期せぬダウンタイムが80%減少",
        "生産効率が35%向上",
        "品質不良率が50%減少",
      ],
      testimonial: {
        quote: "データドリブンな意思決定により、製造現場が劇的に変わりました。",
        author: "鈴木 太郎",
        position: "工場長",
      },
      metrics: [
        { label: "稼働率", value: "95%", improvement: "達成" },
        { label: "生産効率", value: "35%", improvement: "UP" },
        { label: "不良率", value: "50%", improvement: "削減" },
      ],
      tags: ["IoT", "AI", "スマートファクトリー"],
    },
    {
      id: "case-004",
      company: "D銀行",
      industry: "finance",
      title: "デジタルバンキング基盤の構築",
      challenge: "レガシーシステムによるデジタルサービス展開の制約",
      solution:
        "クラウドネイティブなバンキングプラットフォームの構築。APIファーストアーキテクチャによる外部連携強化。",
      results: [
        "新規口座開設が完全オンライン化",
        "処理時間が90%短縮",
        "顧客獲得コストが70%削減",
        "デジタルチャネル利用率が200%増加",
      ],
      testimonial: {
        quote:
          "真のデジタルトランスフォーメーションを実現し、競争力を大幅に強化できました。",
        author: "高橋 次郎",
        position: "執行役員 デジタル戦略部長",
      },
      metrics: [
        { label: "処理時間", value: "90%", improvement: "短縮" },
        { label: "コスト", value: "70%", improvement: "削減" },
        { label: "利用率", value: "200%", improvement: "UP" },
      ],
      tags: ["金融", "クラウド", "API"],
    },
    {
      id: "case-005",
      company: "E旅行サービス",
      industry: "travel",
      title: "AIチャットボットによる24時間カスタマーサポート",
      challenge: "増加する問い合わせへの対応と顧客満足度の維持",
      solution:
        "自然言語処理を活用した高度なAIチャットボットの導入。多言語対応と予約システムとの連携。",
      results: [
        "問い合わせ対応の80%を自動化",
        "顧客満足度が25%向上",
        "対応コストが60%削減",
        "24時間365日のサポート実現",
      ],
      testimonial: {
        quote:
          "AIの導入により、人間のオペレーターはより複雑な問題解決に注力できるようになりました。",
        author: "山田 花子",
        position: "カスタマーサービス部長",
      },
      metrics: [
        { label: "自動化率", value: "80%", improvement: "達成" },
        { label: "満足度", value: "25%", improvement: "UP" },
        { label: "コスト", value: "60%", improvement: "削減" },
      ],
      tags: ["AI", "チャットボット", "カスタマーサポート"],
    },
    {
      id: "case-006",
      company: "F物流株式会社",
      industry: "logistics",
      title: "配送最適化システムによる物流革命",
      challenge: "配送ルートの非効率性と人手不足による配送遅延",
      solution:
        "AIによる配送ルート最適化と倉庫管理システムの統合。リアルタイムトラッキングシステムの実装。",
      results: [
        "配送効率が40%向上",
        "燃料コストが30%削減",
        "配送時間の正確性が95%に",
        "顧客クレームが60%減少",
      ],
      testimonial: {
        quote:
          "最適化システムにより、少ない人員でより多くの配送を正確に行えるようになりました。",
        author: "伊藤 健一",
        position: "物流本部長",
      },
      metrics: [
        { label: "配送効率", value: "40%", improvement: "UP" },
        { label: "燃料費", value: "30%", improvement: "削減" },
        { label: "正確性", value: "95%", improvement: "達成" },
      ],
      tags: ["物流", "AI", "最適化"],
    },
  ]

  const industries = [
    { value: "all", label: "すべて", icon: Building },
    { value: "retail", label: "小売・EC", icon: ShoppingCart },
    { value: "healthcare", label: "医療・ヘルスケア", icon: Heart },
    { value: "manufacturing", label: "製造業", icon: Factory },
    { value: "finance", label: "金融", icon: Briefcase },
    { value: "travel", label: "旅行・観光", icon: Plane },
    { value: "logistics", label: "物流", icon: Building },
  ]

  const filteredCaseStudies =
    selectedIndustry === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.industry === selectedIndustry)

  const featuredCases = caseStudies.filter((study) => study.featured)

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            導入事例
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            TechCorpのソリューションを導入いただいた企業様の成功事例をご紹介します
          </p>
        </div>

        {featuredCases.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-6 font-bold text-2xl">注目の導入事例</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredCases.map((study) => (
                <Card
                  key={study.id}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="default">
                        {
                          industries.find((i) => i.value === study.industry)
                            ?.label
                        }
                      </Badge>
                      <Badge variant="outline">FEATURED</Badge>
                    </div>
                    <CardTitle>{study.company}</CardTitle>
                    <CardDescription className="font-medium text-base">
                      {study.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-1 font-medium text-sm">課題</p>
                      <p className="text-muted-foreground text-sm">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <p className="font-bold text-2xl text-primary">
                            {metric.value}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {metric.improvement}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="h-auto p-0">
                      詳細を見る
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section>
          <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <TabsList className="mb-8 grid w-full grid-cols-3 lg:grid-cols-7">
              {industries.map((industry) => (
                <TabsTrigger key={industry.value} value={industry.value}>
                  {industry.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedIndustry}>
              <div className="space-y-6">
                {filteredCaseStudies.map((study) => (
                  <Card key={study.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="flex-1 p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <Badge variant="secondary">
                            {
                              industries.find((i) => i.value === study.industry)
                                ?.label
                            }
                          </Badge>
                          {study.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="mb-1 font-bold text-xl">
                          {study.company}
                        </h3>
                        <p className="mb-4 font-medium text-lg text-primary">
                          {study.title}
                        </p>

                        <div className="mb-4 space-y-3">
                          <div>
                            <p className="mb-1 font-medium text-sm">課題</p>
                            <p className="text-muted-foreground text-sm">
                              {study.challenge}
                            </p>
                          </div>
                          <div>
                            <p className="mb-1 font-medium text-sm">
                              ソリューション
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {study.solution}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="mb-2 font-medium text-sm">成果</p>
                          <ul className="space-y-1">
                            {study.results.map((result, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Card className="mb-4 border-0 bg-muted">
                          <CardContent className="p-4">
                            <p className="mb-2 text-sm italic">
                              "{study.testimonial.quote}"
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {study.testimonial.author} -{" "}
                              {study.testimonial.position}
                            </p>
                          </CardContent>
                        </Card>

                        <Button>
                          詳細資料をダウンロード
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div className="bg-muted p-6 md:w-64">
                        <h4 className="mb-4 font-medium">主要成果指標</h4>
                        <div className="space-y-4">
                          {study.metrics.map((metric, index) => (
                            <div key={index}>
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-sm">{metric.label}</span>
                                <Badge variant="default" className="text-xs">
                                  {metric.improvement}
                                </Badge>
                              </div>
                              <p className="font-bold text-2xl text-primary">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 font-bold text-3xl">
                あなたのビジネスも変革しませんか？
              </h2>
              <p className="mx-auto mb-8 max-w-[600px]">
                TechCorpは、お客様の課題に合わせた最適なソリューションを提供します。
                まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/corporate/contact">
                    無料相談を申し込む
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  資料請求
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
