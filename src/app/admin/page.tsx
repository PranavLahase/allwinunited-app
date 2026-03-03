"use client"

import { Package, Settings, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-white/50 mb-10">Welcome to the AllwinUnited Admin Panel.</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "PAMO Products", value: "12", icon: <Package className="w-5 h-5" />, color: "text-[#5F8C62]" },
                    { label: "PAMO Orders", value: "0", icon: <TrendingUp className="w-5 h-5" />, color: "text-blue-400" },
                    { label: "SB Machines", value: "6", icon: <Settings className="w-5 h-5" />, color: "text-[#BFC5CC]" },
                    { label: "Quote Leads", value: "0", icon: <Users className="w-5 h-5" />, color: "text-amber-400" },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#15181A] border border-white/10 p-6">
                        <div className={`${stat.color} mb-4`}>{stat.icon}</div>
                        <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-white/40 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Links */}
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/admin/pamo" className="bg-[#15181A] border border-white/10 hover:border-[#5F8C62]/50 p-6 transition-colors group">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#5F8C62] transition-colors mb-2">Manage PAMO Products</h3>
                    <p className="text-white/40 text-sm">Add, edit, or remove products and update pricing.</p>
                </Link>
                <Link href="/admin/steelbridge" className="bg-[#15181A] border border-white/10 hover:border-[#BFC5CC]/50 p-6 transition-colors group">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#BFC5CC] transition-colors mb-2">Manage SteelBridge</h3>
                    <p className="text-white/40 text-sm">Manage machines, pricing, and view incoming quote leads.</p>
                </Link>
            </div>
        </div>
    )
}
