import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Cpu,
  Database,
  Layers,
  Shield,
  Users,
  Zap,
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

export const Route = createFileRoute("/corporate/solutions")({
  component: SolutionsPage,
})

type Solution = {
  id: string
  title: string
  category: string
  description: string
  icon: any
  benefits: string[]
  features: {
    title: string
    description: string
  }[]
  useCases: string[]
  technologies: string[]
}

/**
 * Solutions Page
 */
function SolutionsPage(_props: Props) {
  const solutions: Solution[] = [
    {
      id: "dx-platform",
      title: "DXプラットフォーム",
      category: "platform",
      description:
        "企業のデジタルトランスフォーメーションを加速する統合プラットフォーム",
      icon: Layers,
      benefits: [
        "既存システムとのシームレスな統合",
        "段階的な導入が可能",
        "ROI改善率平均150%",
        "導入期間を50%短縮",
      ],
      features: [
        {
          title: "ローコード開発環境",
          description:
            "ビジュアルプログラミングで迅速なアプリケーション開発を実現",
        },
        {
          title: "API管理",
          description: "マイクロサービスアーキテクチャに対応したAPI統合管理",
        },
        {
          title: "データ統合",
          description:
            "異なるデータソースを一元管理し、リアルタイム分析を可能に",
        },
        {
          title: "プロセス自動化",
          description: "RPA技術による業務プロセスの自動化と効率化",
        },
      ],
      useCases: [
        "全社的なデジタル変革",
        "レガシーシステムの刷新",
        "業務プロセスの自動化",
        "データドリブン経営の実現",
      ],
      technologies: [
        "Kubernetes",
        "Docker",
        "React",
        "Node.js",
        "Python",
        "RPA",
      ],
    },
    {
      id: "ai-analytics",
      title: "AI分析ソリューション",
      category: "ai",
      description: "機械学習と深層学習を活用した高度なデータ分析と予測",
      icon: Cpu,
      benefits: [
        "予測精度95%以上",
        "意思決定速度3倍向上",
        "コスト削減率40%",
        "24時間365日自動分析",
      ],
      features: [
        {
          title: "予測分析",
          description: "過去データから未来のトレンドを高精度で予測",
        },
        {
          title: "異常検知",
          description: "リアルタイムで異常を検出し、即座にアラート通知",
        },
        {
          title: "自然言語処理",
          description: "テキストデータから価値ある洞察を自動抽出",
        },
        {
          title: "画像認識",
          description: "高度な画像解析による品質管理と自動分類",
        },
      ],
      useCases: ["需要予測", "品質管理", "顧客行動分析", "リスク管理"],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"],
    },
    {
      id: "cloud-infrastructure",
      title: "クラウドインフラ",
      category: "cloud",
      description: "スケーラブルで信頼性の高いクラウド基盤の構築と運用",
      icon: Cloud,
      benefits: [
        "99.99%の可用性保証",
        "インフラコスト50%削減",
        "無制限のスケーラビリティ",
        "セキュアな環境",
      ],
      features: [
        {
          title: "マルチクラウド対応",
          description: "AWS、Azure、GCPを統合管理し、最適なリソース配分を実現",
        },
        {
          title: "自動スケーリング",
          description: "負荷に応じて自動的にリソースを調整",
        },
        {
          title: "災害復旧",
          description: "自動バックアップと迅速な復旧システム",
        },
        {
          title: "コスト最適化",
          description: "使用状況を分析し、最適なコスト配分を提案",
        },
      ],
      useCases: [
        "Webサービス基盤",
        "ビッグデータ処理",
        "IoTプラットフォーム",
        "開発環境構築",
      ],
      technologies: [
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
        "Ansible",
        "Kubernetes",
      ],
    },
    {
      id: "security-solution",
      title: "セキュリティソリューション",
      category: "security",
      description: "Zero Trustモデルに基づく包括的なセキュリティ対策",
      icon: Shield,
      benefits: [
        "セキュリティインシデント90%削減",
        "コンプライアンス100%達成",
        "24時間監視体制",
        "即時脅威対応",
      ],
      features: [
        {
          title: "Zero Trust アーキテクチャ",
          description: "すべてのアクセスを検証し、最小権限の原則を実装",
        },
        {
          title: "脅威インテリジェンス",
          description: "最新の脅威情報を収集し、プロアクティブな防御",
        },
        {
          title: "SOC運用",
          description: "24時間365日のセキュリティオペレーションセンター",
        },
        {
          title: "インシデント対応",
          description: "迅速な脅威検出と自動対応システム",
        },
      ],
      useCases: [
        "企業ネットワーク保護",
        "クラウドセキュリティ",
        "エンドポイント保護",
        "データ保護",
      ],
      technologies: ["SIEM", "EDR", "WAF", "CASB", "DLP", "IAM"],
    },
    {
      id: "data-platform",
      title: "データプラットフォーム",
      category: "data",
      description: "ビッグデータの収集、処理、分析を一元化する統合基盤",
      icon: Database,
      benefits: [
        "データ処理速度10倍向上",
        "ストレージコスト60%削減",
        "リアルタイム分析",
        "データ品質99.9%保証",
      ],
      features: [
        {
          title: "データレイク",
          description: "構造化・非構造化データを統合管理",
        },
        {
          title: "ETLパイプライン",
          description: "自動化されたデータ変換と読み込み処理",
        },
        {
          title: "リアルタイム処理",
          description: "ストリーミングデータの即時分析",
        },
        {
          title: "データガバナンス",
          description: "データ品質管理とコンプライアンス対応",
        },
      ],
      useCases: [
        "ビジネスインテリジェンス",
        "データウェアハウス",
        "IoTデータ分析",
        "カスタマー360",
      ],
      technologies: [
        "Hadoop",
        "Spark",
        "Kafka",
        "Elasticsearch",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      id: "collaboration-suite",
      title: "コラボレーションスイート",
      category: "collaboration",
      description: "リモートワーク時代の新しい働き方を支援する統合ツール",
      icon: Users,
      benefits: [
        "生産性30%向上",
        "コミュニケーション時間50%短縮",
        "プロジェクト完了率95%",
        "従業員満足度40%向上",
      ],
      features: [
        {
          title: "統合コミュニケーション",
          description: "チャット、ビデオ会議、ファイル共有を一元化",
        },
        {
          title: "プロジェクト管理",
          description: "タスク管理と進捗追跡の自動化",
        },
        {
          title: "ナレッジベース",
          description: "組織の知識を体系化し、検索可能に",
        },
        {
          title: "ワークフロー自動化",
          description: "承認プロセスと定型業務の自動化",
        },
      ],
      useCases: [
        "リモートワーク環境",
        "プロジェクト管理",
        "社内コミュニケーション",
        "ナレッジマネジメント",
      ],
      technologies: [
        "Microsoft 365",
        "Slack",
        "Zoom",
        "Notion",
        "Jira",
        "Confluence",
      ],
    },
  ]

  const categories = [
    { id: "all", label: "すべて", icon: Zap },
    { id: "platform", label: "プラットフォーム", icon: Layers },
    { id: "ai", label: "AI・分析", icon: Cpu },
    { id: "cloud", label: "クラウド", icon: Cloud },
    { id: "security", label: "セキュリティ", icon: Shield },
    { id: "data", label: "データ", icon: Database },
    { id: "collaboration", label: "コラボレーション", icon: Users },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            ソリューション
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            お客様のビジネス課題に最適なソリューションをご提供します
          </p>
        </div>

        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories
              .filter((cat) => cat.id !== "all")
              .map((category) => {
                const Icon = category.icon
                return (
                  <Card
                    key={category.id}
                    className="cursor-pointer transition-shadow hover:shadow-lg"
                  >
                    <CardHeader>
                      <Icon className="mb-2 h-10 w-10 text-primary" />
                      <CardTitle>{category.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {category.id === "platform" &&
                          "ビジネスの基盤となる統合プラットフォーム"}
                        {category.id === "ai" &&
                          "AIを活用した高度な分析と自動化"}
                        {category.id === "cloud" &&
                          "柔軟でスケーラブルなクラウド基盤"}
                        {category.id === "security" &&
                          "包括的なセキュリティ対策"}
                        {category.id === "data" &&
                          "データの価値を最大化する基盤"}
                        {category.id === "collaboration" &&
                          "チームの生産性を向上させるツール"}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-center font-bold text-3xl">
            詳細ソリューション
          </h2>
          <Tabs defaultValue="platform" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {categories
                .filter((cat) => cat.id !== "all")
                .map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
            </TabsList>

            {categories
              .filter((cat) => cat.id !== "all")
              .map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-8"
                >
                  {solutions
                    .filter((solution) => solution.category === category.id)
                    .map((solution) => {
                      const Icon = solution.icon
                      return (
                        <Card key={solution.id} className="mb-8">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <Icon className="h-12 w-12 text-primary" />
                              <div>
                                <CardTitle className="text-2xl">
                                  {solution.title}
                                </CardTitle>
                                <CardDescription className="mt-1 text-base">
                                  {solution.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="mb-3 font-semibold">
                                導入メリット
                              </h4>
                              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {solution.benefits.map((benefit, index) => (
                                  <div
                                    key={index}
                                    className="flex items-start gap-2"
                                  >
                                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span className="text-sm">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="mb-3 font-semibold">主要機能</h4>
                              <div className="grid gap-4 md:grid-cols-2">
                                {solution.features.map((feature, index) => (
                                  <div
                                    key={index}
                                    className="rounded-lg border p-4"
                                  >
                                    <h5 className="mb-1 font-medium">
                                      {feature.title}
                                    </h5>
                                    <p className="text-muted-foreground text-sm">
                                      {feature.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="mb-3 font-semibold">活用シーン</h4>
                              <div className="flex flex-wrap gap-2">
                                {solution.useCases.map((useCase, index) => (
                                  <Badge key={index} variant="secondary">
                                    {useCase}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="mb-3 font-semibold">使用技術</h4>
                              <div className="flex flex-wrap gap-2">
                                {solution.technologies.map((tech, index) => (
                                  <Badge key={index} variant="outline">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                              <Button asChild>
                                <Link to="/corporate/contact">
                                  詳細を問い合わせる
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="outline">
                                資料をダウンロード
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                </TabsContent>
              ))}
          </Tabs>
        </section>

        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 font-bold text-3xl">
                最適なソリューションをご提案します
              </h2>
              <p className="mx-auto mb-8 max-w-[600px] text-muted-foreground">
                お客様のビジネス課題や目標をお聞かせください。
                専門のコンサルタントが最適なソリューションをご提案いたします。
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/corporate/contact">
                    無料コンサルティング
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/corporate/case-studies">導入事例を見る</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
