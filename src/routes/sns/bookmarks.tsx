import { createFileRoute } from "@tanstack/react-router"
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Route = createFileRoute("/sns/bookmarks")({
  component: Bookmarks,
})

type BookmarkedPost = {
  id: string
  author: {
    username: string
    displayName: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  retweets: number
  replies: number
  isLiked: boolean
  isRetweeted: boolean
  isBookmarked: boolean
}

function Bookmarks() {
  const bookmarkedPosts: BookmarkedPost[] = [
    {
      id: "1",
      author: {
        username: "alice",
        displayName: "Alice Johnson",
        avatar: "https://github.com/shadcn.png",
      },
      content:
        "React Server Componentsの実装パターンについて詳しく解説しました。\n\nブログ記事はこちら→ https://example.com/rsc-patterns",
      timestamp: "2日前",
      likes: 128,
      retweets: 45,
      replies: 23,
      isLiked: true,
      isRetweeted: false,
      isBookmarked: true,
    },
    {
      id: "2",
      author: {
        username: "bob",
        displayName: "Bob Smith",
        avatar: "https://github.com/shadcn.png",
      },
      content:
        "TypeScriptの型パズルを解いてみました。\n\n型の推論がどのように動作するか理解するのに役立ちます。",
      timestamp: "3日前",
      likes: 89,
      retweets: 32,
      replies: 15,
      isLiked: false,
      isRetweeted: false,
      isBookmarked: true,
    },
    {
      id: "3",
      author: {
        username: "charlie",
        displayName: "Charlie Brown",
        avatar: "https://github.com/shadcn.png",
      },
      content:
        "新しいCSS機能の @container クエリがすごい！\n\nレスポンシブデザインがもっと柔軟になります。",
      timestamp: "1週間前",
      likes: 256,
      retweets: 78,
      replies: 34,
      isLiked: true,
      isRetweeted: true,
      isBookmarked: true,
    },
  ]

  return (
    <>
      <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="p-4">
          <h2 className="font-bold text-xl">ブックマーク</h2>
          <p className="text-muted-foreground text-sm">@johndoe</p>
        </div>
      </div>

      <div>
        {bookmarkedPosts.length === 0 ? (
          <div className="p-8 text-center">
            <Bookmark className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mb-2 font-bold text-lg">
              まだブックマークがありません
            </h3>
            <p className="text-muted-foreground">
              後で読みたい投稿を保存しましょう
            </p>
          </div>
        ) : (
          bookmarkedPosts.map((post) => (
            <article
              key={post.id}
              className="border-b transition-colors hover:bg-muted/30"
            >
              <div className="p-4">
                <div className="flex gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>
                      {post.author.displayName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-semibold">
                          {post.author.displayName}
                        </span>
                        <span className="ml-1 text-muted-foreground">
                          @{post.author.username}
                        </span>
                        <span className="ml-1 text-muted-foreground">·</span>
                        <span className="ml-1 text-muted-foreground">
                          {post.timestamp}
                        </span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            ブックマークから削除
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            このポストを埋め込む
                          </DropdownMenuItem>
                          <DropdownMenuItem>ポストを報告</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="mt-1 whitespace-pre-wrap">
                      {post.content}
                    </div>
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
                        <Heart
                          className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`}
                        />
                        <span className="text-sm">{post.likes}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-primary hover:text-primary"
                      >
                        <Bookmark className="h-4 w-4 fill-current" />
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
          ))
        )}
      </div>
    </>
  )
}
