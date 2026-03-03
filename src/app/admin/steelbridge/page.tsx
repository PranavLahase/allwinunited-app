"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Save, X, Search, Users, Settings } from "lucide-react"

interface Machine {
    id: number
    name: string
    category: string
    priceMin: number
    priceMax: number
    inStock: boolean
}

interface Lead {
    id: number
    name: string
    company: string
    email: string
    phone: string
    machine: string
    quantity: number
    date: string
    status: "new" | "contacted" | "quoted" | "closed"
}

const initialMachines: Machine[] = [
    { id: 1, name: "SB-TC100 Series", category: "CNC Turning", priceMin: 850000, priceMax: 1100000, inStock: true },
    { id: 2, name: "SB-TC300 Series", category: "CNC Turning", priceMin: 1050000, priceMax: 1300000, inStock: true },
    { id: 3, name: "SB-TC500 Series", category: "CNC Turning", priceMin: 1250000, priceMax: 1500000, inStock: true },
    { id: 4, name: "SB-VMC400", category: "Vertical Machining", priceMin: 1800000, priceMax: 2200000, inStock: false },
    { id: 5, name: "SB-LW200", category: "Laser Welding", priceMin: 2500000, priceMax: 3200000, inStock: true },
    { id: 6, name: "SB-WR100", category: "Welding Robot", priceMin: 3500000, priceMax: 4500000, inStock: true },
]

const initialLeads: Lead[] = [
    { id: 1, name: "Rajesh Kumar", company: "ABC Industries", email: "rajesh@abc.com", phone: "+91 98765 43210", machine: "SB-TC500 Series", quantity: 2, date: "2026-03-01", status: "new" },
    { id: 2, name: "Priya Sharma", company: "XYZ Manufacturing", email: "priya@xyz.com", phone: "+91 91234 56789", machine: "SB-VMC400", quantity: 1, date: "2026-02-28", status: "contacted" },
    { id: 3, name: "Amit Patel", company: "Steel Works Ltd", email: "amit@steelworks.com", phone: "+91 87654 32100", machine: "SB-LW200", quantity: 3, date: "2026-02-25", status: "quoted" },
]

