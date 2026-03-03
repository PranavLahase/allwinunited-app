import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
}

interface CartStore {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    updateQty: (id: string, qty: number) => void
    clearCart: () => void
    total: () => number
    itemCount: () => number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem) => {
                set((state) => {
                    const existing = state.items.find((i) => i.id === newItem.id)
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.id === newItem.id
                                    ? { ...i, quantity: i.quantity + newItem.quantity }
                                    : i
                            ),
                        }
                    }
                    return { items: [...state.items, newItem] }
                })
            },
            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                }))
            },
            updateQty: (id, qty) => {
                set((state) => ({
                    items: state.items.map((i) =>
                        i.id === id ? { ...i, quantity: Math.max(0, qty) } : i
                    ),
                }))
            },
            clearCart: () => set({ items: [] }),
            total: () => {
                return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
            },
            itemCount: () => {
                return get().items.reduce((count, item) => count + item.quantity, 0)
            }
        }),
        {
            name: 'pamo-cart-storage',
        }
    )
)
