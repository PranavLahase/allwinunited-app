'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function SteelbridgeNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full h-[80px] bg-[#1C1F22]/95 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/steelbridge" className="text-[28px] font-bold text-white tracking-widest uppercase hover:opacity-80 transition-opacity">
                    STEELBRIDGE
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <Link href="/steelbridge" className="text-[16px] font-medium text-white hover:text-[#BFC5CC] transition-colors">Home</Link>
                    <Link href="/steelbridge/products" className="text-[16px] font-medium text-white hover:text-[#BFC5CC] transition-colors">Machines</Link>
                    <Link href="/steelbridge/brochures" className="text-[16px] font-medium text-white hover:text-[#BFC5CC] transition-colors">Brochures</Link>

                    <Link
                        href="/steelbridge/quote"
                        className="btn-primary-steel ml-4"
                    >
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Menu Dropdown */}
            {mobileOpen && (
                <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#1C1F22]/98 backdrop-blur-lg border-b border-white/10 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col px-6 py-6 gap-4">
                        <Link href="/steelbridge" onClick={() => setMobileOpen(false)} className="text-[18px] font-medium text-white hover:text-[#BFC5CC] transition-colors py-2">Home</Link>
                        <Link href="/steelbridge/products" onClick={() => setMobileOpen(false)} className="text-[18px] font-medium text-white hover:text-[#BFC5CC] transition-colors py-2">Machines</Link>
                        <Link href="/steelbridge/brochures" onClick={() => setMobileOpen(false)} className="text-[18px] font-medium text-white hover:text-[#BFC5CC] transition-colors py-2">Brochures</Link>
                        <Link
                            href="/steelbridge/quote"
                            onClick={() => setMobileOpen(false)}
                            className="btn-primary-steel text-center mt-2"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
