import { useEffect, useState, type ReactNode } from "react"

const STORAGE_KEY = "shop-favorites"

// グローバルなお気に入り管理
class FavoritesManager {
  private static instance: FavoritesManager
  private favorites: Set<string> = new Set()
  private listeners: Array<() => void> = []

  private constructor() {
    this.loadFromStorage()
  }

  static getInstance(): FavoritesManager {
    if (!FavoritesManager.instance) {
      FavoritesManager.instance = new FavoritesManager()
    }
    return FavoritesManager.instance
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as string[]
        this.favorites = new Set(parsed)
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage:", error)
    }
  }

  private saveToStorage() {
    const favoritesArray = Array.from(this.favorites)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesArray))
  }

  addFavorite(productId: string) {
    this.favorites.add(productId)
    this.saveToStorage()
    this.notifyListeners()
  }

  removeFavorite(productId: string) {
    this.favorites.delete(productId)
    this.saveToStorage()
    this.notifyListeners()
  }

  toggleFavorite(productId: string) {
    if (this.favorites.has(productId)) {
      this.removeFavorite(productId)
    } else {
      this.addFavorite(productId)
    }
  }

  isFavorite(productId: string): boolean {
    return this.favorites.has(productId)
  }

  getFavorites(): Set<string> {
    return new Set(this.favorites)
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener())
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function useFavorites() {
  const manager = FavoritesManager.getInstance()
  const [favorites, setFavorites] = useState(() => manager.getFavorites())

  useEffect(() => {
    const unsubscribe = manager.subscribe(() => {
      setFavorites(manager.getFavorites())
    })

    return unsubscribe
  }, [manager])

  return {
    favorites,
    addFavorite: (productId: string) => manager.addFavorite(productId),
    removeFavorite: (productId: string) => manager.removeFavorite(productId),
    toggleFavorite: (productId: string) => manager.toggleFavorite(productId),
    isFavorite: (productId: string) => manager.isFavorite(productId),
  }
}