export default function SteelbridgeAdminPage() {
    const [machines, setMachines] = useState<Machine[]>(initialMachines)
    const [leads, setLeads] = useState<Lead[]>(initialLeads)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editForm, setEditForm] = useState<Partial<Machine>>({})
    const [showAdd, setShowAdd] = useState(false)
    const [newMachine, setNewMachine] = useState<Partial<Machine>>({ name: "", category: "", priceMin: 0, priceMax: 0, inStock: true })
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState<"machines" | "leads">("machines")

    const startEdit = (machine: Machine) => {
        setEditingId(machine.id)
        setEditForm({ ...machine })
    }

    const saveEdit = () => {
        if (editingId === null) return
        setMachines(machines.map(m => m.id === editingId ? { ...m, ...editForm } as Machine : m))
        setEditingId(null)
        setEditForm({})
    }

    const deleteMachine = (id: number) => {
        if (confirm("Are you sure you want to delete this machine?")) {
            setMachines(machines.filter(m => m.id !== id))
        }
    }

    const addMachine = () => {
        if (!newMachine.name || !newMachine.priceMin) return
        const newId = Math.max(...machines.map(m => m.id), 0) + 1
        setMachines([...machines, { id: newId, name: newMachine.name!, category: newMachine.category || "Uncategorized", priceMin: newMachine.priceMin!, priceMax: newMachine.priceMax || newMachine.priceMin!, inStock: newMachine.inStock ?? true }])
        setNewMachine({ name: "", category: "", priceMin: 0, priceMax: 0, inStock: true })
        setShowAdd(false)
    }

    const updateLeadStatus = (id: number, status: Lead["status"]) => {
        setLeads(leads.map(l => l.id === id ? { ...l, status } : l))
    }

    const filteredMachines = machines.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.category.toLowerCase().includes(search.toLowerCase()))

    const statusColors: Record<Lead["status"], string> = {
        new: "bg-blue-500/10 text-blue-400",
        contacted: "bg-amber-500/10 text-amber-400",
        quoted: "bg-purple-500/10 text-purple-400",
        closed: "bg-green-500/10 text-green-400",
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">SteelBridge Admin</h1>
            <p className="text-white/40 text-sm mb-8">Manage machines, pricing, and incoming quote leads.</p>

            {/* Tabs */}
            <div className="flex gap-1 mb-8 bg-[#15181A] border border-white/10 p-1 w-fit">
                <button
                    onClick={() => setActiveTab("machines")}
                    className={`flex items-center gap-2 px-5 py-2 text-sm font-bold transition-colors ${activeTab === "machines" ? "bg-white text-[#0E1A2B]" : "text-white/50 hover:text-white"}`}
                >
                    <Settings className="w-4 h-4" /> Machines ({machines.length})
                </button>
                <button
                    onClick={() => setActiveTab("leads")}
                    className={`flex items-center gap-2 px-5 py-2 text-sm font-bold transition-colors ${activeTab === "leads" ? "bg-white text-[#0E1A2B]" : "text-white/50 hover:text-white"}`}
                >
                    <Users className="w-4 h-4" /> Leads ({leads.length})
                </button>
            </div>

            {/* ========== MACHINES TAB ========== */}
            {activeTab === "machines" && (
                <>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="relative flex-1 max-w-md">
                            <Search className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search machines..." className="w-full pl-11 pr-4 py-3 bg-[#15181A] border border-white/10 text-white placeholder-white/30 focus:border-[#BFC5CC] outline-none text-sm" />
                        </div>
                        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 px-5 py-3 bg-white text-[#0E1A2B] font-bold text-sm hover:bg-white/90 transition-colors">
                            <Plus className="w-4 h-4" /> Add Machine
                        </button>
                    </div>

                    {showAdd && (
                        <div className="bg-[#15181A] border border-white/30 p-6 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-white">New Machine</h3>
                                <button onClick={() => setShowAdd(false)} className="text-white/40 hover:text-white"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                <input placeholder="Machine Name" value={newMachine.name} onChange={(e) => setNewMachine({ ...newMachine, name: e.target.value })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none" />
                                <input placeholder="Category" value={newMachine.category} onChange={(e) => setNewMachine({ ...newMachine, category: e.target.value })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none" />
                                <input placeholder="Min Price (₹)" type="number" value={newMachine.priceMin || ""} onChange={(e) => setNewMachine({ ...newMachine, priceMin: Number(e.target.value) })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none" />
                                <input placeholder="Max Price (₹)" type="number" value={newMachine.priceMax || ""} onChange={(e) => setNewMachine({ ...newMachine, priceMax: Number(e.target.value) })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none" />
                            </div>
                            <button onClick={addMachine} className="flex items-center gap-2 px-5 py-2 bg-white text-[#0E1A2B] font-bold text-sm hover:bg-white/90 transition-colors">
                                <Save className="w-4 h-4" /> Save Machine
                            </button>
                        </div>
                    )}

                    <div className="bg-[#15181A] border border-white/10 overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Machine</th>
                                    <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Category</th>
                                    <th className="text-right px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Price Range</th>
                                    <th className="text-center px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Stock</th>
                                    <th className="text-right px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMachines.map((machine) => (
                                    <tr key={machine.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4">
                                            {editingId === machine.id ? (
                                                <input value={editForm.name || ""} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-full outline-none" />
                                            ) : (
                                                <span className="text-white font-medium">{machine.name}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {editingId === machine.id ? (
                                                <input value={editForm.category || ""} onChange={(e) => setEditForm({ ...editForm, category: e.target.value })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-full outline-none" />
                                            ) : (
                                                <span className="text-white/50">{machine.category}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {editingId === machine.id ? (
                                                <div className="flex items-center gap-1 justify-end">
                                                    <input type="number" value={editForm.priceMin || ""} onChange={(e) => setEditForm({ ...editForm, priceMin: Number(e.target.value) })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-24 text-right outline-none" />
                                                    <span className="text-white/20">—</span>
                                                    <input type="number" value={editForm.priceMax || ""} onChange={(e) => setEditForm({ ...editForm, priceMax: Number(e.target.value) })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-24 text-right outline-none" />
                                                </div>
                                            ) : (
                                                <span className="text-white font-bold">₹{(machine.priceMin / 100000).toFixed(1)}L — ₹{(machine.priceMax / 100000).toFixed(1)}L</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {editingId === machine.id ? (
                                                <button onClick={() => setEditForm({ ...editForm, inStock: !editForm.inStock })} className={`px-3 py-1 text-xs font-bold ${editForm.inStock ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                                                    {editForm.inStock ? "In Stock" : "Out"}
                                                </button>
                                            ) : (
                                                <span className={`px-3 py-1 text-xs font-bold ${machine.inStock ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                                                    {machine.inStock ? "In Stock" : "Out of Stock"}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {editingId === machine.id ? (
                                                <div className="flex items-center gap-2 justify-end">
                                                    <button onClick={saveEdit} className="p-2 text-green-400 hover:bg-green-500/10"><Save className="w-4 h-4" /></button>
                                                    <button onClick={() => { setEditingId(null); setEditForm({}); }} className="p-2 text-white/40 hover:text-white"><X className="w-4 h-4" /></button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 justify-end">
                                                    <button onClick={() => startEdit(machine)} className="p-2 text-white/40 hover:text-blue-400"><Pencil className="w-4 h-4" /></button>
                                                    <button onClick={() => deleteMachine(machine.id)} className="p-2 text-white/40 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {/* ========== LEADS TAB ========== */}
            {activeTab === "leads" && (
                <>
                    <p className="text-white/40 text-sm mb-6">Incoming quote requests from the /steelbridge/quote form.</p>
                    <div className="bg-[#15181A] border border-white/10 overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Contact</th>
                                    <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Company</th>
                                    <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Machine</th>
                                    <th className="text-center px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Qty</th>
                                    <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Date</th>
                                    <th className="text-center px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead) => (
                                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="text-white font-medium">{lead.name}</p>
                                            <p className="text-white/30 text-xs mt-1">{lead.email}</p>
                                            <p className="text-white/30 text-xs">{lead.phone}</p>
                                        </td>
                                        <td className="px-6 py-4 text-white/50">{lead.company}</td>
                                        <td className="px-6 py-4 text-white font-medium">{lead.machine}</td>
                                        <td className="px-6 py-4 text-center text-white">{lead.quantity}</td>
                                        <td className="px-6 py-4 text-white/50">{lead.date}</td>
                                        <td className="px-6 py-4 text-center">
                                            <select
                                                value={lead.status}
                                                onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead["status"])}
                                                className={`px-3 py-1 text-xs font-bold border-0 outline-none cursor-pointer ${statusColors[lead.status]}`}
                                            >
                                                <option value="new">New</option>
                                                <option value="contacted">Contacted</option>
                                                <option value="quoted">Quoted</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {leads.length === 0 && (
                            <div className="text-center py-12 text-white/30 text-sm">No leads yet.</div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
