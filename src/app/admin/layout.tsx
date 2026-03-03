"use client"

import { useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import { Lock, LogOut, Package, Settings, BarChart3, Users } from "lucide-react"

const ADMIN_PASSWORD = "allwin2026" // Change this in production or use env var

function LoginGate({ onLogin }: { onLogin: () => void }) {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem("admin_auth", "true")
            onLogin()
        } else {
            setError("Incorrect password. Try again.")
            setPassword("")
        }
    }

    return (
        <div className="min-h-screen bg-[#0E1A2B] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-[#15181A] border border-white/10 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white/60" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
                <p className="text-white/50 text-sm mb-8">Enter the admin password to continue.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(""); }}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-center text-lg tracking-widest"
                        autoFocus
                    />
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full h-12 bg-white text-[#0E1A2B] font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <Link href="/" className="inline-block mt-6 text-white/30 text-sm hover:text-white/60 transition-colors">
                    ← Back to site
                </Link>
            </div>
        </div>
    )
}

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [authed, setAuthed] = useState(false)
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        const stored = sessionStorage.getItem("admin_auth")
        if (stored === "true") setAuthed(true)
        setChecking(false)
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem("admin_auth")
        setAuthed(false)
    }

    if (checking) {
        return (
            <div className="min-h-screen bg-[#0E1A2B] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
        )
    }

    if (!authed) {
        return <LoginGate onLogin={() => setAuthed(true)} />
    }

    return (
        <div className="min-h-screen bg-[#0E1A2B] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#15181A] border-r border-white/10 flex flex-col fixed h-full">
                <div className="p-6 border-b border-white/10">
                    <Link href="/admin" className="text-xl font-bold text-white tracking-wider">
                        AU <span className="text-white/40 font-normal text-sm">Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 py-4">
                    <p className="px-6 text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">PAMO</p>
                    <Link href="/admin/pamo" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                        <Package className="w-4 h-4" /> Products & Pricing
                    </Link>

                    <div className="h-px bg-white/5 my-4 mx-6" />

                    <p className="px-6 text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">SteelBridge</p>
                    <Link href="/admin/steelbridge" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                        <Settings className="w-4 h-4" /> Machines & Pricing
                    </Link>
                    <Link href="/admin/steelbridge#leads" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                        <Users className="w-4 h-4" /> Quote Leads
                    </Link>

                    <div className="h-px bg-white/5 my-4 mx-6" />

                    <Link href="/admin" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                        <BarChart3 className="w-4 h-4" /> Dashboard
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-2 text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 rounded transition-colors"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    )
}
