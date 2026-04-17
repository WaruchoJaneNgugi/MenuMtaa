import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, MenuItem, Theme } from '../types'

interface AppState {
  theme: Theme
  toggleTheme: () => void
  cart: CartItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (name: string) => void
  clearCart: () => void
  cartTotal: () => number
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),

      cart: [],
      addToCart: (item) => {
        const cart = get().cart
        const existing = cart.find(c => c.name === item.name)
        if (existing) {
          set({ cart: cart.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c) })
        } else {
          set({ cart: [...cart, { ...item, qty: 1 }] })
        }
      },
      removeFromCart: (name) => {
        const cart = get().cart
        const existing = cart.find(c => c.name === name)
        if (!existing) return
        if (existing.qty === 1) {
          set({ cart: cart.filter(c => c.name !== name) })
        } else {
          set({ cart: cart.map(c => c.name === name ? { ...c, qty: c.qty - 1 } : c) })
        }
      },
      clearCart: () => set({ cart: [] }),
      cartTotal: () => get().cart.reduce((sum, c) => sum + c.priceNum * c.qty, 0),
    }),
    { name: 'menumtaa-store' }
  )
)
