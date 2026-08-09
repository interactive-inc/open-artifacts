import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Heart,
  Link as LinkIcon,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
} from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Route = createFileRoute("/sns/profile/$username")({
  component: Profile,
})

type User = {
  id: string
  username: string
  displayName: string
  avatar: string
  coverImage?: string
  bio: string
  location: string
  website: string
  joinDate: string
  following: number
  followers: number
  isFollowing: boolean
}

type Post = {
  id: string
  content: string
  timestamp: string
  likes: number
  retweets: number
  replies: number
  isLiked: boolean
  isRetweeted: boolean
  isBookmarked: boolean
  media?: string[]
}

function Profile() {
  const { username } = Route.useParams()
  const [isFollowing, setIsFollowing] = useState(false)

  // モックユーザーデータ
  const user: User = {
    id: "1",
    username: username,
    displayName:
      username === "johndoe"
        ? "John Doe"
        : username === "alice"
          ? "Alice Johnson"
          : username === "bob"
            ? "Bob Smith"
            : "Charlie Brown",
    avatar: "https://github.com/shadcn.png",
    coverImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop",
    bio: "フルスタックエンジニア | React, TypeScript, Node.js | オープンソース貢献者 | コーヒー愛好家 ☕",
    location: "東京, 日本",
    website: "https://example.com",
    joinDate: "2021年3月",
    following: 523,
    followers: 1842,
    isFollowing: isFollowing,
  }

  // モック投稿データ
  const [posts] = useState<Post[]>([
    {
      id: "1",
      content: "今日は新しいReactのフックについて学びました。useIdは本当に便利ですね！",
      timestamp: "2時間前",
      likes: 42,
      retweets: 12,
      replies: 5,
      isLiked: false,
      isRetweeted: false,
      isBookmarked: false,
    },
    {
      id: "2",
      content:
        "TypeScriptの型推論が改善されて、開発体験が向上しました。\n\n特にテンプレートリテラル型の進化は素晴らしい！",
      timestamp: "1日前",
      likes: 128,
      retweets: 38,
      replies: 12,
      isLiked: true,
      isRetweeted: false,
      isBookmarked: true,
    },
    {
      id: "3",
      content: "週末のハッカソンで優勝しました！チームメンバーに感謝 🎉\n\n#hackathon #webdev",
      timestamp: "3日前",
      likes: 256,
      retweets: 45,
      replies: 28,
      isLiked: true,
      isRetweeted: true,
      isBookmarked: false,
    },
  ])

  const [selectedTab, setSelectedTab] = useState("posts")

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <>
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 p-4">
          <Link to="/sns">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h2 className="font-bold text-xl">{user.displayName}</h2>
            <p className="text-muted-foreground text-sm">{posts.length} ポスト</p>
          </div>
        </div>
      </div>

      {/* プロフィール */}
      <div>
        {/* カバー画像 */}
        <div className="h-48 bg-muted">
          {user.coverImage && (
            <img src={user.coverImage} alt="Cover" className="h-full w-full object-cover" />
          )}
        </div>

        {/* プロフィール情報 */}
        <div className="px-4 pb-4">
          <div className="-mt-16 mb-4 flex items-start justify-between">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.displayName[0]}</AvatarFallback>
            </Avatar>
            <div className="mt-20 flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>共有</DropdownMenuItem>
                  <DropdownMenuItem>リストに追加/削除</DropdownMenuItem>
                  <DropdownMenuItem>ミュート @{user.username}</DropdownMenuItem>
                  <DropdownMenuItem>ブロック @{user.username}</DropdownMenuItem>
                  <DropdownMenuItem>報告 @{user.username}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {username !== "johndoe" ? (
                <Button
                  className="rounded-full"
                  variant={isFollowing ? "outline" : "default"}
                  onClick={handleFollow}
                >
                  {isFollowing ? "フォロー中" : "フォロー"}
                </Button>
              ) : (
                <Button variant="outline" className="rounded-full">
                  プロフィールを編集
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h1 className="font-bold text-xl">{user.displayName}</h1>
              <p className="text-muted-foreground">@{user.username}</p>
            </div>

            <p className="text-sm">{user.bio}</p>

            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
              {user.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </span>
              )}
              {user.website && (
                <a
                  href={user.website}
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <LinkIcon className="h-4 w-4" />
                  {user.website.replace("https://", "")}
                </a>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {user.joinDate}に参加
              </span>
            </div>

            <div className="flex gap-4 text-sm">
              <Link to="#" className="hover:underline">
                <span className="font-bold">{user.following}</span>
                <span className="text-muted-foreground"> フォロー中</span>
              </Link>
              <Link to="#" className="hover:underline">
                <span className="font-bold">{user.followers}</span>
                <span className="text-muted-foreground"> フォロワー</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* タブ */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="posts"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            ポスト
          </TabsTrigger>
          <TabsTrigger
            value="replies"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            返信
          </TabsTrigger>
          <TabsTrigger
            value="media"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            メディア
          </TabsTrigger>
          <TabsTrigger
            value="likes"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            いいね
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-0">
          {posts.map((post) => (
            <article key={post.id} className="border-b transition-colors hover:bg-muted/30">
              <div className="p-4">
                <div className="flex gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.displayName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-semibold">{user.displayName}</span>
                        <span className="ml-1 text-muted-foreground">@{user.username}</span>
                        <span className="ml-1 text-muted-foreground">·</span>
                        <span className="ml-1 text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>このポストを埋め込む</DropdownMenuItem>
                          <DropdownMenuItem>ポストを削除</DropdownMenuItem>
                          <DropdownMenuItem>ポストを固定</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="mt-1 whitespace-pre-wrap">{post.content}</div>
                    <div className="-ml-2 mt-3 flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-muted-foreground hover:text-primary"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.replies}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 ${post.isRetweeted ? "text-green-600" : "text-muted-foreground"} hover:text-green-600`}
                      >
                        <Repeat2 className="h-4 w-4" />
                        <span className="text-sm">{post.retweets}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 ${post.isLiked ? "text-red-600" : "text-muted-foreground"} hover:text-red-600`}
                      >
                        <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                        <span className="text-sm">{post.likes}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 ${post.isBookmarked ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
                      >
                        <Bookmark
                          className={`h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}`}
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-muted-foreground hover:text-primary"
                      >
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </TabsContent>

        <TabsContent value="replies" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <p>まだ返信がありません</p>
          </div>
        </TabsContent>

        <TabsContent value="media" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <p>まだメディアがありません</p>
          </div>
        </TabsContent>

        <TabsContent value="likes" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <p>まだいいねがありません</p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
