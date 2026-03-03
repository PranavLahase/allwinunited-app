import { create } from 'zustand'
import { ReactNode } from 'react'

interface UIStore {
    isNavOpen: boolean
    isModalOpen: boolean
    modalContent: ReactNode | null
    openModal: (content: ReactNode) => void
    closeModal: () => void
    toggleNav: () => void
    closeNav: () => void
}

export const useUIStore = create<UIStore>((set) => ({
    isNavOpen: false,
    isModalOpen: false,
    modalContent: null,
    openModal: (content) => set({ isModalOpen: true, modalContent: content }),
    closeModal: () => set({ isModalOpen: false, modalContent: null }),
    toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
    closeNav: () => set({ isNavOpen: false })
}))
