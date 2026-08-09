import { createContext, type ReactNode, useContext, useState } from "react"

type User = {
  id: string
  username: string
  displayName: string
  avatar: string
  bio?: string
  location?: string
  website?: string
  joinDate?: string
  following?: number
  followers?: number
}

type Post = {
  id: string
  author: User
  content: string
  timestamp: string
  likes: number
  retweets: number
  replies: number
  isLiked: boolean
  isRetweeted: boolean
  isBookmarked: boolean
  media?: string[]
  replyTo?: string
}

type SNSContextType = {
  currentUser: User
  posts: Post[]
  users: User[]
  addPost: (content: string) => void
  toggleLike: (postId: string) => void
  toggleRetweet: (postId: string) => void
  toggleBookmark: (postId: string) => void
  followUser: (userId: string) => void
  unfollowUser: (userId: string) => void
}

const SNSContext = createContext<SNSContextType | undefined>(undefined)

export function SNSProvider({ children }: { children: ReactNode }) {
  const [currentUser] = useState<User>({
    id: "1",
    username: "johndoe",
    displayName: "John Doe",
    avatar: "https://github.com/shadcn.png",
    bio: "フルスタックエンジニア | React, TypeScript, Node.js | オープンソース貢献者",
    location: "東京, 日本",
    website: "https://example.com",
    joinDate: "2021年3月",
    following: 523,
    followers: 1842,
  })

  const [users] = useState<User[]>([
    {
      id: "2",
      username: "alice",
      displayName: "Alice Johnson",
      avatar: "https://github.com/shadcn.png",
      bio: "フロントエンドエンジニア | UI/UXデザイナー",
      location: "サンフランシスコ, CA",
      following: 321,
      followers: 892,
    },
    {
      id: "3",
      username: "bob",
      displayName: "Bob Smith",
      avatar: "https://github.com/shadcn.png",
      bio: "バックエンドエンジニア | Pythonエンジニア",
      location: "ニューヨーク, NY",
      following: 456,
      followers: 1234,
    },
    {
      id: "4",
      username: "charlie",
      displayName: "Charlie Brown",
      avatar: "https://github.com/shadcn.png",
      bio: "DevOpsエンジニア | クラウドアーキテクト",
      location: "シアトル, WA",
      following: 789,
      followers: 2341,
    },
  ])

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: users[0],
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
      author: users[1],
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
      author: users[2],
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
    {
      id: "4",
      author: currentUser,
      content: "週末のハッカソンで優勝しました！チームメンバーに感謝 🎉\n\n#hackathon #webdev",
      timestamp: "1日前",
      likes: 256,
      retweets: 45,
      replies: 28,
      isLiked: false,
      isRetweeted: false,
      isBookmarked: false,
    },
    {
      id: "5",
      author: users[0],
      content:
        "Tailwind CSS v4がリリースされました。新しいユーティリティクラスが追加されて、より柔軟なデザインが可能になりました。",
      timestamp: "1日前",
      likes: 67,
      retweets: 23,
      replies: 12,
      isLiked: true,
      isRetweeted: false,
      isBookmarked: false,
    },
  ])

  const addPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: currentUser,
      content,
      timestamp: "たった今",
      likes: 0,
      retweets: 0,
      replies: 0,
      isLiked: false,
      isRetweeted: false,
      isBookmarked: false,
    }
    setPosts([newPost, ...posts])
  }

  const toggleLike = (postId: string) => {
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

  const toggleRetweet = (postId: string) => {
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

  const toggleBookmark = (postId: string) => {
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

  const followUser = (userId: string) => {
    // モック実装
    console.log(`Following user ${userId}`)
  }

  const unfollowUser = (userId: string) => {
    // モック実装
    console.log(`Unfollowing user ${userId}`)
  }

  return (
    <SNSContext.Provider
      value={{
        currentUser,
        posts,
        users,
        addPost,
        toggleLike,
        toggleRetweet,
        toggleBookmark,
        followUser,
        unfollowUser,
      }}
    >
      {children}
    </SNSContext.Provider>
  )
}

export function useSNS() {
  const context = useContext(SNSContext)
  if (context === undefined) {
    throw new Error("useSNS must be used within a SNSProvider")
  }
  return context
}
