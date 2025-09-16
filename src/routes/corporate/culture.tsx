import { createFileRoute } from "@tanstack/react-router"
import {
  Book,
  Coffee,
  Globe,
  Heart,
  Lightbulb,
  MessageSquare,
  Smile,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/culture")({
  component: CulturePage,
})

/**
 * Culture Page
 */
function CulturePage(_props: Props) {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      subtitle: "革新を恐れない",
      description:
        "常に新しいアイデアを歓迎し、失敗を恐れず挑戦する文化を大切にしています。イノベーションこそが成長の源泉です。",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Team Work",
      subtitle: "チームで成功する",
      description:
        "個人の力を結集し、チームとして最高のパフォーマンスを発揮します。互いを尊重し、支え合う文化が根付いています。",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Customer First",
      subtitle: "お客様の成功が私たちの成功",
      description:
        "常にお客様の視点で考え、期待を超える価値を提供することを目指します。お客様の成功こそが私たちの成功です。",
      color: "text-red-500",
    },
    {
      icon: Target,
      title: "Excellence",
      subtitle: "卓越性の追求",
      description:
        "妥協せず、常に最高品質を追求します。プロフェッショナルとして、自分の仕事に誇りを持って取り組みます。",
      color: "text-green-500",
    },
    {
      icon: Globe,
      title: "Diversity",
      subtitle: "多様性を力に",
      description:
        "異なる背景、視点、経験を持つ人材が集まることで、より創造的で革新的なソリューションが生まれます。",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Speed",
      subtitle: "スピードと柔軟性",
      description:
        "変化の速い時代に対応するため、迅速な意思決定と柔軟な対応を心がけています。アジャイルな組織文化を実践しています。",
      color: "text-orange-500",
    },
  ]

  const workStyle = [
    {
      title: "フレックスタイム制",
      description:
        "コアタイム10:00-15:00。ライフスタイルに合わせた柔軟な働き方が可能です。",
    },
    {
      title: "リモートワーク",
      description:
        "週3日まで在宅勤務可能。全国どこからでも働ける環境を整えています。",
    },
    {
      title: "20%ルール",
      description:
        "業務時間の20%を自己研鑽や新しいプロジェクトに充てることができます。",
    },
    {
      title: "サバティカル休暇",
      description:
        "勤続5年以上で最長3ヶ月の長期休暇制度。自己充電や学習の機会として活用できます。",
    },
  ]

  const activities = [
    {
      icon: Coffee,
      title: "TechCorp Cafe",
      description:
        "毎週金曜日の夕方、社内カフェでカジュアルな交流会を開催。部署を超えた交流の場となっています。",
    },
    {
      icon: Book,
      title: "勉強会・技術共有会",
      description:
        "週次で技術勉強会を開催。最新技術のキャッチアップや知識共有を積極的に行っています。",
    },
    {
      icon: Trophy,
      title: "ハッカソン",
      description:
        "年2回の社内ハッカソン。自由な発想で新しいサービスやツールを開発し、優秀作品は事業化も。",
    },
    {
      icon: Users,
      title: "クラブ活動",
      description:
        "スポーツ、音楽、ゲームなど20以上のクラブが活動中。共通の趣味を通じた交流が盛んです。",
    },
    {
      icon: Sparkles,
      title: "イノベーションアワード",
      description:
        "年次で革新的な取り組みを表彰。チャレンジ精神を称え、失敗を恐れない文化を醸成しています。",
    },
    {
      icon: MessageSquare,
      title: "オープンドア",
      description:
        "経営陣との定期的な対話の機会。フラットな組織文化で、誰もが意見を言える環境です。",
    },
  ]

  const employeeVoices = [
    {
      name: "エンジニア（入社3年目）",
      message:
        "最新技術に触れる機会が多く、成長を実感できる環境です。チームメンバーも優秀で刺激的な毎日です。",
      department: "開発部",
    },
    {
      name: "プロダクトマネージャー（入社5年目）",
      message:
        "裁量が大きく、自分のアイデアを形にできる環境。失敗を恐れず挑戦できる文化が魅力です。",
      department: "プロダクト部",
    },
    {
      name: "営業（入社2年目）",
      message:
        "お客様の課題を技術で解決する提案ができることにやりがいを感じています。チームのサポートも手厚いです。",
      department: "営業部",
    },
    {
      name: "デザイナー（入社4年目）",
      message:
        "デザインの価値を理解してくれる環境。エンジニアとの協働もスムーズで、良いプロダクトを作れています。",
      department: "デザイン部",
    },
  ]

  const officeFeatures = [
    {
      title: "オープンスペース",
      items: ["コラボレーションエリア", "スタンディングデスク", "集中ブース"],
    },
    {
      title: "リフレッシュエリア",
      items: ["カフェスペース", "ゲームルーム", "仮眠室"],
    },
    {
      title: "ウェルネス",
      items: ["社内ジム", "ヨガルーム", "マッサージルーム"],
    },
    {
      title: "サポート設備",
      items: ["社内保育所", "授乳室", "礼拝室"],
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            社風・文化
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            TechCorpは、イノベーションと成長を支える独自の企業文化を育んでいます
          </p>
        </div>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <Icon className={`mb-2 h-10 w-10 ${value.color}`} />
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="font-medium">
                      {value.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="py-12">
              <div className="mb-8 text-center">
                <h2 className="mb-4 font-bold text-3xl">働き方の自由度</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  一人ひとりが最高のパフォーマンスを発揮できる、柔軟な働き方を推進しています
                </p>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                {workStyle.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg bg-background p-6"
                  >
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">
            社内活動・イベント
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <Card key={activity.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className="h-5 w-5 text-primary" />
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">社員の声</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {employeeVoices.map((voice, index) => (
              <Card key={index} className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Smile className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-3 text-sm italic">"{voice.message}"</p>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{voice.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {voice.department}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">オフィス環境</h2>
          <Card>
            <CardContent className="py-8">
              <p className="mb-8 text-center text-muted-foreground">
                創造性と生産性を高める、快適で機能的なオフィス環境を提供しています
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {officeFeatures.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="mb-3 font-semibold">{feature.title}</h3>
                    <ul className="space-y-1">
                      {feature.items.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground text-sm"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 font-bold text-3xl">
                一緒に未来を創りましょう
              </h2>
              <p className="mx-auto mb-8 max-w-[600px]">
                TechCorpでは、情熱を持って挑戦する仲間を募集しています。
                あなたの才能と情熱を、私たちと一緒に開花させませんか？
              </p>
              <div className="mx-auto mb-8 grid max-w-[600px] grid-cols-3 gap-8">
                <div>
                  <p className="mb-1 font-bold text-3xl">95%</p>
                  <p className="text-sm opacity-90">社員満足度</p>
                </div>
                <div>
                  <p className="mb-1 font-bold text-3xl">4.5年</p>
                  <p className="text-sm opacity-90">平均勤続年数</p>
                </div>
                <div>
                  <p className="mb-1 font-bold text-3xl">20%</p>
                  <p className="text-sm opacity-90">年間成長率</p>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/corporate/careers">
                  採用情報を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
