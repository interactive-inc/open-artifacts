import { createFileRoute } from "@tanstack/react-router"
import { Bell, Heart, MessageCircle, Repeat2, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Route = createFileRoute("/sns/notifications")({
  component: Notifications,
})

type Notification = {
  id: string
  type: "like" | "retweet" | "follow" | "reply"
  user: {
    username: string
    displayName: string
    avatar: string
  }
  content?: string
  timestamp: string
}

function Notifications() {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "like",
      user: {
        username: "alice",
        displayName: "Alice Johnson",
        avatar: "https://github.com/shadcn.png",
      },
      content: "React 19がリリースされました！新機能がたくさんあって楽しみです",
      timestamp: "5分前",
    },
    {
      id: "2",
      type: "follow",
      user: {
        username: "bob",
        displayName: "Bob Smith",
        avatar: "https://github.com/shadcn.png",
      },
      timestamp: "1時間前",
    },
    {
      id: "3",
      type: "retweet",
      user: {
        username: "charlie",
        displayName: "Charlie Brown",
        avatar: "https://github.com/shadcn.png",
      },
      content: "TypeScriptの型システムは本当に強力ですね",
      timestamp: "3時間前",
    },
    {
      id: "4",
      type: "reply",
      user: {
        username: "alice",
        displayName: "Alice Johnson",
        avatar: "https://github.com/shadcn.png",
      },
      content:
        "TanStack Routerは素晴らしいライブラリですよ！ドキュメントも充実しています。",
      timestamp: "5時間前",
    },
  ]

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "like":
        return <Heart className="h-5 w-5 fill-current text-red-600" />
      case "retweet":
        return <Repeat2 className="h-5 w-5 text-green-600" />
      case "follow":
        return <UserPlus className="h-5 w-5 text-primary" />
      case "reply":
        return <MessageCircle className="h-5 w-5 text-primary" />
    }
  }

  const getNotificationText = (notification: Notification) => {
    switch (notification.type) {
      case "like":
        return "があなたの投稿にいいねしました"
      case "retweet":
        return "があなたの投稿をリツイートしました"
      case "follow":
        return "があなたをフォローしました"
      case "reply":
        return "があなたの投稿に返信しました"
    }
  }

  return (
    <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
      <div className="p-4">
        <h2 className="font-bold text-xl">通知</h2>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            すべて
          </TabsTrigger>
          <TabsTrigger
            value="verified"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            認証済み
          </TabsTrigger>
          <TabsTrigger
            value="mentions"
            className="rounded-none border-transparent border-b-2 px-8 pb-4 data-[state=active]:border-primary"
          >
            メンション
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 transition-colors hover:bg-muted/30"
              >
                <div className="flex gap-3">
                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={notification.user.avatar} />
                        <AvatarFallback>
                          {notification.user.displayName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <span className="font-semibold">
                          {notification.user.displayName}
                        </span>
                        <span className="text-muted-foreground">
                          {getNotificationText(notification)}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {notification.timestamp}
                      </span>
                    </div>
                    {notification.content && (
                      <p className="text-muted-foreground text-sm">
                        {notification.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="verified" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <Bell className="mx-auto mb-4 h-12 w-12 opacity-50" />
            <p>認証済みアカウントからの通知はまだありません</p>
          </div>
        </TabsContent>

        <TabsContent value="mentions" className="mt-0">
          <div className="p-8 text-center text-muted-foreground">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 opacity-50" />
            <p>メンションはまだありません</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
