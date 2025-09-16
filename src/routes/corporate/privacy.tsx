import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/privacy")({
  component: PrivacyPage,
})

/**
 * Privacy Page
 */
function PrivacyPage(_props: Props) {
  const sections = [
    {
      title: "1. 個人情報の定義",
      content: [
        "本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報をいいます。",
        "生存する個人に関する情報であって、氏名、生年月日、その他の記述により特定の個人を識別できるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を指します。",
      ],
    },
    {
      title: "2. 個人情報の収集",
      content: [
        "当社は、以下の場合に個人情報を収集することがあります：",
        "・サービスのお申込み、お問い合わせの際",
        "・採用応募の際",
        "・イベント、セミナーへのご参加の際",
        "・その他、サービス提供に必要な場合",
      ],
    },
    {
      title: "3. 個人情報の利用目的",
      content: [
        "当社は、収集した個人情報を以下の目的で利用いたします：",
        "・サービスの提供、運営、維持、改善",
        "・お客様からのお問い合わせへの対応",
        "・当社サービスに関する情報の提供",
        "・採用選考活動",
        "・その他、上記利用目的に付随する目的",
      ],
    },
    {
      title: "4. 個人情報の第三者提供",
      content: [
        "当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：",
        "・法令に基づく場合",
        "・人の生命、身体又は財産の保護のために必要がある場合",
        "・公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合",
        "・国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合",
      ],
    },
    {
      title: "5. 個人情報の管理",
      content: [
        "当社は、個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。",
      ],
    },
    {
      title: "6. 個人情報の開示・訂正・削除",
      content: [
        "お客様ご本人から個人情報の開示・訂正・削除のご依頼があった場合は、ご本人であることを確認の上、法令の定めに従い対応いたします。",
      ],
    },
    {
      title: "7. Cookie（クッキー）の使用について",
      content: [
        "当社のウェブサイトでは、お客様により良いサービスを提供するため、Cookie（クッキー）を使用することがあります。",
        "Cookieは、ウェブサイトがお客様のブラウザに送信する小さなデータファイルで、お客様のコンピュータに保存されます。",
        "お客様は、ブラウザの設定によりCookieの受け取りを拒否することができます。",
      ],
    },
    {
      title: "8. SSL（Secure Socket Layer）について",
      content: [
        "当社のウェブサイトでは、個人情報を入力していただくページにはSSL暗号化通信を採用しております。",
      ],
    },
    {
      title: "9. プライバシーポリシーの変更",
      content: [
        "当社は、必要に応じて本プライバシーポリシーを変更することがあります。",
        "変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。",
      ],
    },
    {
      title: "10. お問い合わせ",
      content: [
        "本プライバシーポリシーに関するお問い合わせは、以下の窓口までお願いいたします。",
        "",
        "TechCorp Inc.",
        "個人情報保護管理責任者",
        "メール：privacy@techcorp.example.com",
        "電話：03-1234-5678",
        "受付時間：平日 9:00-18:00",
      ],
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            プライバシーポリシー
          </h1>
          <p className="text-muted-foreground">最終更新日：2024年1月1日</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>個人情報保護方針</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              TechCorp
              Inc.（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、
              その保護の徹底を図ることが社会的責任であると考え、以下のプライバシーポリシーを定め、
              これを実施し、維持することを宣言いたします。
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>制定日：2010年4月1日</p>
          <p>最終改訂日：2024年1月1日</p>
          <p className="mt-4">TechCorp Inc.</p>
          <p>代表取締役 山田 太郎</p>
        </div>
      </div>
    </div>
  )
}
