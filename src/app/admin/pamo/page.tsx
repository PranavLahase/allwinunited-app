"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Save, X, Search } from "lucide-react"

interface PamoProduct {
    id: number
    name: string
    price: number
    originalPrice: number
    category: string
    inStock: boolean
}

const initialProducts: PamoProduct[] = [
    { id: 1, name: "Premium Wireless Earbuds Pro", price: 2999, originalPrice: 4999, category: "Audio", inStock: true },
    { id: 2, name: "Smart Fitness Watch", price: 3499, originalPrice: 5999, category: "Wearables", inStock: true },
    { id: 3, name: "Portable Bluetooth Speaker", price: 1999, originalPrice: 2999, category: "Audio", inStock: true },
    { id: 4, name: "USB-C Fast Charging Hub", price: 1499, originalPrice: 1999, category: "Accessories", inStock: true },
    { id: 5, name: "Smart LED Desk Lamp", price: 2499, originalPrice: 3499, category: "Home", inStock: false },
    { id: 6, name: "Wireless Charging Pad", price: 999, originalPrice: 1499, category: "Accessories", inStock: true },
]

export default function PamoAdminPage() {
    const [products, setProducts] = useState<PamoProduct[]>(initialProducts)
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editForm, setEditForm] = useState<Partial<PamoProduct>>({})
    const [showAdd, setShowAdd] = useState(false)
    const [newProduct, setNewProduct] = useState<Partial<PamoProduct>>({ name: "", price: 0, originalPrice: 0, category: "", inStock: true })
    const [search, setSearch] = useState("")

    const startEdit = (product: PamoProduct) => {
        setEditingId(product.id)
        setEditForm({ ...product })
    }

    const saveEdit = () => {
        if (editingId === null) return
        setProducts(products.map(p => p.id === editingId ? { ...p, ...editForm } as PamoProduct : p))
        setEditingId(null)
        setEditForm({})
    }

    const deleteProduct = (id: number) => {
        if (confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(p => p.id !== id))
        }
    }

    const addProduct = () => {
        if (!newProduct.name || !newProduct.price) return
        const newId = Math.max(...products.map(p => p.id), 0) + 1
        setProducts([...products, { id: newId, name: newProduct.name!, price: newProduct.price!, originalPrice: newProduct.originalPrice || newProduct.price!, category: newProduct.category || "Uncategorized", inStock: newProduct.inStock ?? true }])
        setNewProduct({ name: "", price: 0, originalPrice: 0, category: "", inStock: true })
        setShowAdd(false)
    }

    const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">PAMO Products</h1>
                    <p className="text-white/40 text-sm">{products.length} products total</p>
                </div>
                <button
                    onClick={() => setShowAdd(true)}
                    className="flex items-center gap-2 px-5 py-3 bg-[#5F8C62] text-white font-bold text-sm hover:bg-[#4F7C52] transition-colors"
                >
                    <Plus className="w-4 h-4" /> Add Product
                </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products by name or category..."
                    className="w-full pl-11 pr-4 py-3 bg-[#15181A] border border-white/10 text-white placeholder-white/30 focus:border-[#5F8C62] outline-none transition-colors text-sm"
                />
            </div>

            {/* Add Product Form */}
            {showAdd && (
                <div className="bg-[#15181A] border border-[#5F8C62]/30 p-6 mb-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">New Product</h3>
                        <button onClick={() => setShowAdd(false)} className="text-white/40 hover:text-white"><X className="w-5 h-5" /></button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <input placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none focus:border-[#5F8C62]" />
                        <input placeholder="Price (₹)" type="number" value={newProduct.price || ""} onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none focus:border-[#5F8C62]" />
                        <input placeholder="Original Price (₹)" type="number" value={newProduct.originalPrice || ""} onChange={(e) => setNewProduct({ ...newProduct, originalPrice: Number(e.target.value) })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none focus:border-[#5F8C62]" />
                        <input placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="px-3 py-2 bg-[#0E1A2B] border border-white/10 text-white text-sm placeholder-white/30 outline-none focus:border-[#5F8C62]" />
                    </div>
                    <button onClick={addProduct} className="flex items-center gap-2 px-5 py-2 bg-[#5F8C62] text-white font-bold text-sm hover:bg-[#4F7C52] transition-colors">
                        <Save className="w-4 h-4" /> Save Product
                    </button>
                </div>
            )}

            {/* Products Table */}
            <div className="bg-[#15181A] border border-white/10 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Product</th>
                            <th className="text-left px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Category</th>
                            <th className="text-right px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Price</th>
                            <th className="text-right px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Original</th>
                            <th className="text-center px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Stock</th>
                            <th className="text-right px-6 py-4 text-white/40 font-bold uppercase tracking-wider text-[10px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((product) => (
                            <tr key={product.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4">
                                    {editingId === product.id ? (
                                        <input value={editForm.name || ""} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-full outline-none focus:border-[#5F8C62]" />
                                    ) : (
                                        <span className="text-white font-medium">{product.name}</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {editingId === product.id ? (
                                        <input value={editForm.category || ""} onChange={(e) => setEditForm({ ...editForm, category: e.target.value })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-full outline-none focus:border-[#5F8C62]" />
                                    ) : (
                                        <span className="text-white/50">{product.category}</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {editingId === product.id ? (
                                        <input type="number" value={editForm.price || ""} onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-24 text-right outline-none focus:border-[#5F8C62]" />
                                    ) : (
                                        <span className="text-[#5F8C62] font-bold">₹{product.price.toLocaleString("en-IN")}</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {editingId === product.id ? (
                                        <input type="number" value={editForm.originalPrice || ""} onChange={(e) => setEditForm({ ...editForm, originalPrice: Number(e.target.value) })} className="px-2 py-1 bg-[#0E1A2B] border border-white/10 text-white text-sm w-24 text-right outline-none focus:border-[#5F8C62]" />
                                    ) : (
                                        <span className="text-white/30 line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {editingId === product.id ? (
                                        <button onClick={() => setEditForm({ ...editForm, inStock: !editForm.inStock })} className={`px-3 py-1 text-xs font-bold ${editForm.inStock ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                                            {editForm.inStock ? "In Stock" : "Out"}
                                        </button>
                                    ) : (
                                        <span className={`px-3 py-1 text-xs font-bold ${product.inStock ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                                            {product.inStock ? "In Stock" : "Out of Stock"}
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {editingId === product.id ? (
                                        <div className="flex items-center gap-2 justify-end">
                                            <button onClick={saveEdit} className="p-2 text-green-400 hover:bg-green-500/10 transition-colors" title="Save">
                                                <Save className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => { setEditingId(null); setEditForm({}); }} className="p-2 text-white/40 hover:text-white transition-colors" title="Cancel">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 justify-end">
                                            <button onClick={() => startEdit(product)} className="p-2 text-white/40 hover:text-blue-400 transition-colors" title="Edit">
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => deleteProduct(product.id)} className="p-2 text-white/40 hover:text-red-400 transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filtered.length === 0 && (
                    <div className="text-center py-12 text-white/30 text-sm">No products found.</div>
                )}
            </div>
        </div>
    )
}
