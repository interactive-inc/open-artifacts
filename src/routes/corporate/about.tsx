import { createFileRoute } from "@tanstack/react-router"
import {
  Briefcase,
  Building,
  Calendar,
  Globe,
  MapPin,
  Users,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/about")({
  component: AboutPage,
})

/**
 * About Page
 */
function AboutPage(_props: Props) {
  const companyInfo = [
    { label: "会社名", value: "TechCorp Inc. (テックコープ株式会社)" },
    { label: "設立", value: "2010年4月1日" },
    { label: "資本金", value: "5億円" },
    { label: "従業員数", value: "1,200名 (2024年1月現在)" },
    { label: "代表取締役", value: "山田 太郎" },
    {
      label: "事業内容",
      value: "ITコンサルティング、システム開発、クラウドサービス",
    },
  ]

  const offices = [
    {
      name: "本社",
      address: "〒100-0001 東京都千代田区千代田1-1-1",
      tel: "03-1234-5678",
      type: "headquarters",
    },
    {
      name: "大阪支社",
      address: "〒530-0001 大阪府大阪市北区梅田1-1-1",
      tel: "06-1234-5678",
      type: "branch",
    },
    {
      name: "名古屋支社",
      address: "〒450-0001 愛知県名古屋市中村区名駅1-1-1",
      tel: "052-123-4567",
      type: "branch",
    },
    {
      name: "福岡支社",
      address: "〒810-0001 福岡県福岡市中央区天神1-1-1",
      tel: "092-123-4567",
      type: "branch",
    },
  ]

  const history = [
    { year: "2010", event: "TechCorp Inc. 設立" },
    { year: "2012", event: "大阪支社開設" },
    { year: "2014", event: "クラウドサービス事業開始" },
    { year: "2016", event: "名古屋支社、福岡支社開設" },
    { year: "2018", event: "AI事業部設立" },
    { year: "2020", event: "従業員数1,000名突破" },
    { year: "2022", event: "海外展開開始（シンガポール、ニューヨーク）" },
    { year: "2024", event: "創立15周年" },
  ]

  const values = [
    {
      icon: Globe,
      title: "グローバル視点",
      description: "世界を見据えた革新的なソリューションを提供します",
    },
    {
      icon: Users,
      title: "チームワーク",
      description: "多様性を尊重し、チーム一丸となって課題に取り組みます",
    },
    {
      icon: Briefcase,
      title: "プロフェッショナリズム",
      description: "高い専門性と倫理観を持って業務に取り組みます",
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            会社概要
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            テクノロジーの力で、より良い未来を創造する
          </p>
        </div>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">企業情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-2 border-b pb-4 last:border-0 last:pb-0 sm:grid-cols-3"
                  >
                    <dt className="font-medium text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="sm:col-span-2">{item.value}</dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">
            私たちの価値観
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <CardHeader className="text-center">
                    <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-bold text-3xl">拠点情報</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <Card key={office.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {office.type === "headquarters" ? (
                      <Building className="h-5 w-5 text-primary" />
                    ) : (
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    )}
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{office.address}</p>
                  <p>TEL: {office.tel}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-center font-bold text-3xl">沿革</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="relative space-y-4">
                <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-border" />
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center space-x-4"
                  >
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-background">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 rounded-lg bg-muted p-4">
                      <p className="mb-1 font-semibold text-primary">
                        {item.year}年
                      </p>
                      <p className="text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
