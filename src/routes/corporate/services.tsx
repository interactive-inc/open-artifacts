import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Code,
  Database,
  Lock,
  Smartphone,
  TrendingUp,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/services")({
  component: ServicesPage,
})

/**
 * Services Page
 */
function ServicesPage(_props: Props) {
  const services = [
    {
      icon: Cloud,
      title: "クラウドインフラ構築",
      description:
        "AWS、Azure、GCPなどのクラウドプラットフォームを活用した、スケーラブルで信頼性の高いインフラストラクチャを構築します。",
      features: [
        "マルチクラウド対応",
        "自動スケーリング",
        "24時間監視体制",
        "コスト最適化",
      ],
      tags: ["AWS", "Azure", "GCP", "Kubernetes"],
    },
    {
      icon: Code,
      title: "システム開発",
      description:
        "お客様のビジネスニーズに合わせた、カスタムソフトウェアの設計・開発・保守を行います。",
      features: [
        "アジャイル開発",
        "フルスタック開発",
        "レガシーシステム刷新",
        "API開発",
      ],
      tags: ["React", "Node.js", "Python", "Java"],
    },
    {
      icon: Database,
      title: "データ分析・AI",
      description:
        "ビッグデータの収集・分析から、機械学習モデルの開発まで、データドリブンな意思決定を支援します。",
      features: [
        "データパイプライン構築",
        "予測分析",
        "自然言語処理",
        "画像認識",
      ],
      tags: ["TensorFlow", "PyTorch", "Spark", "BigQuery"],
    },
    {
      icon: Lock,
      title: "セキュリティソリューション",
      description:
        "サイバー攻撃から企業を守るための、包括的なセキュリティ対策を提供します。",
      features: [
        "脆弱性診断",
        "ペネトレーションテスト",
        "SOC構築",
        "インシデント対応",
      ],
      tags: ["Zero Trust", "SIEM", "WAF", "EDR"],
    },
    {
      icon: Smartphone,
      title: "モバイルアプリ開発",
      description:
        "iOS、Android対応のネイティブアプリから、クロスプラットフォームアプリまで開発します。",
      features: [
        "UI/UXデザイン",
        "プッシュ通知",
        "オフライン対応",
        "アプリ内課金",
      ],
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: TrendingUp,
      title: "DXコンサルティング",
      description:
        "デジタル技術を活用した業務改革から、新規ビジネス創出まで総合的に支援します。",
      features: [
        "現状分析・課題抽出",
        "DXロードマップ策定",
        "組織変革支援",
        "KPI設定・効果測定",
      ],
      tags: ["Strategy", "Innovation", "Change Management", "Agile"],
    },
  ]

  const plans = [
    {
      name: "スタートアップ",
      price: "30万円〜",
      description: "小規模プロジェクト向け",
      features: [
        "基本的なシステム構築",
        "最大3ヶ月のサポート",
        "メールサポート",
        "月次レポート",
      ],
      recommended: false,
    },
    {
      name: "ビジネス",
      price: "100万円〜",
      description: "中規模企業向け",
      features: [
        "カスタムソリューション開発",
        "6ヶ月の保守サポート",
        "電話・メールサポート",
        "週次レポート",
        "専任エンジニア",
      ],
      recommended: true,
    },
    {
      name: "エンタープライズ",
      price: "要相談",
      description: "大規模プロジェクト向け",
      features: [
        "フルカスタマイズ開発",
        "無制限サポート",
        "24時間365日対応",
        "日次レポート",
        "専任チーム配置",
        "オンサイト対応",
      ],
      recommended: false,
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            サービス一覧
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            最先端の技術と豊富な経験で、お客様のビジネス課題を解決します
          </p>
        </div>

        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <Icon className="mb-4 h-10 w-10 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl tracking-tighter">
              料金プラン
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              プロジェクトの規模に応じて、最適なプランをお選びいただけます
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={plan.recommended ? "border-primary shadow-lg" : ""}
              >
                {plan.recommended && (
                  <div className="bg-primary py-2 text-center font-medium text-primary-foreground text-sm">
                    おすすめ
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="font-bold text-3xl">{plan.price}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.recommended ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/corporate/contact">お問い合わせ</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-muted p-8 text-center md:p-12">
          <h2 className="mb-4 font-bold text-3xl">
            カスタムソリューションをお探しですか？
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-muted-foreground">
            お客様のビジネスに最適なソリューションを提案させていただきます。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/corporate/contact">
                無料相談を申し込む
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/corporate/case-studies">導入事例を見る</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
