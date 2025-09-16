import { createFileRoute } from "@tanstack/react-router"
import { Search, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Route = createFileRoute("/sns/explore")({
  component: Explore,
})

function Explore() {
  const trendingTopics = [
    {
      rank: 1,
      tag: "#プログラミング",
      posts: "15.2K",
      description: "プログラミングに関する最新情報",
    },
    {
      rank: 2,
      tag: "#React",
      posts: "8.5K",
      description: "Reactの新機能について",
    },
    {
      rank: 3,
      tag: "#TypeScript",
      posts: "5.3K",
      description: "TypeScript 5.0の新機能",
    },
    {
      rank: 4,
      tag: "#WebDev",
      posts: "12.1K",
      description: "ウェブ開発のトレンド",
    },
    { rank: 5, tag: "#AI", posts: "25.8K", description: "AI技術の最新動向" },
    {
      rank: 6,
      tag: "#MachineLearning",
      posts: "18.3K",
      description: "機械学習のベストプラクティス",
    },
    {
      rank: 7,
      tag: "#CloudComputing",
      posts: "9.7K",
      description: "クラウドサービスの比較",
    },
    {
      rank: 8,
      tag: "#DevOps",
      posts: "7.2K",
      description: "DevOpsのツールとプラクティス",
    },
  ]

  return (
    <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
      <div className="p-4">
        <div className="relative">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform text-muted-foreground" />
          <Input
            placeholder="検索"
            className="rounded-full border-none bg-muted pl-10"
          />
        </div>
      </div>
      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="trending"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            トレンド
          </TabsTrigger>
          <TabsTrigger
            value="news"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            ニュース
          </TabsTrigger>
          <TabsTrigger
            value="sports"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            スポーツ
          </TabsTrigger>
          <TabsTrigger
            value="entertainment"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            エンタメ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="mt-0">
          <div className="divide-y">
            {trendingTopics.map((topic) => (
              <div
                key={topic.tag}
                className="cursor-pointer p-4 transition-colors hover:bg-muted/30"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span>{topic.rank}位 · トレンド</span>
                    </div>
                    <h3 className="font-bold text-lg">{topic.tag}</h3>
                    <p className="text-muted-foreground text-sm">
                      {topic.description}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {topic.posts} posts
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="news" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <p>ニュースはまだありません</p>
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <p>スポーツニュースはまだありません</p>
          </div>
        </TabsContent>

        <TabsContent value="entertainment" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <p>エンタメニュースはまだありません</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
