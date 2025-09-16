import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  Baby,
  BookOpen,
  Building,
  Calendar,
  Car,
  Clock,
  Coffee,
  Coins,
  Dumbbell,
  Gift,
  GraduationCap,
  Heart,
  Home,
  Laptop,
  Plane,
  Shield,
  Sparkles,
  Stethoscope,
  Trophy,
  Users,
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

export const Route = createFileRoute("/corporate/benefits")({
  component: BenefitsPage,
})

/**
 * Benefits Page
 */
function BenefitsPage(_props: Props) {
  const healthBenefits = [
    {
      icon: Stethoscope,
      title: "健康診断・人間ドック",
      description: "年1回の健康診断と35歳以上は人間ドック費用を全額負担",
      details: [
        "年1回の定期健康診断",
        "35歳以上人間ドック全額補助",
        "婦人科検診オプション",
        "歯科検診年2回",
      ],
    },
    {
      icon: Shield,
      title: "健康保険・医療サポート",
      description: "充実した健康保険と医療費補助制度",
      details: [
        "関東ITソフトウェア健康保険組合",
        "医療費自己負担額補助",
        "薬代補助制度",
        "セカンドオピニオンサービス",
      ],
    },
    {
      icon: Heart,
      title: "メンタルヘルスケア",
      description: "心の健康を守る充実のサポート体制",
      details: [
        "産業医・カウンセラー常駐",
        "24時間電話相談窓口",
        "ストレスチェック年2回",
        "メンタルヘルス研修",
      ],
    },
    {
      icon: Dumbbell,
      title: "フィットネス・運動支援",
      description: "社内ジム完備とスポーツクラブ補助",
      details: [
        "社内ジム24時間利用可",
        "提携スポーツクラブ割引",
        "ヨガ・ピラティス教室",
        "マラソン大会参加費補助",
      ],
    },
  ]

  const workLifeBalance = [
    {
      icon: Calendar,
      title: "休暇制度",
      description: "充実した休暇制度で働きやすさを実現",
      details: [
        "年間休日125日以上",
        "有給休暇初年度15日",
        "リフレッシュ休暇（5日連続）",
        "誕生日休暇",
        "ボランティア休暇",
      ],
    },
    {
      icon: Clock,
      title: "柔軟な働き方",
      description: "ライフスタイルに合わせた働き方を支援",
      details: [
        "フレックスタイム制",
        "コアタイム10:00-15:00",
        "リモートワーク週3日まで",
        "時短勤務制度",
        "副業許可制度",
      ],
    },
    {
      icon: Home,
      title: "在宅勤務支援",
      description: "快適な在宅勤務環境を整備",
      details: [
        "在宅勤務手当月1万円",
        "PC・モニター貸与",
        "エルゴノミクスチェア補助",
        "光熱費補助",
      ],
    },
    {
      icon: Plane,
      title: "長期休暇制度",
      description: "人生の節目に長期休暇を取得可能",
      details: [
        "サバティカル休暇（最大3ヶ月）",
        "育児休業最大2年",
        "介護休業最大1年",
        "留学休職制度",
      ],
    },
  ]

  const familySupport = [
    {
      icon: Baby,
      title: "育児支援",
      description: "子育てと仕事の両立を全面サポート",
      details: [
        "社内保育所完備",
        "ベビーシッター費用補助",
        "学童保育費補助",
        "子の看護休暇（年10日）",
        "育児時短勤務（小学6年まで）",
      ],
    },
    {
      icon: Users,
      title: "家族向けサービス",
      description: "社員の家族も含めたサポート",
      details: [
        "家族の医療費補助",
        "配偶者健康診断",
        "家族参加型イベント",
        "子供向けプログラミング教室",
      ],
    },
    {
      icon: Home,
      title: "住宅支援",
      description: "安心して暮らせる住環境をサポート",
      details: [
        "家賃補助制度（月5万円まで）",
        "住宅ローン優遇金利",
        "社宅・寮完備",
        "引越し費用全額負担",
      ],
    },
    {
      icon: Car,
      title: "通勤支援",
      description: "快適な通勤をサポート",
      details: [
        "交通費全額支給",
        "駐車場代補助",
        "自転車通勤手当",
        "新幹線通勤可能",
      ],
    },
  ]

  const careerGrowth = [
    {
      icon: GraduationCap,
      title: "教育・研修",
      description: "継続的な学習機会を提供",
      details: [
        "年間研修予算50万円/人",
        "資格取得費用全額補助",
        "オンライン学習プラットフォーム",
        "海外カンファレンス参加支援",
        "社内勉強会・技術共有会",
      ],
    },
    {
      icon: BookOpen,
      title: "書籍・学習支援",
      description: "自己研鑽を全面バックアップ",
      details: [
        "技術書購入費無制限",
        "電子書籍サービス提供",
        "社内ライブラリー",
        "学会・セミナー参加費補助",
      ],
    },
    {
      icon: Trophy,
      title: "表彰・インセンティブ",
      description: "成果と貢献を正当に評価",
      details: [
        "年間MVP表彰",
        "プロジェクト成功報奨金",
        "特許取得報奨金",
        "改善提案報奨制度",
      ],
    },
    {
      icon: Laptop,
      title: "開発環境支援",
      description: "最高の開発環境を提供",
      details: [
        "最新マシン選択可能",
        "開発ツール費用負担",
        "クラウド利用料補助",
        "個人開発プロジェクト支援",
      ],
    },
  ]

  const financialBenefits = [
    {
      icon: Coins,
      title: "退職金・年金",
      description: "将来の安心を確保",
      details: [
        "確定拠出年金制度",
        "退職金制度",
        "マッチング拠出",
        "ライフプラン相談",
      ],
    },
    {
      icon: Shield,
      title: "各種保険",
      description: "万が一に備える充実の保険制度",
      details: [
        "団体生命保険",
        "団体傷害保険",
        "所得補償保険",
        "がん保険団体割引",
      ],
    },
    {
      icon: Gift,
      title: "慶弔・お祝い金",
      description: "人生の節目をお祝い",
      details: [
        "結婚祝い金10万円",
        "出産祝い金5万円",
        "入学祝い金",
        "慶弔見舞金",
      ],
    },
    {
      icon: Building,
      title: "財形・投資支援",
      description: "資産形成をサポート",
      details: [
        "財形貯蓄制度",
        "社員持株会",
        "投資セミナー開催",
        "FP相談サービス",
      ],
    },
  ]

  const officePerks = [
    {
      icon: Coffee,
      title: "カフェ・飲食",
      description: "充実の飲食環境",
      details: [
        "フリードリンク（コーヒー、紅茶、ジュース）",
        "フリースナック",
        "社内カフェ（朝食・昼食無料）",
        "バリスタマシン完備",
      ],
    },
    {
      icon: Sparkles,
      title: "オフィス設備",
      description: "快適なオフィス環境",
      details: [
        "人間工学チェア",
        "昇降デスク",
        "集中ブース",
        "仮眠室",
        "マッサージルーム",
      ],
    },
  ]

  const uniqueBenefits = [
    {
      title: "20%ルール",
      description: "業務時間の20%を自己研鑽や新規プロジェクトに使用可能",
      badge: "イノベーション",
    },
    {
      title: "ワーケーション制度",
      description: "国内外のリゾート地で働きながら休暇を楽しめる",
      badge: "働き方",
    },
    {
      title: "ペット同伴出社",
      description: "ペット同伴可能なオフィスフロアを設置",
      badge: "ペット",
    },
    {
      title: "副業支援制度",
      description: "副業を通じたスキルアップを積極支援",
      badge: "キャリア",
    },
    {
      title: "社内起業制度",
      description: "新規事業アイデアに最大1000万円の投資",
      badge: "起業",
    },
    {
      title: "グローバル研修",
      description: "海外オフィスでの短期勤務プログラム",
      badge: "グローバル",
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            福利厚生
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            社員一人ひとりが最高のパフォーマンスを発揮できる環境を提供します
          </p>
        </div>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl">健康・医療</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              社員とその家族の健康を第一に考えた充実のサポート
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {healthBenefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="mt-0.5 text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl">ワークライフバランス</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              仕事と生活の調和を大切にする働き方改革
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {workLifeBalance.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="mt-0.5 text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl">家族・生活支援</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              社員とその家族の生活を総合的にサポート
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {familySupport.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="mt-0.5 text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl">成長・キャリア支援</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              プロフェッショナルとしての成長を全面バックアップ
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {careerGrowth.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="mt-0.5 text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl">経済的支援</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              現在と将来の経済的安定をサポート
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {financialBenefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className="h-4 w-4 text-primary" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                    <ul className="space-y-1">
                      {benefit.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-muted-foreground text-xs"
                        >
                          • {detail}
                        </li>
                      ))}
                    </ul>
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
                <h2 className="mb-4 font-bold text-3xl">オフィス環境・特典</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  快適で創造的なオフィス環境を提供
                </p>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                {officePerks.map((perk) => {
                  const Icon = perk.icon
                  return (
                    <div
                      key={perk.title}
                      className="rounded-lg bg-background p-6"
                    >
                      <h3 className="mb-3 flex items-center gap-2 font-semibold">
                        <Icon className="h-5 w-5 text-primary" />
                        {perk.title}
                      </h3>
                      <p className="mb-3 text-muted-foreground text-sm">
                        {perk.description}
                      </p>
                      <ul className="space-y-1">
                        {perk.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-muted-foreground text-sm"
                          >
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">
            ユニークな制度
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uniqueBenefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="transition-shadow hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <Badge className="mb-3">{benefit.badge}</Badge>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardContent className="py-12">
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                <div>
                  <p className="mb-2 font-bold text-4xl text-primary">125日</p>
                  <p className="text-muted-foreground text-sm">年間休日</p>
                </div>
                <div>
                  <p className="mb-2 font-bold text-4xl text-primary">95%</p>
                  <p className="text-muted-foreground text-sm">有給取得率</p>
                </div>
                <div>
                  <p className="mb-2 font-bold text-4xl text-primary">50万円</p>
                  <p className="text-muted-foreground text-sm">
                    年間研修予算/人
                  </p>
                </div>
                <div>
                  <p className="mb-2 font-bold text-4xl text-primary">98%</p>
                  <p className="text-muted-foreground text-sm">育休復帰率</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 font-bold text-3xl">
                充実した福利厚生で、あなたの成長を支援
              </h2>
              <p className="mx-auto mb-8 max-w-[600px]">
                TechCorpは、社員一人ひとりが最高のパフォーマンスを発揮し、
                充実した人生を送れるよう、業界トップクラスの福利厚生制度を提供しています。
              </p>
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
