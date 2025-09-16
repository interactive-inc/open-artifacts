import { createFileRoute } from "@tanstack/react-router"
import { Mail, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export const Route = createFileRoute("/sns/messages")({
  component: Messages,
})

type Message = {
  id: string
  user: {
    username: string
    displayName: string
    avatar: string
  }
  lastMessage: string
  timestamp: string
  unread: boolean
}

function Messages() {
  const messages: Message[] = [
    {
      id: "1",
      user: {
        username: "alice",
        displayName: "Alice Johnson",
        avatar: "https://github.com/shadcn.png",
      },
      lastMessage: "そのプロジェクトについてもっと教えてもらえますか？",
      timestamp: "5分前",
      unread: true,
    },
    {
      id: "2",
      user: {
        username: "bob",
        displayName: "Bob Smith",
        avatar: "https://github.com/shadcn.png",
      },
      lastMessage: "ミーティングの時間を変更できますか？",
      timestamp: "1時間前",
      unread: true,
    },
    {
      id: "3",
      user: {
        username: "charlie",
        displayName: "Charlie Brown",
        avatar: "https://github.com/shadcn.png",
      },
      lastMessage: "ありがとうございました！",
      timestamp: "3時間前",
      unread: false,
    },
    {
      id: "4",
      user: {
        username: "david",
        displayName: "David Wilson",
        avatar: "https://github.com/shadcn.png",
      },
      lastMessage: "コードレビューをお願いします",
      timestamp: "昨日",
      unread: false,
    },
    {
      id: "5",
      user: {
        username: "emma",
        displayName: "Emma Davis",
        avatar: "https://github.com/shadcn.png",
      },
      lastMessage: "新しいデザインを見てください",
      timestamp: "2日前",
      unread: false,
    },
  ]

  return (
    <>
      <div className="sticky top-0 z-10 border-b bg-background">
        <div className="p-4">
          <h2 className="mb-4 font-bold text-xl">メッセージ</h2>
          <div className="relative">
            <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform text-muted-foreground" />
            <Input
              placeholder="ダイレクトメッセージを検索"
              className="rounded-full border-none bg-muted pl-10"
            />
          </div>
        </div>
      </div>

      <div className="divide-y">
        {messages.length === 0 ? (
          <div className="p-8 text-center">
            <Mail className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mb-2 font-bold text-lg">
              メッセージを送信してみましょう
            </h3>
            <p className="text-muted-foreground">
              プライベートな会話を始めて、写真やメッセージを共有しましょう。
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className="cursor-pointer p-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={message.user.avatar} />
                  <AvatarFallback>{message.user.displayName[0]}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          {message.user.displayName}
                        </span>
                        <span className="text-muted-foreground">
                          @{message.user.username}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground text-sm">
                          {message.timestamp}
                        </span>
                      </div>
                      <p
                        className={`mt-1 truncate text-sm ${message.unread ? "font-semibold" : "text-muted-foreground"}`}
                      >
                        {message.lastMessage}
                      </p>
                    </div>
                    {message.unread && (
                      <Badge className="h-2 w-2 rounded-full bg-primary p-0 text-primary-foreground" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
