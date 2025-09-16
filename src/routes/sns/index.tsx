import { createFileRoute, Link, Outlet } from "@tanstack/react-router"
import {
  Bell,
  Bookmark,
  Home,
  Mail,
  MoreHorizontal,
  Search,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const Route = createFileRoute("/sns/")({
  component: SNSLayout,
})

function SNSLayout() {
  const currentUser = {
    id: "1",
    username: "johndoe",
    displayName: "John Doe",
    avatar: "https://github.com/shadcn.png",
  }

  const navItems = [
    { icon: Home, label: "ホーム", path: "/sns" },
    { icon: Search, label: "探索", path: "/sns/explore" },
    { icon: Bell, label: "通知", path: "/sns/notifications" },
    { icon: Mail, label: "メッセージ", path: "/sns/messages" },
    { icon: Bookmark, label: "ブックマーク", path: "/sns/bookmarks" },
    {
      icon: User,
      label: "プロフィール",
      path: `/sns/profile/${currentUser.username}`,
    },
  ]

  const trendingTopics = [
    { tag: "#プログラミング", posts: "15.2K" },
    { tag: "#React", posts: "8.5K" },
    { tag: "#TypeScript", posts: "5.3K" },
    { tag: "#WebDev", posts: "12.1K" },
    { tag: "#AI", posts: "25.8K" },
  ]

  const suggestedUsers = [
    {
      id: "2",
      username: "alice",
      displayName: "Alice Johnson",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "3",
      username: "bob",
      displayName: "Bob Smith",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "4",
      username: "charlie",
      displayName: "Charlie Brown",
      avatar: "https://github.com/shadcn.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          {/* 左サイドバー */}
          <div className="sticky top-0 col-span-3 h-screen py-4">
            <div className="space-y-2">
              <h1 className="mb-8 px-4 font-bold text-2xl">SNS Clone</h1>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-4 rounded-full px-4 py-3 transition-colors hover:bg-muted"
                    activeOptions={{ exact: item.path === "/sns" }}
                    activeProps={{
                      className: "font-bold",
                    }}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="text-lg">{item.label}</span>
                  </Link>
                ))}
              </nav>
              <div className="px-4 pt-4">
                <Button className="w-full rounded-full" size="lg">
                  投稿する
                </Button>
              </div>
            </div>
            <div className="absolute right-0 bottom-4 left-0 px-4">
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between rounded-full p-3 hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback>
                      {currentUser.displayName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold">{currentUser.displayName}</p>
                    <p className="text-muted-foreground text-sm">
                      @{currentUser.username}
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="col-span-6 min-h-screen border-x">
            <Outlet />
          </div>

          {/* 右サイドバー */}
          <div className="col-span-3 space-y-4 px-4 py-4">
            {/* 検索バー */}
            <div className="sticky top-4 space-y-4">
              <Card className="p-4">
                <input
                  type="text"
                  placeholder="検索"
                  className="w-full rounded-full border-none bg-muted px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
                />
              </Card>

              {/* トレンド */}
              <Card className="p-4">
                <h3 className="mb-4 font-bold text-lg">今のトレンド</h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <div
                      key={topic.tag}
                      className="cursor-pointer rounded p-2 transition-colors hover:bg-muted"
                    >
                      <p className="font-semibold text-primary">{topic.tag}</p>
                      <p className="text-muted-foreground text-sm">
                        {topic.posts} posts
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* おすすめユーザー */}
              <Card className="p-4">
                <h3 className="mb-4 font-bold text-lg">おすすめユーザー</h3>
                <div className="space-y-3">
                  {suggestedUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between"
                    >
                      <Link
                        to={`/sns/profile/${user.username}`}
                        className="flex items-center gap-3 hover:opacity-80"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.displayName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{user.displayName}</p>
                          <p className="text-muted-foreground text-sm">
                            @{user.username}
                          </p>
                        </div>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        フォロー
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
