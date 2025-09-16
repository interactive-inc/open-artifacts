import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  BarChart,
  Globe,
  Lightbulb,
  Rocket,
  Shield,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/")({
  component: CorporateHome,
})

/**
 * Corporate Home
 */
function CorporateHome(_props: Props) {
  const services = [
    {
      icon: Globe,
      title: "グローバル展開",
      description:
        "世界30カ国以上でサービスを展開。国際的なビジネスをサポートします。",
    },
    {
      icon: Shield,
      title: "セキュリティ",
      description: "最高水準のセキュリティで、お客様のデータと信頼を守ります。",
    },
    {
      icon: Rocket,
      title: "イノベーション",
      description: "最新技術を活用し、革新的なソリューションを提供します。",
    },
    {
      icon: Users,
      title: "カスタマーサポート",
      description: "24時間365日、専門チームがお客様をサポートします。",
    },
    {
      icon: BarChart,
      title: "データ分析",
      description: "ビッグデータを活用した高度な分析サービスを提供します。",
    },
    {
      icon: Lightbulb,
      title: "コンサルティング",
      description: "豊富な経験を持つコンサルタントが課題解決を支援します。",
    },
  ]

  const achievements = [
    { label: "設立", value: "2010年" },
    { label: "従業員数", value: "1,200+" },
    { label: "顧客企業", value: "500+" },
    { label: "グローバル拠点", value: "30+" },
  ]

  const news = [
    {
      date: "2024.01.15",
      category: "プレスリリース",
      title: "新サービス「AI Assistant Pro」をリリース",
    },
    {
      date: "2024.01.10",
      category: "お知らせ",
      title: "東京オフィス移転のお知らせ",
    },
    {
      date: "2024.01.05",
      category: "イベント",
      title: "Tech Conference 2024 に出展します",
    },
    {
      date: "2023.12.20",
      category: "採用",
      title: "2025年度新卒採用エントリー受付開始",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-24 lg:py-32">
        <div className="container">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h1 className="font-bold text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              テクノロジーで
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                未来を創造する
              </span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              TechCorp Inc.は、革新的なテクノロジーソリューションを通じて、
              企業のデジタルトランスフォーメーションを支援します。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/corporate/services">
                  サービスを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/corporate/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
              私たちの強み
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              最先端の技術と豊富な経験で、お客様のビジネスを成功に導きます
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="group transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <Icon className="mb-2 h-10 w-10 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
                数字で見るTechCorp
              </h2>
              <p className="text-muted-foreground">
                2010年の創業以来、私たちは着実に成長を続け、
                多くのお客様から信頼をいただいています。
              </p>
              <Button asChild>
                <Link to="/corporate/about">
                  会社概要を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item) => (
                <div key={item.label} className="space-y-2 text-center">
                  <p className="font-bold text-4xl text-primary">
                    {item.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="font-bold text-3xl tracking-tighter">最新情報</h2>
              <p className="text-muted-foreground">
                プレスリリース、お知らせ、イベント情報
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/corporate/news">
                すべて見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            {news.map((item, index) => (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span>{item.date}</span>
                    <span className="rounded-md bg-primary/10 px-2 py-1 text-primary text-xs">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="cursor-pointer text-lg transition-colors hover:text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container">
          <div className="space-y-8 text-center">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl">
              一緒に働きませんか？
            </h2>
            <p className="mx-auto max-w-[600px]">
              TechCorpでは、情熱を持って挑戦し続ける仲間を募集しています。
              あなたの力で、より良い未来を創造しましょう。
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/corporate/careers">
                採用情報を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
