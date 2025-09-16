import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"

type Props = {}

export const Route = createFileRoute("/corporate/message")({
  component: MessagePage,
})

/**
 * CEO Message Page
 */
function MessagePage(_props: Props) {
  return (
    <div className="py-12 lg:py-16">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            代表メッセージ
          </h1>
          <p className="text-muted-foreground">代表取締役社長 山田 太郎</p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8 lg:p-12">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <span className="font-bold text-6xl text-primary/60">
                    山田
                  </span>
                </div>
                <h2 className="mb-1 font-semibold text-xl">山田 太郎</h2>
                <p className="text-muted-foreground">代表取締役社長 CEO</p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="font-medium text-primary text-xl">
                  テクノロジーで、すべての企業に可能性を
                </p>

                <p>
                  私たちTechCorp
                  Inc.は、2010年の創業以来、「テクノロジーの力で、より良い未来を創造する」という理念のもと、
                  お客様のデジタルトランスフォーメーションを支援してまいりました。
                </p>

                <p>
                  今、世界は急速に変化しています。デジタル技術の進化は、私たちの生活やビジネスのあり方を根本から変えつつあります。
                  この変化の波は、規模や業種を問わず、すべての企業に押し寄せています。
                </p>

                <h3 className="mt-8 mb-4 font-bold text-2xl">私たちの使命</h3>

                <p>
                  私たちの使命は、最先端のテクノロジーを、すべての企業が活用できる形で提供することです。
                  大企業だけでなく、中小企業やスタートアップも、等しくデジタル変革の恩恵を受けられる社会を実現したいと考えています。
                </p>

                <p>
                  そのために、私たちは常にお客様の声に耳を傾け、真のニーズを理解することから始めます。
                  技術ありきではなく、お客様のビジネス課題を解決するための最適なソリューションを提供することが、私たちの役割だと考えています。
                </p>

                <h3 className="mt-8 mb-4 font-bold text-2xl">
                  イノベーションへの挑戦
                </h3>

                <p>
                  AI、クラウド、IoT、ブロックチェーン...新しい技術は次々と登場しています。
                  私たちは、これらの技術を単に導入するのではなく、お客様のビジネスに真の価値をもたらす形で活用する方法を追求し続けています。
                </p>

                <p>
                  イノベーションは技術だけではありません。働き方、組織文化、ビジネスモデル、すべてにおいて革新を起こすことが、
                  真のデジタルトランスフォーメーションだと私たちは信じています。
                </p>

                <h3 className="mt-8 mb-4 font-bold text-2xl">
                  人材こそが最大の資産
                </h3>

                <p>
                  TechCorpの最大の強みは、情熱と専門性を持った1,200名を超える仲間たちです。
                  エンジニア、デザイナー、コンサルタント、営業、それぞれが自らの専門性を磨き続け、
                  チーム一丸となってお客様の成功に貢献しています。
                </p>

                <p>
                  私たちは、多様性を尊重し、一人ひとりが最大限に能力を発揮できる環境づくりに努めています。
                  異なる背景や視点を持つメンバーが協働することで、革新的なアイデアが生まれると信じているからです。
                </p>

                <h3 className="mt-8 mb-4 font-bold text-2xl">
                  持続可能な未来へ
                </h3>

                <p>
                  企業活動は、社会に対する責任を伴います。私たちは、テクノロジーを通じて、
                  環境問題の解決、社会課題への対応、そして持続可能な経済成長に貢献していきます。
                </p>

                <p>
                  カーボンニュートラルの実現、働き方改革の推進、地域社会への貢献...
                  これらはすべて、私たちが取り組むべき重要な課題です。
                  テクノロジー企業として、これらの課題解決に積極的に取り組んでまいります。
                </p>

                <h3 className="mt-8 mb-4 font-bold text-2xl">未来への約束</h3>

                <p>
                  これからも私たちは、お客様とともに成長し、社会に貢献し続ける企業でありたいと考えています。
                  変化を恐れず、常に挑戦し続けることで、お客様の期待を超える価値を提供してまいります。
                </p>

                <p>
                  最後に、日頃よりTechCorpをご支援いただいているお客様、パートナー企業の皆様、
                  そして株主の皆様に心より感謝申し上げます。
                </p>

                <p className="font-semibold">
                  これからも、「テクノロジーで、より良い未来を創造する」という理念のもと、
                  全社一丸となって邁進してまいります。今後ともご支援のほど、よろしくお願い申し上げます。
                </p>

                <div className="mt-12 border-t pt-8">
                  <p className="text-right">
                    <span className="mb-2 block">TechCorp Inc.</span>
                    <span className="block font-bold text-xl">
                      代表取締役社長 CEO
                    </span>
                    <span className="mt-2 block font-bold text-2xl">
                      山田 太郎
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="mb-4 font-bold">経歴</h3>
            <dl className="space-y-2 text-sm">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">1975年</dt>
                <dd className="sm:col-span-2">東京都生まれ</dd>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">1998年</dt>
                <dd className="sm:col-span-2">東京大学工学部卒業</dd>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">1998年</dt>
                <dd className="sm:col-span-2">大手IT企業入社</dd>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">2005年</dt>
                <dd className="sm:col-span-2">
                  米国MBA取得（スタンフォード大学）
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">2008年</dt>
                <dd className="sm:col-span-2">ベンチャー企業CTO就任</dd>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">2010年</dt>
                <dd className="sm:col-span-2">
                  TechCorp Inc. 創業、代表取締役社長就任
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <dt className="text-muted-foreground">現在</dt>
                <dd className="sm:col-span-2">
                  経済産業省 DX推進委員会委員、日本IT協会理事
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
