import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Award,
  Briefcase,
  Coffee,
  DollarSign,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Plane,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}

export const Route = createFileRoute("/corporate/careers")({
  component: CareersPage,
})

/**
 * Careers Page
 */
function CareersPage(_props: Props) {
  const positions = {
    engineer: [
      {
        title: "フロントエンドエンジニア",
        type: "正社員",
        location: "東京・リモート可",
        experience: "3年以上",
        salary: "500-800万円",
        description: "React、TypeScriptを使用したWebアプリケーション開発",
        requirements: [
          "React、TypeScriptの実務経験3年以上",
          "レスポンシブデザインの実装経験",
          "Git/GitHubを使用したチーム開発経験",
        ],
        skills: ["React", "TypeScript", "Next.js", "CSS"],
      },
      {
        title: "バックエンドエンジニア",
        type: "正社員",
        location: "東京・大阪",
        experience: "3年以上",
        salary: "550-900万円",
        description: "マイクロサービスアーキテクチャの設計・開発",
        requirements: [
          "Node.js、Python、Javaいずれかの実務経験3年以上",
          "RESTful API、GraphQLの設計・開発経験",
          "AWSまたはGCPの利用経験",
        ],
        skills: ["Node.js", "Python", "AWS", "Docker"],
      },
      {
        title: "AIエンジニア",
        type: "正社員",
        location: "東京",
        experience: "2年以上",
        salary: "600-1000万円",
        description: "機械学習モデルの開発・実装",
        requirements: [
          "機械学習・深層学習の実務経験",
          "Python、TensorFlow/PyTorchの利用経験",
          "統計学、線形代数の知識",
        ],
        skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
      },
    ],
    business: [
      {
        title: "プロダクトマネージャー",
        type: "正社員",
        location: "東京",
        experience: "5年以上",
        salary: "700-1200万円",
        description: "新規プロダクトの企画・開発・運用",
        requirements: [
          "プロダクト開発の経験5年以上",
          "エンジニアとの協働経験",
          "データ分析に基づく意思決定の経験",
        ],
        skills: ["Product Management", "Agile", "Data Analysis"],
      },
      {
        title: "営業（エンタープライズ）",
        type: "正社員",
        location: "東京・大阪",
        experience: "3年以上",
        salary: "500-900万円",
        description: "大手企業向けソリューション営業",
        requirements: [
          "法人営業経験3年以上",
          "IT業界での営業経験（優遇）",
          "提案型営業の経験",
        ],
        skills: ["B2B Sales", "Solution Selling", "CRM"],
      },
    ],
    newGrad: [
      {
        title: "総合職（新卒）",
        type: "新卒",
        location: "東京・大阪・名古屋・福岡",
        experience: "不問",
        salary: "初任給 月給30万円",
        description: "エンジニア、営業、マーケティングなど幅広い職種",
        requirements: [
          "2025年3月に大学・大学院を卒業見込みの方",
          "ITへの興味・関心がある方",
          "チームで働くことが好きな方",
        ],
        skills: ["学習意欲", "コミュニケーション", "論理的思考"],
      },
    ],
  }

  const benefits = [
    {
      icon: Heart,
      title: "健康・医療",
      items: [
        "健康保険・厚生年金完備",
        "健康診断（年2回）",
        "人間ドック補助",
        "インフルエンザ予防接種",
      ],
    },
    {
      icon: Home,
      title: "ワークライフバランス",
      items: [
        "フレックスタイム制",
        "リモートワーク（週3日まで）",
        "有給休暇（初年度15日）",
        "育児・介護休暇",
      ],
    },
    {
      icon: TrendingUp,
      title: "スキルアップ",
      items: [
        "技術書購入支援",
        "カンファレンス参加費補助",
        "資格取得支援制度",
        "社内勉強会",
      ],
    },
    {
      icon: Coffee,
      title: "オフィス環境",
      items: [
        "フリードリンク",
        "社内カフェ",
        "リフレッシュルーム",
        "最新機器の貸与",
      ],
    },
    {
      icon: DollarSign,
      title: "金銭的サポート",
      items: [
        "通勤手当（全額支給）",
        "住宅手当",
        "確定拠出年金",
        "従業員持株会",
      ],
    },
    {
      icon: Plane,
      title: "その他",
      items: [
        "社員旅行（年1回）",
        "クラブ活動支援",
        "誕生日休暇",
        "リフレッシュ休暇",
      ],
    },
  ]

  const culture = [
    {
      title: "オープンな文化",
      description:
        "役職や部署の壁を越えて、自由に意見交換ができる風通しの良い環境です。",
    },
    {
      title: "挑戦を歓迎",
      description: "新しいアイデアや技術への挑戦を積極的にサポートします。",
    },
    {
      title: "多様性の尊重",
      description: "国籍、性別、年齢を問わず、多様な人材が活躍しています。",
    },
    {
      title: "成長機会",
      description: "個人の成長を重視し、様々なキャリアパスを用意しています。",
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            採用情報
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            一緒に未来を創造する仲間を募集しています
          </p>
        </div>

        <section className="mb-16">
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center md:p-12">
            <h2 className="mb-4 font-bold text-3xl">Why TechCorp?</h2>
            <p className="mx-auto mb-8 max-w-[800px] text-muted-foreground">
              TechCorpは、最先端の技術と革新的なアイデアで、世界中の企業のデジタルトランスフォーメーションを支援しています。
              私たちと一緒に、テクノロジーの力で社会に貢献しませんか？
            </p>
            <div className="mx-auto grid max-w-[800px] grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="font-bold text-3xl text-primary">15年</p>
                <p className="text-muted-foreground text-sm">事業継続年数</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-3xl text-primary">1,200+</p>
                <p className="text-muted-foreground text-sm">従業員数</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-3xl text-primary">30+</p>
                <p className="text-muted-foreground text-sm">グローバル拠点</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-3xl text-primary">95%</p>
                <p className="text-muted-foreground text-sm">社員満足度</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">募集職種</h2>
          <Tabs defaultValue="engineer" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="engineer">エンジニア</TabsTrigger>
              <TabsTrigger value="business">ビジネス</TabsTrigger>
              <TabsTrigger value="newGrad">新卒</TabsTrigger>
            </TabsList>
            <TabsContent value="engineer" className="mt-6 space-y-6">
              {positions.engineer.map((position) => (
                <Card key={position.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {position.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {position.description}
                        </CardDescription>
                      </div>
                      <Badge>{position.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">応募要件</p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        {position.requirements.map((req, index) => (
                          <li key={index}>・{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link to="/corporate/contact">この職種に応募する</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="business" className="mt-6 space-y-6">
              {positions.business.map((position) => (
                <Card key={position.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {position.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {position.description}
                        </CardDescription>
                      </div>
                      <Badge>{position.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">応募要件</p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        {position.requirements.map((req, index) => (
                          <li key={index}>・{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link to="/corporate/contact">この職種に応募する</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="newGrad" className="mt-6 space-y-6">
              {positions.newGrad.map((position) => (
                <Card key={position.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {position.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {position.description}
                        </CardDescription>
                      </div>
                      <Badge variant="default">
                        <GraduationCap className="mr-1 h-3 w-3" />
                        {position.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">応募要件</p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        {position.requirements.map((req, index) => (
                          <li key={index}>・{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link to="/corporate/contact">エントリーする</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">福利厚生</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {benefit.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
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
          <h2 className="mb-8 text-center font-bold text-3xl">私たちの文化</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {culture.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="mb-4 font-bold text-3xl">あなたの力を待っています</h2>
          <p className="mx-auto mb-8 max-w-[600px]">
            TechCorpで、あなたのスキルと情熱を活かして、
            一緒に革新的なソリューションを創り出しましょう。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/corporate/contact">応募・お問い合わせ</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              カジュアル面談を申し込む
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
