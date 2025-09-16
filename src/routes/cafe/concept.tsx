import { createFileRoute } from "@tanstack/react-router"
import {
  Award,
  BookOpen,
  Coffee,
  Globe,
  Heart,
  Leaf,
  Mountain,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const Route = createFileRoute("/cafe/concept")({
  component: ConceptPage,
})

/**
 * Concept Page
 */
function ConceptPage() {
  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      subtitle: "品質への徹底的なこだわり",
      description:
        "世界中の産地から厳選した豆を、最適な焙煎度で仕上げ、一杯一杯丁寧に抽出しています。",
    },
    {
      icon: Heart,
      title: "Hospitality",
      subtitle: "温かいおもてなし",
      description:
        "すべてのお客様に、心地よい時間と空間を提供することを大切にしています。",
    },
    {
      icon: Users,
      title: "Community",
      subtitle: "地域とのつながり",
      description:
        "地域の皆様の憩いの場として、コミュニティの中心となる場所を目指しています。",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      subtitle: "持続可能な取り組み",
      description:
        "環境に配慮した豆の調達から、エコフレンドリーな店舗運営まで実践しています。",
    },
  ]

  const story = [
    {
      year: "2018",
      title: "創業への想い",
      description:
        "世界中のコーヒー農園を巡り、本当に美味しいコーヒーを日本に届けたいという想いから始まりました。",
    },
    {
      year: "2019",
      title: "理想の豆との出会い",
      description:
        "エチオピアの小さな農園で、運命的な豆と出会い、直接取引を開始しました。",
    },
    {
      year: "2020",
      title: "Artisan Coffee オープン",
      description:
        "原宿の地に、こだわりのコーヒーと温かい空間を提供する店舗をオープンしました。",
    },
    {
      year: "2024",
      title: "現在、そして未来へ",
      description:
        "地域の皆様に愛される店舗として、さらなる品質向上と新しい価値の創造に挑戦し続けています。",
    },
  ]

  const craftmanship = [
    {
      icon: Mountain,
      title: "産地へのこだわり",
      description:
        "標高1,500m以上の高地で栽培された、アラビカ種100%の豆のみを使用。各産地の特性を活かした豆選びを行っています。",
      details: [
        "直接取引による品質管理",
        "年2回の産地訪問",
        "生産者との継続的な関係構築",
      ],
    },
    {
      icon: Sparkles,
      title: "焙煎への情熱",
      description:
        "豆の個性を最大限に引き出す焙煎。毎朝、その日の気温や湿度に合わせて、焙煎プロファイルを調整しています。",
      details: [
        "自家焙煎による鮮度管理",
        "豆ごとの最適な焙煎度",
        "焙煎後48時間以内の提供",
      ],
    },
    {
      icon: Target,
      title: "抽出の技術",
      description:
        "バリスタチャンピオンを輩出した技術力。温度、時間、圧力まで、すべてにこだわった抽出を行います。",
      details: [
        "豆に合わせた抽出レシピ",
        "定期的な味覚チェック",
        "バリスタの継続的な訓練",
      ],
    },
  ]

  const philosophy = {
    title: "一杯のコーヒーから始まる物語",
    subtitle: "Every cup tells a story",
    content: [
      "朝の始まりに飲む一杯のコーヒー。",
      "友人との楽しい会話を彩るコーヒー。",
      "仕事の合間にほっと一息つくコーヒー。",
      "",
      "コーヒーは単なる飲み物ではなく、",
      "人生の様々な場面に寄り添う、特別な存在です。",
      "",
      "私たちArtisan Coffeeは、",
      "その一杯一杯に込められた想いを大切に、",
      "最高の品質と心温まるサービスで、",
      "お客様の日常に小さな幸せをお届けします。",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-stone-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/800')] bg-center bg-cover opacity-40" />
        <div className="relative flex h-full items-center justify-center text-white">
          <div className="max-w-3xl px-6 text-center">
            <h1 className="mb-6 font-serif text-5xl md:text-7xl">
              {philosophy.title}
            </h1>
            <p className="font-light text-2xl text-white/80 italic">
              {philosophy.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="prose prose-lg mx-auto">
              {philosophy.content.map((line, index) => (
                <p key={index} className="text-stone-600 leading-relaxed">
                  {line || <br />}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl text-stone-800">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              私たちが大切にしている4つの価値観
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="text-center transition-shadow hover:shadow-lg"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="mb-1 font-medium text-lg">{value.title}</h3>
                    <p className="mb-3 text-amber-600 text-sm">
                      {value.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl text-stone-800">
              Craftsmanship
            </h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              豆選びから一杯のコーヒーになるまで、すべての工程にこだわり抜いています
            </p>
          </div>
          <div className="mx-auto max-w-5xl space-y-12">
            {craftmanship.map((craft, index) => {
              const Icon = craft.icon
              return (
                <div
                  key={craft.title}
                  className={`grid items-center gap-8 md:grid-cols-2 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                          <Icon className="h-6 w-6 text-amber-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-3 font-serif text-2xl text-stone-800">
                          {craft.title}
                        </h3>
                        <p className="mb-4 text-stone-600 leading-relaxed">
                          {craft.description}
                        </p>
                        <ul className="space-y-2">
                          {craft.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-sm text-stone-600"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <img
                      src="/api/placeholder/600/400"
                      alt={craft.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl text-stone-800">
              Our Story
            </h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              コーヒーへの情熱から始まった、私たちの物語
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="-translate-x-1/2 absolute left-1/2 h-full w-0.5 transform bg-amber-200" />
              {story.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } mb-12`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <span className="font-bold text-amber-600 text-lg">
                          {item.year}
                        </span>
                        <h3 className="mt-2 mb-3 font-serif text-stone-800 text-xl">
                          {item.title}
                        </h3>
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="-translate-x-1/2 absolute left-1/2 h-4 w-4 transform rounded-full border-4 border-white bg-amber-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl text-stone-800">
              Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              コーヒーへの情熱を共有する、プロフェッショナルなチーム
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-stone-200" />
                <h3 className="font-medium text-lg">田中 健太</h3>
                <p className="mb-2 text-amber-600 text-sm">Head Roaster</p>
                <p className="text-sm text-stone-600">
                  15年の焙煎経験を持つスペシャリスト
                </p>
                <div className="mt-3 flex justify-center gap-2">
                  <Award className="h-4 w-4 text-amber-600" />
                  <span className="text-stone-500 text-xs">
                    Japan Roasting Champion 2022
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-stone-200" />
                <h3 className="font-medium text-lg">佐藤 美咲</h3>
                <p className="mb-2 text-amber-600 text-sm">Head Barista</p>
                <p className="text-sm text-stone-600">
                  ラテアートチャンピオンの技術
                </p>
                <div className="mt-3 flex justify-center gap-2">
                  <Award className="h-4 w-4 text-amber-600" />
                  <span className="text-stone-500 text-xs">
                    Latte Art Champion 2023
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-stone-200" />
                <h3 className="font-medium text-lg">山田 太郎</h3>
                <p className="mb-2 text-amber-600 text-sm">Owner & Manager</p>
                <p className="text-sm text-stone-600">
                  コーヒーへの情熱を形にする創業者
                </p>
                <div className="mt-3 flex justify-center gap-2">
                  <Globe className="h-4 w-4 text-amber-600" />
                  <span className="text-stone-500 text-xs">
                    Q Grader Certified
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container text-center">
          <BookOpen className="mx-auto mb-6 h-12 w-12 text-amber-600" />
          <h2 className="mb-4 font-serif text-3xl text-stone-800">
            私たちの想いを、一杯のコーヒーに込めて
          </h2>
          <p className="mx-auto max-w-2xl text-stone-600">
            Artisan Coffeeで、特別な一杯をお楽しみください。
            皆様のご来店を心よりお待ちしております。
          </p>
        </div>
      </section>
    </div>
  )
}
