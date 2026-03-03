'use client'

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { useCartStore } from "@/stores/cart.store"

export function PamoNavbar() {
    const itemCount = useCartStore((state) => state.itemCount())

    return (
        <nav className="fixed top-0 w-full h-[72px] bg-[#EFECE0]/95 backdrop-blur-md z-50 border-b border-[#202222]/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/pamo" className="text-[32px] font-bold text-[#202222] tracking-tight hover:opacity-80 transition-opacity">
                    pamo
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/pamo" className="text-[16px] font-medium text-[#202222] hover:text-[#5F8C62] transition-colors">Home</Link>
                    <Link href="/pamo/products" className="text-[16px] font-medium text-[#202222] hover:text-[#5F8C62] transition-colors">Products</Link>
                    <Link href="/pamo/about" className="text-[16px] font-medium text-[#202222] hover:text-[#5F8C62] transition-colors">About</Link>
                </div>

                {/* Cart & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Link href="/pamo/cart" className="relative p-2 text-[#5F8C62] hover:bg-[#5F8C62]/10 rounded-full transition-colors">
                        <ShoppingCart className="w-6 h-6" />
                        {itemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-[#202222] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </Link>

                    <button className="md:hidden p-2 text-[#202222]">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </nav>
    )
}
