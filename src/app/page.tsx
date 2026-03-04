import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[var(--color-primary-allwin)]" data-brand="allwinunited">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(197, 204, 214, 0.15) 0%, transparent 70%)',
                    backgroundSize: '100% 100%'
                }}
            />

            {/* Header */}
            <div className="z-10 text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-28 h-28 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#F1F3F5] to-[#C5CCD6] shadow-[0_0_40px_rgba(197,204,214,0.2)] overflow-hidden p-2">
                    <Image src="/images/logos/allwinunited-logo.png" alt="AllwinUnited" width={100} height={100} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase mb-3">AllwinUnited</h1>
                <p className="text-[#C5CCD6] text-lg font-light tracking-wide">Your Trusted Partner</p>
            </div>

            {/* Brand Cards Container */}
            <div className="z-10 w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">

                {/* PAMO Card */}
                <Link
                    href="/pamo"
                    className="group flex-1 min-h-[220px] p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/40 flex flex-col justify-between cursor-pointer"
                >
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold text-white tracking-wide">pamo</h2>
                        <ArrowRight className="w-6 h-6 text-[#C5CCD6] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <div className="mt-8">
                        <p className="text-[#5F8C62] font-semibold mb-2">Lifestyle & Gadgets</p>
                        <p className="text-[#C5CCD6] text-sm leading-relaxed">Trending gadgets and premium lifestyle products delivered directly to you.</p>
                    </div>
                </Link>

                {/* SteelBridge Card */}
                <Link
                    href="/steelbridge"
                    className="group flex-1 min-h-[220px] p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/40 flex flex-col justify-between cursor-pointer"
                >
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold text-white tracking-normal uppercase">SteelBridge</h2>
                        <ArrowRight className="w-6 h-6 text-[#C5CCD6] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <div className="mt-8">
                        <p className="text-[#BFC5CC] font-semibold mb-2">Industrial Machinery</p>
                        <p className="text-[#C5CCD6] text-sm leading-relaxed">Precision CNC machines, welding robots, and powerful industrial machinery.</p>
                    </div>
                </Link>

            </div>

            {/* Footer */}
            <div className="absolute bottom-8 text-[#C5CCD6]/60 text-sm tracking-wide z-10">
                © {new Date().getFullYear()} AllwinUnited. All rights reserved.
            </div>
        </main>
    )
}
