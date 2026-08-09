import { createLazyFileRoute } from "@tanstack/react-router"
import {
  BarChart2,
  Bookmark,
  Calendar,
  Heart,
  Image,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
  Smile,
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
import { Textarea } from "@/components/ui/textarea"

export const Route = createLazyFileRoute("/sns/")({
  component: Home,
})

type Post = {
  id: string
  author: {
    id: string
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
  media?: string[]
}

function Home() {
  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        id: "2",
        username: "alice",
        displayName: "Alice Johnson",
        avatar: "https://github.com/shadcn.png",
      },
      content: "React 19がリリースされました！新機能がたくさんあって楽しみです 🎉 #React #WebDev",
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
      author: {
        id: "3",
        username: "bob",
        displayName: "Bob Smith",
        avatar: "https://github.com/shadcn.png",
      },
      content:
        "TypeScriptの型システムは本当に強力ですね。型安全なコードを書くのが楽しくなってきました。\n\n#TypeScript #Programming",
      timestamp: "4時間前",
      likes: 28,
      retweets: 8,
      replies: 3,
      isLiked: true,
      isRetweeted: false,
      isBookmarked: true,
    },
    {
      id: "3",
      author: {
        id: "4",
        username: "charlie",
        displayName: "Charlie Brown",
        avatar: "https://github.com/shadcn.png",
      },
      content:
        "今日は新しいプロジェクトを開始しました。TanStack Routerを使ってみようと思います。何かアドバイスがあれば教えてください！",
      timestamp: "6時間前",
      likes: 15,
      retweets: 3,
      replies: 8,
      isLiked: false,
      isRetweeted: true,
      isBookmarked: false,
    },
  ])

  const handlePost = () => {
    if (!postContent.trim()) return

    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: "1",
        username: "johndoe",
        displayName: "John Doe",
        avatar: "https://github.com/shadcn.png",
      },
      content: postContent,
      timestamp: "たった今",
      likes: 0,
      retweets: 0,
      replies: 0,
      isLiked: false,
      isRetweeted: false,
      isBookmarked: false,
    }

    setPosts([newPost, ...posts])
    setPostContent("")
  }

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          }
        }
        return post
      }),
    )
  }

  const handleRetweet = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isRetweeted: !post.isRetweeted,
            retweets: post.isRetweeted ? post.retweets - 1 : post.retweets + 1,
          }
        }
        return post
      }),
    )
  }

  const handleBookmark = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isBookmarked: !post.isBookmarked,
          }
        }
        return post
      }),
    )
  }

  return (
    <>
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="p-4">
          <h2 className="font-bold text-xl">ホーム</h2>
        </div>
        <div className="flex">
          <button className="relative flex-1 py-4 transition-colors hover:bg-muted">
            <span className="font-semibold">おすすめ</span>
            <div className="absolute right-0 bottom-0 left-0 h-1 rounded-full bg-primary" />
          </button>
          <button className="flex-1 py-4 text-muted-foreground transition-colors hover:bg-muted">
            <span>フォロー中</span>
          </button>
        </div>
      </div>

      {/* 投稿フォーム */}
      <div className="border-b p-4">
        <div className="flex gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="今何してる？"
              className="min-h-[100px] resize-none border-none text-lg focus-visible:ring-0"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-primary">
                  <Image className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary">
                  <BarChart2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Calendar className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary">
                  <MapPin className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">{280 - postContent.length}</span>
                <Button
                  className="rounded-full"
                  disabled={!postContent.trim() || postContent.length > 280}
                  onClick={handlePost}
                >
                  投稿する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* タイムライン */}
      <div>
        {posts.map((post) => (
          <article key={post.id} className="border-b transition-colors hover:bg-muted/30">
            <div className="p-4">
              <div className="flex gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.displayName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-semibold">{post.author.displayName}</span>
                      <span className="ml-1 text-muted-foreground">@{post.author.username}</span>
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
                        <DropdownMenuItem>フォロー解除 @{post.author.username}</DropdownMenuItem>
                        <DropdownMenuItem>このポストを埋め込む</DropdownMenuItem>
                        <DropdownMenuItem>ポストを報告</DropdownMenuItem>
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
                      onClick={() => handleRetweet(post.id)}
                    >
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-sm">{post.retweets}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`gap-2 ${post.isLiked ? "text-red-600" : "text-muted-foreground"} hover:text-red-600`}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                      <span className="text-sm">{post.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`gap-2 ${post.isBookmarked ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
                      onClick={() => handleBookmark(post.id)}
                    >
                      <Bookmark className={`h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}`} />
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
      </div>
    </>
  )
}
